import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import generateMetadata from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";

const interDisplay = localFont({
  src: [
    {
      path: "../fonts/InterDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InterDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/InterDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/InterDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter-display",
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
      <body className={`${interDisplay.className} antialiased`}>
        <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-40 lg:py-36 md:py-12 py-8 pb-20 min-h-screen border-x border-zinc-800/50 relative bg-[#191919]">
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
