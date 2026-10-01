import Image from "next/image";
import type { ReactNode } from "react";

const steps = [
  {
    title: "Baixe o APK",
    text: "Toque em “Baixar APK para Android” e aguarde o download terminar. O arquivo se chama algo como logic-jigsaw.apk.",
  },
  {
    title: "Permita esta fonte",
    text: "Se o Android bloquear a instalação, toque em Configurações no aviso e permita que o navegador ou a pasta Downloads instale apps. A partir do Android 8, essa permissão vale só para aquele aplicativo, não para o telefone inteiro. Em versões anteriores, o caminho é Configurações, Segurança, Fontes desconhecidas.",
  },
  {
    title: "Instale o app",
    text: "Abra o arquivo baixado, confira o nome Logic Jigsaw e toque em Instalar. O Android pode pedir espaço em disco e confirmação.",
  },
  {
    title: "Pronto para jogar",
    text: "Abra o Logic Jigsaw pela gaveta de apps. Na próxima vez que houver uma build nova, baixe de novo por este site: se a assinatura for a mesma, o Android atualiza o jogo que já está instalado.",
  },
];

export function InstallGuide() {
  return (
    <section id="instalar" className="scroll-mt-24 bg-cream px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-extrabold tracking-[0.18em] text-brand uppercase">Android</p>
        <h2 className="font-display mt-2 text-center text-4xl font-extrabold text-ink sm:text-5xl">Como instalar o APK</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg font-semibold text-muted">
          O arquivo não vem da loja, então o Android pede uma autorização extra. O passo a passo abaixo é o mesmo na maioria dos celulares.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-[0_12px_30px_rgba(27,36,48,0.06)] ring-1 ring-black/5">
              <div className="bg-[#e7f6ee] px-4 pt-4">
                <Demo step={index} />
              </div>
              <div className="flex flex-1 flex-col px-4 pt-4 pb-5">
                <span className="grid size-8 place-items-center rounded-full bg-brand text-sm font-extrabold text-white">{index + 1}</span>
                <h3 className="font-display mt-3 text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed font-semibold text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Demo({ step }: { step: number }) {
  if (step === 0) return <DownloadDemo />;
  if (step === 1) return <PermissionDemo />;
  if (step === 2) return <InstallDemo />;
  return <ReadyDemo />;
}

function PhoneShell({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="mx-auto w-[78%] max-w-[220px]" role="img" aria-label={label}>
      <div className="rounded-[1.4rem] border-[5px] border-[#173047] bg-[#f4f7f8] shadow-lg">
        <div className="flex items-center justify-between px-3 pt-2 text-[10px] font-extrabold text-[#173047]">
          <span>9:41</span>
          <span className="h-1.5 w-10 rounded-full bg-[#173047]" />
          <span>LTE</span>
        </div>
        <div className="min-h-44 px-3 pt-3 pb-4">{children}</div>
      </div>
    </div>
  );
}

function DownloadDemo() {
  return (
    <PhoneShell label="Ilustração do download do arquivo logic-jigsaw.apk">
      <p className="text-[11px] font-extrabold text-brand-deep">Download</p>
      <div className="mt-3 rounded-xl bg-white p-2.5 shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/brand-icon.png" alt="" width={28} height={28} className="size-7 rounded-md" />
          <div className="min-w-0">
            <p className="truncate text-[11px] font-extrabold text-ink">logic-jigsaw.apk</p>
            <p className="text-[10px] font-bold text-muted">Baixando…</p>
          </div>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e5eee9]">
          <div className="h-full w-4/5 rounded-full bg-brand" />
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] font-extrabold text-brand">Notificação do download</p>
    </PhoneShell>
  );
}

function PermissionDemo() {
  return (
    <PhoneShell label="Ilustração da permissão para instalar apps desta fonte">
      <p className="text-[11px] font-extrabold text-ink">Instalar apps desconhecidos</p>
      <p className="mt-1 text-[10px] leading-snug font-bold text-muted">Permitir que o Chrome instale apps de fora da loja.</p>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-white px-2.5 py-2 shadow-sm">
        <span className="text-[11px] font-extrabold">Permitir desta fonte</span>
        <span className="relative h-5 w-9 rounded-full bg-brand">
          <span className="absolute top-0.5 right-0.5 size-4 rounded-full bg-white" />
        </span>
      </div>
    </PhoneShell>
  );
}

function InstallDemo() {
  return (
    <PhoneShell label="Ilustração da tela de instalação do Logic Jigsaw">
      <div className="mx-auto mt-2 max-w-[180px] rounded-2xl bg-white p-3 text-center shadow-sm">
        <Image src="/brand-icon.png" alt="" width={42} height={42} className="mx-auto size-10 rounded-xl" />
        <p className="mt-2 text-[12px] font-extrabold text-ink">Instalar Logic Jigsaw?</p>
        <p className="mt-1 text-[10px] font-bold text-muted">O app pede espaço para salvar o jogo.</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-extrabold">
          <span className="rounded-full bg-[#eef2f4] py-1.5 text-muted">Cancelar</span>
          <span className="rounded-full bg-brand py-1.5 text-white">Instalar</span>
        </div>
      </div>
    </PhoneShell>
  );
}

function ReadyDemo() {
  return (
    <PhoneShell label="Ilustração do Logic Jigsaw instalado e aberto na tela inicial">
      <div className="grid grid-cols-3 gap-2 pt-1">
        <div className="flex flex-col items-center gap-1">
          <Image src="/brand-icon.png" alt="" width={36} height={36} className="size-9 rounded-xl shadow-sm" />
          <span className="text-center text-[9px] leading-tight font-extrabold text-ink">Logic Jigsaw</span>
        </div>
        <div className="size-9 rounded-xl bg-[#d5e0ea]" />
        <div className="size-9 rounded-xl bg-[#d5e0ea]" />
      </div>
      <p className="mt-4 text-center text-[10px] font-extrabold text-brand">Abra e comece a jogar</p>
    </PhoneShell>
  );
}
