import type { Metadata } from "next";
import { Josefin_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NOVA Construction | Premium Villa & Construction",
  description:
    "NOVA Construction - Premium villa inşaatı, iç mimarlık ve peyzaj tasarımı. 25 yılı aşkın deneyim ile hayalinizdeki yaşam alanını gerçeğe dönüştürüyoruz.",
  keywords: [
    "NOVA Construction",
    "Villa İnşaatı",
    "Premium Villa",
    "İç Mimarlık",
    "Peyzaj Tasarımı",
    "İstanbul",
    "Lüks Villa",
    "Akıllı Ev",
    "Havuz İnşaatı",
  ],
  authors: [{ name: "NOVA Construction" }],
  openGraph: {
    title: "NOVA Construction | Premium Villa & Construction",
    description:
      "25 yılı aşkın deneyim ile premium villa inşaatı, iç mimarlık ve peyzaj tasarımı.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${josefin.variable} ${sourceSans.variable} font-body antialiased bg-dark text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
