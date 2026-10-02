import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const contactEmail = process.env.PRIVACY_CONTACT_EMAIL?.trim() ?? "";

export const metadata: Metadata = {
  title: "Política de privacidade — Logic Jigsaw",
  description:
    "Como o Logic Jigsaw trata conta, progresso, ranking, anúncios e compras, e como pedir exclusão dos dados.",
  robots: { index: true, follow: true },
};

const updated = "2 de outubro de 2026";

export default function PrivacyPage() {
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
          <Link href="/" className="text-sm font-extrabold text-white">
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="bg-cream px-4 py-10 text-ink sm:px-6">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-extrabold tracking-[0.16em] text-brand uppercase">Logic Jigsaw</p>
          <h1 className="font-display mt-2 text-4xl font-extrabold sm:text-5xl">Política de privacidade</h1>
          <p className="mt-3 text-sm font-bold text-muted">Vigente a partir de {updated}. Pacote Android: app.logicjigsaw.game.</p>
          <p className="mt-6 text-base leading-relaxed font-semibold">
            Esta página explica quais dados o aplicativo Logic Jigsaw trata, para que servem, com quem são compartilhados e como você pede acesso ou exclusão. Ela vale para o app Android publicado na Google Play e para o uso do jogo com ou sem conta.
          </p>

          <Section title="Quem é responsável">
            <p>
              O responsável pelo tratamento é o desenvolvedor do Logic Jigsaw. O jogo usa a Supabase para guardar conta e progresso na nuvem, e a Google para login, pagamentos da Play e anúncios. Esses serviços tratam dados em nome do jogo ou segundo as próprias políticas, citadas abaixo.
            </p>
          </Section>

          <Section title="Dados tratados">
            <p>Dá para jogar sem conta. Nesse caso o progresso fica só no aparelho. A conta é opcional e serve para sincronizar recordes e aparecer no ranking.</p>
            <h3 className="mt-4 font-display text-xl font-extrabold">No aparelho, sem conta</h3>
            <ul>
              <li>Fases concluídas, melhores tempos e preferências do jogo, inclusive idioma e se o tutorial já foi visto.</li>
              <li>Esses dados ficam no armazenamento local do app. Não são enviados ao nosso servidor enquanto você joga como visitante.</li>
            </ul>
            <h3 className="mt-4 font-display text-xl font-extrabold">Se você criar conta ou entrar com Google</h3>
            <ul>
              <li>E-mail e senha, quando o cadastro é por e-mail. A senha é tratada pelo serviço de autenticação e não fica visível para o ranking.</li>
              <li>Identificador da conta Google, e-mail e nome básico enviados pelo login “Continuar com Google”, se você escolher esse caminho.</li>
              <li>Apelido público, de 3 a 16 caracteres, usado no ranking.</li>
              <li>Progresso na nuvem: identificador da fase, melhor tempo e data de conclusão.</li>
              <li>Preferência de ocultar o tutorial, ligada à sua conta.</li>
            </ul>
            <h3 className="mt-4 font-display text-xl font-extrabold">Compras</h3>
            <ul>
              <li>A compra para remover anúncios é feita pela Google Play. O Logic Jigsaw não recebe o número do cartão nem a senha da Play.</li>
              <li>Para reconhecer que a compra é sua, guardamos o identificador da conta, o produto, o token da compra, o identificador do pedido e a plataforma.</li>
            </ul>
            <h3 className="mt-4 font-display text-xl font-extrabold">Anúncios</h3>
            <ul>
              <li>O app exibe anúncios intersticiais e recompensados pelo Google AdMob, salvo se você tiver a compra de remoção de anúncios.</li>
              <li>A Google pode tratar identificador de publicidade, identificadores do aparelho, endereço IP, localização aproximada derivada do IP, idioma e interações com o anúncio, para mostrar, medir e limitar anúncios.</li>
            </ul>
            <h3 className="mt-4 font-display text-xl font-extrabold">O que o app não pede</h3>
            <p>
              O Logic Jigsaw não solicita contatos, fotos, microfone, câmera, arquivos pessoais, calendário nem localização precisa por GPS. O idioma do aparelho é usado só para escolher o texto do jogo.
            </p>
          </Section>

          <Section title="Para que usamos os dados">
            <ul>
              <li>Rodar as fases, salvar o progresso e restaurar a compra de remoção de anúncios.</li>
              <li>Criar e manter a conta, confirmar o e-mail e permitir a entrada.</li>
              <li>Mostrar o ranking com o apelido, a quantidade de fases concluídas e os tempos. O e-mail não entra no ranking.</li>
              <li>Exibir anúncios e, depois da compra correspondente, deixar de exibi-los.</li>
              <li>Atender pedidos de acesso, correção e exclusão.</li>
            </ul>
            <p>Não vendemos dados pessoais.</p>
          </Section>

          <Section title="Com quem compartilhamos">
            <ul>
              <li>
                <strong>Supabase.</strong> Hospeda a autenticação e as tabelas de perfil, progresso, preferências e compras do jogo. O acesso às linhas da conta é limitado ao próprio usuário, exceto o ranking, que só publica apelido, fases concluídas e tempos.
              </li>
              <li>
                <strong>Google.</strong> Login com Google, faturamento da Google Play e anúncios do AdMob. A política da Google está em{" "}
                <External href="https://policies.google.com/privacy">policies.google.com/privacy</External>. A parte de anúncios está em{" "}
                <External href="https://policies.google.com/technologies/ads">policies.google.com/technologies/ads</External>.
              </li>
              <li>
                <strong>Outros jogadores.</strong> Quem consulta o ranking vê apelido e tempos. Não vê e-mail, token de compra nem identificador interno da conta.
              </li>
            </ul>
            <p>
              Esses prestadores podem processar dados fora do Brasil. A política da Supabase está em{" "}
              <External href="https://supabase.com/privacy">supabase.com/privacy</External>.
            </p>
          </Section>

          <Section title="Anúncios e identificador do aparelho">
            <p>
              No Android, o AdMob pode usar o ID de publicidade. Você pode redefinir ou excluir esse identificador em Configurações, Privacidade, Anúncios, no aparelho. Se a compra de remoção de anúncios estiver ativa na sua conta, o jogo deixa de solicitar anúncios. Dados já recebidos pela Google continuam sujeitos à política dela.
            </p>
          </Section>

          <Section title="Por quanto tempo guardamos">
            <ul>
              <li>Dados locais permanecem no aparelho até você usar “Apagar recordes deste aparelho”, em Ajustes, ou desinstalar o app. Apagar os recordes locais não remove tempos já salvos na nuvem.</li>
              <li>Conta, apelido, progresso na nuvem, preferências e registro da compra permanecem enquanto a conta existir.</li>
              <li>Depois de um pedido de exclusão, apagamos esses dados da base do jogo, salvo o que a lei exigir conservar, como comprovante de pagamento mantido pela Google Play.</li>
            </ul>
          </Section>

          <Section title="Segurança">
            <p>
              A comunicação com a nuvem usa HTTPS. A senha da conta por e-mail é gerida pelo serviço de autenticação. Compras são conferidas no servidor antes de marcar a remoção de anúncios. Nenhum método de armazenamento é isento de risco; em caso de incidente que afete dados pessoais, informaremos os titulares e a autoridade quando a lei exigir.
            </p>
          </Section>

          <Section title="Crianças">
            <p>
              O Logic Jigsaw é um quebra-cabeça para o público em geral. Não é direcionado a coletar dados de crianças. A conta é opcional. O app pode exibir anúncios da Google. Se você é responsável por uma criança e acredita que ela criou uma conta, peça a exclusão pelo contato abaixo.
            </p>
          </Section>

          <Section title="Seus direitos" id="exclusao">
            <p>
              Pela Lei Geral de Proteção de Dados, você pode pedir confirmação do tratamento, acesso, correção, exclusão, informação sobre compartilhamento e revogação do consentimento, quando ele for a base do tratamento. Também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados.
            </p>
            <p>
              Para excluir a conta e os dados na nuvem (apelido, progresso sincronizado, preferências e o vínculo da compra no jogo), siga o passo a passo em{" "}
              <Link className="font-extrabold text-brand underline" href="/exclusao">
                Exclusão de conta
              </Link>
              . Os recordes que estão só no aparelho saem em Ajustes, “Apagar recordes deste aparelho”, ou quando o app é desinstalado.
            </p>
          </Section>

          <Section title="Base legal">
            <p>
              Usamos a execução do serviço de jogo para conta, progresso e compra; o consentimento quando você decide criar conta, entrar com Google ou interagir com anúncios; e o cumprimento de obrigação legal quando for preciso guardar um registro. Você pode retirar um consentimento sem apagar, com isso, o que já foi tratado de forma lícita até aquele momento.
            </p>
          </Section>

          <Section title="Alterações">
            <p>
              Se o tratamento mudar, esta página será atualizada e a data do início da vigência será ajustada. O uso do app depois da publicação da nova versão indica que você pode consultar o texto atual neste mesmo endereço.
            </p>
          </Section>

          <Section title="Contato" id="contato">
            {contactEmail ? (
              <p>
                Pedidos de privacidade, acesso e exclusão:{" "}
                <a className="font-extrabold text-brand underline" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
                .
              </p>
            ) : (
              <p>
                Pedidos de privacidade, acesso e exclusão devem ser enviados ao desenvolvedor do Logic Jigsaw pelo e-mail de contato publicado na ficha do app na Google Play.
              </p>
            )}
          </Section>
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
        {" · "}
        <Link href="/exclusao" className="underline">
          Exclusão de conta
        </Link>
        {" · "}
        {updated}
      </footer>
    </>
  );
}

function Section({ title, id, children }: { title: string; id?: string; children: ReactNode }) {
  return (
    <section id={id} className="mt-10 scroll-mt-8">
      <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed font-semibold text-ink [&_a]:break-all [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="font-extrabold text-brand underline" href={href} rel="noopener noreferrer">
      {children}
    </a>
  );
}
