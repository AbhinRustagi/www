import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhin Rustagi - Full-Stack Developer",
    template: "%s - Abhin Rustagi",
  },
  description: "Full-stack developer crafting web experiences",
  metadataBase: new URL("https://abhin.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Abhin Rustagi",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="sitemap" href="/sitemap-index.xml" />
      </head>
      <body className={`${fraunces.variable} ${interTight.variable}`}>
        <Header />
        <main className="mx-auto max-w-4xl md:px-0 px-4">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
