export type ApkSource = "eas" | "url" | "file";

export type LatestApk = {
  url: string;
  version: string | null;
  buildVersion: string | null;
  profile: string | null;
  createdAt: string | null;
  source: ApkSource;
};

type ExpoBuild = {
  id: string;
  buildProfile?: string | null;
  appVersion?: string | null;
  appBuildVersion?: string | null;
  createdAt?: string | null;
  artifacts?: {
    buildUrl?: string | null;
    applicationArchiveUrl?: string | null;
  } | null;
};

const EXPO_GRAPHQL = "https://api.expo.dev/graphql";
const DEFAULT_PROJECT_ID = "d0d70f00-72ec-4885-8bf8-c065bcac9687";
const DEFAULT_PROFILE = "preview";

const BUILDS_QUERY = `
  query LatestAndroidBuilds($appId: String!, $offset: Int!, $limit: Int!, $filter: BuildFilter) {
    app {
      byId(appId: $appId) {
        id
        builds(offset: $offset, limit: $limit, filter: $filter) {
          id
          buildProfile
          appVersion
          appBuildVersion
          createdAt
          artifacts {
            buildUrl
            applicationArchiveUrl
          }
        }
      }
    }
  }
`;

function isApkUrl(url: string | null | undefined): url is string {
  return typeof url === "string" && /\.apk(?:$|\?)/i.test(url);
}

function artifactUrl(build: ExpoBuild): string | null {
  const archive = build.artifacts?.applicationArchiveUrl;
  const buildUrl = build.artifacts?.buildUrl;
  if (isApkUrl(archive)) return archive;
  if (isApkUrl(buildUrl)) return buildUrl;
  return null;
}

function toLatestApk(build: ExpoBuild, url: string): LatestApk {
  return {
    url,
    version: build.appVersion ?? null,
    buildVersion: build.appBuildVersion ?? null,
    profile: build.buildProfile ?? null,
    createdAt: build.createdAt ?? null,
    source: "eas",
  };
}

async function queryBuilds(
  token: string,
  projectId: string,
  filter: Record<string, string>,
): Promise<ExpoBuild[]> {
  const response = await fetch(EXPO_GRAPHQL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: BUILDS_QUERY,
      variables: {
        appId: projectId,
        offset: 0,
        limit: 8,
        filter,
      },
    }),
    next: { revalidate: 300 },
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error(`Expo respondeu ${response.status} ao listar builds.`);
  }

  const payload = (await response.json()) as {
    data?: { app?: { byId?: { builds?: ExpoBuild[] } | null } | null };
    errors?: { message: string }[];
  };

  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }

  return payload.data?.app?.byId?.builds ?? [];
}

async function latestFromEas(): Promise<LatestApk | null> {
  const token = process.env.EXPO_TOKEN;
  if (!token) return null;

  const projectId = process.env.EXPO_PROJECT_ID || DEFAULT_PROJECT_ID;
  const profile = process.env.EXPO_BUILD_PROFILE || DEFAULT_PROFILE;

  try {
    const profiled = await queryBuilds(token, projectId, {
      platform: "ANDROID",
      status: "FINISHED",
      buildProfile: profile,
    });
    const profiledApk = profiled.map((build) => ({ build, url: artifactUrl(build) })).find((item) => item.url);
    if (profiledApk?.url) return toLatestApk(profiledApk.build, profiledApk.url);

    const recent = await queryBuilds(token, projectId, {
      platform: "ANDROID",
      status: "FINISHED",
    });
    const fallback = recent
      .filter((build) => build.buildProfile !== "development")
      .map((build) => ({ build, url: artifactUrl(build) }))
      .find((item) => item.url);

    return fallback?.url ? toLatestApk(fallback.build, fallback.url) : null;
  } catch (error) {
    console.error("Não foi possível consultar a última build no Expo.", error);
    return null;
  }
}

function manualUrl(): LatestApk | null {
  const url = process.env.APK_DOWNLOAD_URL;
  if (!url || !/^https:\/\//i.test(url)) return null;
  return {
    url,
    version: null,
    buildVersion: null,
    profile: null,
    createdAt: null,
    source: "url",
  };
}

async function localFile(): Promise<LatestApk | null> {
  const { access } = await import("node:fs/promises");
  const path = await import("node:path");
  const filePath = path.join(process.cwd(), "public", "logic-jigsaw.apk");

  try {
    await access(filePath);
  } catch {
    return null;
  }

  return {
    url: "/logic-jigsaw.apk",
    version: null,
    buildVersion: null,
    profile: null,
    createdAt: null,
    source: "file",
  };
}

export async function getLatestApk(): Promise<LatestApk | null> {
  return (await latestFromEas()) ?? manualUrl() ?? (await localFile());
}

export function formatBuildDate(value: string | null): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(date);
}
