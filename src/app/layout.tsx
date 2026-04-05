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
  title: "VİDEO VAULT | Teknoloji & İçerik Arşivi",
  description: "Tüm teknoloji videolarını tek bir yerde keşfedin.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased noise-bg`}>
        {/* Scanline overlay */}
        <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden opacity-[0.015]">
          <div className="w-full h-px bg-accent animate-scanline" />
        </div>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
