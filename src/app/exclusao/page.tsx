import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const contactEmail = process.env.PRIVACY_CONTACT_EMAIL?.trim() ?? "";

export const metadata: Metadata = {
  title: "Exclusão de conta — Logic Jigsaw",
  description:
    "Como pedir a exclusão da conta do Logic Jigsaw e quais dados saem ou permanecem.",
  robots: { index: true, follow: true },
};

export default function AccountDeletionPage() {
  return (
    <>
      <header className="bg-brand text-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-2 rounded-full">
            <Image src="/brand-icon.png" alt="" width={36} height={36} className="size-9 rounded-xl" />
            <span className="truncate font-display text-lg font-extrabold">
              Logic <span className="text-sun">Jigsaw</span>
            </span>
          </Link>
          <Link href="/privacidade" className="text-sm font-extrabold text-white">
            Política de privacidade
          </Link>
        </div>
      </header>

      <main className="bg-cream px-4 py-10 text-ink sm:px-6">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-extrabold tracking-[0.16em] text-brand uppercase">Logic Jigsaw</p>
          <h1 className="font-display mt-2 text-4xl font-extrabold sm:text-5xl">Exclusão de conta</h1>
          <p className="mt-3 text-sm font-bold text-muted">Pacote Android: app.logicjigsaw.game.</p>
          <p className="mt-6 text-base leading-relaxed font-semibold">
            O aplicativo Logic Jigsaw permite criar uma conta com e-mail e senha. O pedido abaixo apaga essa conta e os dados dela na nuvem. A conta é opcional: quem joga sem entrar não tem conta para excluir.
          </p>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Passos para solicitar a exclusão</h2>
            <ol className="mt-4 space-y-3 rounded-2xl bg-white p-5 text-base leading-relaxed font-semibold ring-1 ring-black/5">
              <li>
                <span className="font-extrabold text-brand">1.</span> Envie um e-mail
                {contactEmail ? (
                  <>
                    {" "}
                    para{" "}
                    <a className="font-extrabold text-brand underline" href={`mailto:${contactEmail}?subject=Exclus%C3%A3o%20de%20conta%20do%20Logic%20Jigsaw`}>
                      {contactEmail}
                    </a>
                  </>
                ) : (
                  " para o contato publicado na ficha do Logic Jigsaw na Google Play"
                )}
                .
              </li>
              <li>
                <span className="font-extrabold text-brand">2.</span> Use o assunto{" "}
                <strong>Exclusão de conta do Logic Jigsaw</strong>.
              </li>
              <li>
                <span className="font-extrabold text-brand">3.</span> No texto, informe o e-mail da conta que deve ser apagada. Se você tiver um nickname no ranking, inclua esse nome também.
              </li>
              <li>
                <span className="font-extrabold text-brand">4.</span> Envie a mensagem a partir do mesmo e-mail da conta, para confirmarmos que o pedido é seu.
              </li>
            </ol>
            <p className="mt-4 text-base leading-relaxed font-semibold">
              A exclusão é concluída em até <strong>30 dias</strong> depois que o pedido chega. Quando terminar, enviamos uma confirmação para esse mesmo e-mail. Até lá, a conta e os dados da nuvem continuam armazenados. Depois da exclusão, o Logic Jigsaw não guarda esses dados por um prazo adicional.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Dados excluídos</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed font-semibold">
              <li>E-mail e senha da conta do Logic Jigsaw.</li>
              <li>Nickname público do ranking.</li>
              <li>Recordes de tempo das fases salvos na nuvem.</li>
              <li>Preferências vinculadas à conta, inclusive a de ocultar o tutorial.</li>
              <li>O vínculo da compra de remoção de anúncios com essa conta, dentro do Logic Jigsaw.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Dados que permanecem</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed font-semibold">
              <li>
                Recordes gravados só neste aparelho. Eles não estão na nuvem. Saem se você tocar em “Apagar recordes deste aparelho”, em Configurações, ou se desinstalar o app.
              </li>
              <li>O histórico de compra na Google Play, que a Google mantém. O Logic Jigsaw não guarda número de cartão.</li>
              <li>Dados de anúncio tratados pela Google. Depois da exclusão da conta, o Logic Jigsaw não guarda uma cópia sua.</li>
            </ul>
          </section>

          <section id="sem-excluir-conta" className="mt-10 scroll-mt-8">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Apagar dados sem excluir a conta</h2>
            <p className="mt-3 text-base leading-relaxed font-semibold">
              Os recordes salvos apenas neste aparelho podem ser apagados sem excluir a conta: abra o Logic Jigsaw, vá em Configurações e toque em <strong>Apagar recordes deste aparelho</strong>. Nickname e recordes da nuvem só saem junto com a exclusão da conta, pelos passos acima.
            </p>
            <p className="mt-3 text-base leading-relaxed font-semibold">
              O tratamento completo dos dados está na{" "}
              <Link href="/privacidade" className="font-extrabold text-brand underline">
                política de privacidade
              </Link>
              .
            </p>
          </section>
        </article>
      </main>

      <footer className="bg-brand-deep px-4 py-6 text-center text-sm font-bold text-white/80">
        <Link href="/" className="underline">
          Logic Jigsaw
        </Link>
        {" · "}
        <Link href="/privacidade" className="underline">
          Política de privacidade
        </Link>
      </footer>
    </>
  );
}
