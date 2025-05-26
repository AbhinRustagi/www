import Footer from "@/components/Footer";
import Header from "@/components/Header";
import generateMetadata from "@/lib/metadata";
import { Bricolage_Grotesque, Crimson_Pro } from "next/font/google";
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bricolage",
  preload: true,
});

const crimson = Crimson_Pro({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-crimson",
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
      <body className={`${bricolage.variable} ${crimson.variable} antialiased`}>
        <div className="mx-auto max-w-3xl border-r border-l px-6 md:px-0 pt-12 pb-20 border-container-border min-h-screen">
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
