import type { Metadata } from "next";
import '@fontsource/dm-mono';
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "ElMalditoEmi",
  description: "Just a blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.svg" sizes="any" type="image/svg+xml"></link>
      <body
        className={`font-dm-mono antialiased`}
      >
        {children}
      <Footer />
      </body>
    </html>
  );
}
