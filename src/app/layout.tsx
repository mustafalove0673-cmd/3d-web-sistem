import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NOVA AI | Web Site Üretim Sistemi",
  description: "Tek komutla Awwwards-seviye web sitesi üret. 19 paket, 777+ repo referansı, 14 sektör template'i.",
  keywords: ["NOVA AI", "website generator", "3D website", "Awwwards", "AI web"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
