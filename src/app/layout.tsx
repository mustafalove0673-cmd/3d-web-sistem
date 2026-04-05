import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/hooks/use-lenis";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "YAPI PRO | Profesyonel İnşaat & Mimarlık Çözümleri",
  description: "25 yılı aşkın deneyimle, hayalinizdeki yapıyı gerçeğe dönüştürüyoruz. Konut, ticari ve endüstriyel inşaat projeleri.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased noise-bg`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
