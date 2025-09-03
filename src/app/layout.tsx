import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import generateMetadata from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Lora } from "next/font/google";
import localFont from "next/font/local";
import "react-tooltip/dist/react-tooltip.css";
import "@/lib/styles/globals.css";
import Navbar from "@/components/Navbar";

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
  variable: "--inter-display",
  preload: true,
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--lora",
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
      <body className={`${interDisplay.className} antialiased`}>
        <div className="mx-auto max-w-5xl px-10 md:px-16 lg:px-48 lg:py-28 md:py-12 py-16 pb-20 min-h-screen">
          <main>
            <Navbar />
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
