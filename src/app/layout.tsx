import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
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

// Static string — no user input, safe to inline.
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}else if(matchMedia("(prefers-color-scheme:light)").matches){document.documentElement.setAttribute("data-theme","light")}}catch(e){}})()`;

function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="sitemap" href="/sitemap.xml" />
        <ThemeScript />
      </head>
      <body className={interTight.variable}>
        <ThemeProvider>
          <Header />
          <main className="mx-auto max-w-3xl md:px-0 px-4">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
