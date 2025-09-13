import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import generateMetadata from "@/lib/metadata";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Fira_Mono, Geist } from "next/font/google";
import "react-tooltip/dist/react-tooltip.css";

const inter = Geist({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  variable: "--font-fira-mono",
  preload: true,
  weight: ["400", "500", "700"],
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${firaMono.variable} antialiased`}>
        <div className="mx-auto max-w-2xl px-6 md:px-0 lg:px-0 lg:py-14 md:py-12 py-8 pb-20 min-h-screen">
          <main>
            <Header />
            {children}
          </main>
          <Socials />
          <Footer />
        </div>
        <Analytics />
        {process.env?.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
