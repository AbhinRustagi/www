import generateMetadata from "@/lib/metadata";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const satoshiFont = localFont({
  src: "../fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
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
      <body className={`${satoshiFont.className} antialiased`}>
        <div className="mx-auto max-w-3xl px-3 pt-12 pb-20">
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
