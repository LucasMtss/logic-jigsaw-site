import Image from "next/image";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#como-jogar", label: "Como jogar" },
  { href: "#telas", label: "Telas" },
  { href: "#instalar", label: "Instalar" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex min-w-0 flex-1 items-center gap-2 rounded-full">
          <Image src="/brand-icon.png" alt="" width={36} height={36} className="size-9 shrink-0 rounded-xl sm:size-10" />
          <span className="truncate font-display text-lg leading-none font-extrabold tracking-tight text-white sm:text-2xl">
            Logic <span className="text-sun">Jigsaw</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-extrabold text-white lg:flex" aria-label="Seções">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-80">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#download"
            className="rounded-full bg-sun px-3 py-2 text-sm font-extrabold text-brand-deep shadow-sm transition hover:brightness-105 sm:px-4"
          >
            <span className="sm:hidden">Baixar</span>
            <span className="hidden sm:inline">Baixar agora</span>
          </a>
          <details className="relative lg:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full bg-white/15 text-white [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Abrir menu</span>
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </summary>
            <nav
              className="absolute right-0 mt-2 w-52 rounded-2xl bg-white p-2 text-sm font-extrabold text-ink shadow-xl"
              aria-label="Seções"
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} className="block rounded-xl px-3 py-2 hover:bg-cream">
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
