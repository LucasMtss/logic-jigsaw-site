import Image from "next/image";

import { formatBuildDate, type LatestApk } from "@/lib/apk";

export function Hero({ apk }: { apk: LatestApk | null }) {
  const when = formatBuildDate(apk?.createdAt ?? null);
  const version = apk?.version
    ? `versão ${apk.version}${apk.buildVersion ? ` (${apk.buildVersion})` : ""}`
    : null;

  return (
    <section id="inicio" className="relative overflow-hidden bg-brand text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.22) 1.1px, transparent 1.15px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-brand-bright/40 blur-3xl" aria-hidden="true" />

      <Piece className="top-28 -left-4 hidden h-8 w-16 bg-sun lg:block" rotate={-12} delay="0s" />
      <Piece className="-right-4 bottom-24 hidden h-7 w-14 bg-[#ff5b5b] lg:block" rotate={14} delay="0.6s" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pt-8 pb-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-12 lg:pb-20">
        <div>
          <p className="text-xs font-extrabold tracking-[0.22em] text-white">QUEBRA-CABEÇAS LÓGICOS</p>
          <h1 className="font-display mt-3 text-[3.1rem] leading-[0.92] font-extrabold sm:text-7xl">
            Monte.
            <br />
            Pense.
            <br />
            <span className="text-sun">Resolva.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed font-semibold text-white/95">
            Use seu raciocínio para encaixar todas as peças no tabuleiro. São 88 fases desafiadoras para você se divertir por horas.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {["Raciocínio lógico", "Desafios progressivos", "Jogue sem cadastro", "Para todas as idades"].map((item) => (
              <li key={item} className="rounded-full bg-white/15 px-3 py-1.5 text-sm font-extrabold">
                {item}
              </li>
            ))}
          </ul>

          <div id="download" className="mt-7 scroll-mt-24">
            <p className="mb-3 max-w-md text-base font-bold text-white">
              Google Play e App Store em breve. Enquanto isso, baixe o aplicativo por aqui.
            </p>
            {apk ? (
              <a
                href="/download"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-sun px-6 py-4 text-left font-extrabold text-brand-deep shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition hover:brightness-105 sm:w-auto"
              >
                <AndroidMark />
                <span>
                  <span className="block text-lg leading-none">Baixar APK para Android</span>
                </span>
              </a>
            ) : (
              <p className="rounded-3xl bg-white/12 px-5 py-4 text-base font-bold ring-1 ring-white/25">
                O download direto será liberado em breve, assim que o APK da última build estiver disponível.
              </p>
            )}
            {apk ? (
              <p className="mt-3 text-sm font-bold text-white">
                {apk.source === "eas"
                  ? `Este botão baixa o APK mais recente gerado no Expo${when ? ` em ${when}` : ""}.`
                  : "Este botão baixa o APK publicado para Android."}
              </p>
            ) : null}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <StoreSoon name="Google Play" mark="play" />
            <StoreSoon name="App Store" mark="apple" />
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-extrabold sm:flex sm:flex-wrap sm:gap-x-5">
            {["Gratuito", "Progresso no aparelho", "Jogo leve", "Funciona offline"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto h-[460px] w-full max-w-lg">
          <div className="absolute top-8 left-0 w-[58%] rotate-[-8deg]">
            <PhoneShot src="/screens/home.jpg" alt="Celular com a tela inicial do Logic Jigsaw" />
          </div>
          <div className="absolute top-0 right-0 w-[58%] rotate-[7deg]">
            <PhoneShot src="/screens/board.jpg" alt="Celular com o tabuleiro da fase 7" priority />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneShot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="rounded-[2rem] border-[7px] border-[#102033] bg-[#102033] shadow-[0_24px_50px_rgba(0,0,0,0.28)]">
      <div className="relative aspect-[9/18] overflow-hidden rounded-[1.4rem]">
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 280px, 50vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

function Piece({ className, rotate, delay }: { className: string; rotate: number; delay: string }) {
  return (
    <span
      aria-hidden="true"
      className={`float-piece pointer-events-none absolute z-0 rounded-2xl shadow-lg ${className}`}
      style={{ ["--piece-rotate" as string]: `${rotate}deg`, animationDelay: delay, transform: `rotate(${rotate}deg)` }}
    />
  );
}

function AndroidMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-7 shrink-0 fill-current" aria-hidden="true">
      <path d="M17.6 9.5h.1A2.4 2.4 0 0 1 20 11.9v5.2a2.4 2.4 0 0 1-2.4 2.4h-.2v.8a1 1 0 1 1-2 0v-.8H8.6v.8a1 1 0 1 1-2 0v-.8h-.2A2.4 2.4 0 0 1 4 17.1v-5.2a2.4 2.4 0 0 1 2.3-2.4h.1l-.7-1.2a.6.6 0 0 1 1-.6l.7 1.3h8.9l.7-1.3a.6.6 0 1 1 1 .6L17.6 9.5ZM9 13.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Zm6 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" />
    </svg>
  );
}

function StoreSoon({ name, mark }: { name: string; mark: "play" | "apple" }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/40 px-4 py-3 text-white/90" aria-disabled="true">
      {mark === "play" ? <PlayMark /> : <AppleMark />}
      <span>
        <span className="block text-[11px] font-extrabold tracking-wide text-white uppercase">Em breve</span>
        <span className="block text-sm leading-none font-extrabold">{name}</span>
      </span>
    </div>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path fill="#34A853" d="m3 20.2 9.2-9.2L3.6 2.4A2 2 0 0 0 3 3.4Z" />
      <path fill="#FBBC04" d="M15.8 13.6 13 10.8 3.7 20.4a2 2 0 0 0 2.5.7Z" />
      <path fill="#EA4335" d="m3.6 2.4 9.4 8.4 2.8-2.8L6.4 2A2 2 0 0 0 3.6 2.4Z" />
      <path fill="#4285F4" d="M15.8 13.6 6.2 21.1a2 2 0 0 0 3.1.2l6.5-5.4 3.4-1.9a2 2 0 0 0 0-3.4l-3.4-1.8Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 text-sun" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 12.5 10 17l9-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-white" aria-hidden="true">
      <path d="M16.4 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8s-1.7-.8-2.9-.8c-1.5 0-2.8.9-3.6 2.2-1.5 2.7-.4 6.6 1.1 8.8.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7 1.9-1.1 2.6-2.1c.8-1.2 1.1-2.3 1.2-2.4-.1 0-2.2-.8-2.2-3.6Zm-2-6.6c.6-.7 1-1.7.9-2.7-1 .1-2.1.6-2.7 1.4-.6.7-1.1 1.7-.9 2.6 1 .1 2.1-.5 2.7-1.3Z" />
    </svg>
  );
}
