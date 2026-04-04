import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Melek Yüksel Hair Beauty | Saç ve Güzellik Merkezi",
  description:
    "Melek Yüksel Hair Beauty - Pursaklar, Ankara'da profesyonel saç kesimi, ombre, renk, cilt bakımı ve güzellik hizmetleri. Randevu için hemen arayın!",
  keywords: [
    "Melek Yüksel",
    "Hair Beauty",
    "Saç Kesimi",
    "Ombre",
    "Cilt Bakımı",
    "Güzellik Merkezi",
    "Pursaklar",
    "Ankara",
  ],
  authors: [{ name: "Melek Yüksel Hair Beauty" }],
  openGraph: {
    title: "Melek Yüksel Hair Beauty | Saç ve Güzellik Merkezi",
    description:
      "Pursaklar, Ankara'da profesyonel saç ve güzellik hizmetleri. Güzelliğinize değer katıyoruz.",
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
        className={`${playfair.variable} ${inter.variable} font-inter antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
