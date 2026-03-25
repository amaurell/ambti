import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Logo | Robust IT Solutions",
  description: "High-performance IT infrastructure and technical support for businesses. Efficient, reliable, and sharp.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://app.amaurell.com.br",
    siteName: "Logo",
    title: "Logo | Robust IT Solutions",
    description: "High-performance IT infrastructure and technical support for businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-brand-graphite text-white overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
