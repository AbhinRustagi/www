import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import generateMetadata from "@/lib/metadata";
import { Geist, Source_Serif_4 } from "next/font/google";
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";

const geist = Geist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-geist",
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
      <body className={`${geist.variable} ${source.variable} antialiased`}>
        <div className="mx-auto max-w-3xl px-6 md:px-0 pt-10 pb-20 min-h-screen">
          <Header />
          <main>{children}</main>
          <Socials />
          <Footer />
        </div>
      </body>
    </html>
  );
}
