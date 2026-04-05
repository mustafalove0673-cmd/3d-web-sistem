import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/hooks/use-lenis";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ÖZKAN YAPI | Sinematik İnşaat Deneyimi",
  description: "Dramatik mimari, sarsıcı yapılar. 20+ yıl deneyim.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        <SmoothScroll>
          <div className="noise" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
