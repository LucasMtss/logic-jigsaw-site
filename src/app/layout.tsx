import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";

import "./globals.css";

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-baloo",
});

const body = Nunito({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-nunito",
});

const description =
  "Encaixe as peças coloridas, preencha o tabuleiro 8×8 e supere 88 fases. Baixe o APK para Android enquanto o Logic Jigsaw chega às lojas.";

export const metadata: Metadata = {
  title: "Logic Jigsaw — Quebra-cabeças lógicos",
  description,
  applicationName: "Logic Jigsaw",
  openGraph: {
    title: "Logic Jigsaw — Quebra-cabeças lógicos",
    description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/screens/promo-home.jpg", alt: "Logic Jigsaw no celular" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#117a4c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
