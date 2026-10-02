import { Hero } from "@/components/hero";
import { InstallGuide } from "@/components/install-guide";
import { ScreenRail } from "@/components/screen-rail";
import { SiteHeader } from "@/components/site-header";
import { getLatestApk } from "@/lib/apk";
import { appScreens, promoShots } from "@/lib/screens";

export const revalidate = 300;

const playSteps = [
  {
    title: "Arraste as peças",
    text: "Puxe cada peça colorida da bandeja para o tabuleiro e use Girar quando a orientação não encaixar.",
  },
  {
    title: "Preencha o tabuleiro",
    text: "O objetivo é cobrir o tabuleiro 8×8. Os blocos cinza já ocupam um espaço e não se movem.",
  },
  {
    title: "Supere as fases",
    text: "São 88 fases em cinco níveis. Conclua o nível atual para desbloquear o próximo, do Iniciante ao Expert.",
  },
  {
    title: "Bata o seu tempo",
    text: "Cada fase marca o tempo. Jogue de novo para melhorar o recorde e acompanhe o ranking.",
  },
];

const questions = [
  {
    q: "Por que o APK, e não a loja?",
    a: "O Logic Jigsaw ainda não está na Google Play nem na App Store. As lojas aparecem nesta página como “Em breve”. Até lá, o botão de download entrega o APK da versão mais recente do jogo.",
  },
  {
    q: "Precisa criar conta para jogar?",
    a: "Não. Dá para jogar como visitante, com o progresso e os tempos neste aparelho. A conta é opcional, para guardar o progresso na nuvem e aparecer no ranking.",
  },
  {
    q: "É seguro instalar por fora da loja?",
    a: "Instale só o arquivo baixado deste site. Ele é o pacote gerado na build do próprio jogo. O Android pede permissão porque o arquivo não veio da Google Play, e isso é esperado.",
  },
];

export default async function HomePage() {
  const apk = await getLatestApk();

  return (
    <>
      <SiteHeader />
      <main>
        <Hero apk={apk} />

        <section id="como-jogar" className="scroll-mt-24 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-center text-4xl font-extrabold sm:text-5xl">Como jogar?</h2>
            <p className="mt-2 text-center text-lg font-bold text-brand">É simples e viciante.</p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {playSteps.map((step, index) => (
                <li key={step.title} className="rounded-[1.5rem] bg-white p-5 shadow-[0_12px_30px_rgba(27,36,48,0.05)] ring-1 ring-black/5">
                  <span className="grid size-10 place-items-center rounded-2xl bg-[#e7f6ee] font-display text-xl font-extrabold text-brand">
                    {index + 1}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed font-semibold text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="telas" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Veja algumas telas do jogo</h2>
            <p className="mt-2 max-w-xl text-lg font-semibold text-muted">Interface simples, colorida e feita para o celular.</p>
            <div className="mt-8">
              <ScreenRail shots={appScreens} label="telas" />
            </div>

            <h3 className="font-display mt-12 text-3xl font-extrabold">Imagens do app</h3>
            <p className="mt-2 text-base font-semibold text-muted">As mesmas telas, no visual das peças coloridas.</p>
            <div className="mt-6">
              <ScreenRail shots={promoShots} label="imagens" />
            </div>
          </div>
        </section>

        <InstallGuide />

        <section id="faq" className="scroll-mt-24 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-center text-4xl font-extrabold sm:text-5xl">Perguntas frequentes</h2>
            <div className="mt-8 space-y-3">
              {questions.map((item) => (
                <details key={item.q} className="group rounded-2xl bg-white px-5 py-4 ring-1 ring-black/5 open:shadow-sm">
                  <summary className="cursor-pointer list-none font-extrabold [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="mt-1 text-brand group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed font-semibold text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="lojas" className="bg-brand px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Disponível em breve nas lojas oficiais</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg font-semibold text-white/90">
              O Logic Jigsaw vai chegar à Google Play e à App Store. Enquanto isso, baixe o aplicativo por aqui.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              {apk ? (
                <a href="/download" className="rounded-full bg-sun px-6 py-3 text-base font-extrabold text-brand-deep">
                  Baixar APK para Android
                </a>
              ) : (
                <p className="rounded-full bg-white/15 px-6 py-3 text-base font-extrabold">APK em breve</p>
              )}
              <p className="rounded-full border border-white/40 px-6 py-3 text-base font-extrabold">Google Play · Em breve</p>
              <p className="rounded-full border border-white/40 px-6 py-3 text-base font-extrabold">App Store · Em breve</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-brand-deep px-4 py-6 text-center text-sm font-bold text-white/80">
        <p>Logic Jigsaw · tabuleiro 8×8 · {new Date().getFullYear()}</p>
        <p className="mt-2">
          <a href="/privacidade" className="underline">
            Política de privacidade
          </a>
        </p>
      </footer>
    </>
  );
}
