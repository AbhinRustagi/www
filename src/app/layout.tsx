import Announcement from "@/components/Announcement";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import generateMetadata from "@/lib/metadata";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "600", "500"],
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
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
