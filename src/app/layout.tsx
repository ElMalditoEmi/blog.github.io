import type { Metadata } from "next";
import Image from "next/image";
import '@fontsource/dm-mono';
import "./globals.css";

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
        <footer>
          <a href="https://github.com/ElMalditoEmi" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/github_logo/github-mark.svg" alt="GitHub Logo" width={30} height={30} />
          </a>
        </footer>
      </body>
    </html>
  );
}
