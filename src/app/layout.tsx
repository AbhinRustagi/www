import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhin Rustagi - Full-Stack Developer",
    template: "%s - Abhin Rustagi",
  },
  description:
    "Full-stack developer building systems that blend product thinking and scalability. Working with startups across a wide range of domains.",
  metadataBase: new URL("https://abhin.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Abhin Rustagi",
    url: "https://abhin.dev",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AbhinRustagi",
  },
  keywords: [
    "Abhin Rustagi",
    "full-stack developer",
    "software engineer",
    "web developer",
    "freelance developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
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
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className={interTight.variable}>
        <Header />
        <main className="mx-auto max-w-3xl md:px-0 px-4">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
