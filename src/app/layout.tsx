import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import generateMetadata from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter_Tight } from "next/font/google";
import "react-tooltip/dist/react-tooltip.css";
import "@/styles/globals.css";
import Header from "@/components/Header";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
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
      <body className={`${interTight.className} antialiased`}>
        <div className="mx-auto max-w-xl px-4 md:px-0 lg:px-0 lg:py-14 md:py-12 py-8 pb-20 min-h-screen">
          <main>
            <Header />
            {children}
          </main>
          <Socials />
          <Footer />
        </div>
      </body>
      {process.env?.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
