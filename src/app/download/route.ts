import { NextResponse } from "next/server";

import { getLatestApk } from "@/lib/apk";

export const revalidate = 300;

export async function GET(request: Request) {
  const apk = await getLatestApk();

  if (!apk) {
    return NextResponse.redirect(new URL("/#download", request.url), 302);
  }

  const response = NextResponse.redirect(apk.url, 302);
  response.headers.set("Cache-Control", "public, max-age=0, s-maxage=300, stale-while-revalidate=600");
  return response;
}
