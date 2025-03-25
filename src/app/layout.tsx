import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import generateMetadata from "@/lib/metadata";
import { Reddit_Mono } from "next/font/google";
import "./globals.css";

const interFont = Reddit_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${interFont.className} antialiased`}>
        <div className="mx-auto max-w-xl px-6 md:px-0 pt-12 pb-20">
          <Header />
          <main>
            {children}
            <Contact />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
