import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import generateMetadata from "@/lib/metadata";
import { Inter_Tight, Source_Serif_4 } from "next/font/google";
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter_tight = Inter_Tight({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  preload: true,
});

const source = Source_Serif_4({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source",
  preload: true,
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter_tight.variable} ${source.variable} antialiased`}
      >
        <div className="mx-auto max-w-3xl px-6 md:px-0 pt-10 pb-20 min-h-screen">
          <main>{children}</main>
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
