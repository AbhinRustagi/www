import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import generateMetadata from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Host_Grotesk, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";

const inter_tight = Inter_Tight({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  preload: true,
});

const host_grotesk = Host_Grotesk({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-host-grotesk",
  preload: true,
});

const google_sans_code = localFont({
  src: "../fonts/GoogleSansCode-VariableFont_wght.ttf",
  variable: "--font-google-sans-code",
  weight: "300 400 500",
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
        className={`${inter_tight.variable} ${host_grotesk.variable} ${google_sans_code.variable} antialiased`}
      >
        <div className="bg-image" />
        <div className="mx-auto max-w-4xl px-8 md:px-16 lg:px-24 lg:py-18 md:py-12 py-8 pb-20 min-h-screen bg-zinc-900 border-x border-zinc-800/50 relative">
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
