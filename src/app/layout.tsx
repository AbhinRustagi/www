import Header from "@/components/Header";
import generateMetadata from "@/lib/metadata";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import "react-tooltip/dist/react-tooltip.css";

const gabarito = Gabarito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-gabarito",
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
      <body className={`${gabarito.className} antialiased`}>
        <div className="mx-auto max-w-4xl border-r border-l px-6 md:px-0 pt-12 pb-20 border-container-border min-h-screen">
          <div className="max-w-120 mx-auto">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
