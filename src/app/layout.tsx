import Announcement from "@/components/Announcement";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import generateMetadata from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "600", "500"],
});

const cascadia_code = localFont({
  src: [
    {
      path: "_fonts/CascadiaCode-Light.otf",
      weight: "normal",
    },
    {
      path: "_fonts/CascadiaCode-Bold.otf",
      weight: "bold",
    },
  ],
  variable: "--font-cascadia-code",
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} ${cascadia_code.variable} antialiased`}
      >
        <Announcement />
        <Container>
          {children}
          <Footer />
        </Container>
      </body>
      {process.env?.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
    </html>
  );
}
