import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import generateMetadata from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "react-tooltip/dist/react-tooltip.css";
import "@/styles/globals.css";
import Header from "@/components/Header";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  preload: true,
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${interTight.className} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto max-w-2xl px-6 md:px-0 lg:px-0 lg:py-14 md:py-12 py-8 pb-20 min-h-screen">
          <main>
            <Header />
            {children}
          </main>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Socials />
          </div>
          <Footer />
        </div>
      </body>
      {process.env?.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
