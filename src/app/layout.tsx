import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import generateMetadata from "@/lib/metadata";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-geist",
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
      <body className={`${geist.className} antialiased`}>
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
