import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "moDee",
  description: "Note your daily mood or whatever you wanna track!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1
        className={"text-base sm:text-xl textGradient " + geistSans.className}
      >
        moDee
      </h1>
    </header>
  );

  const footer = <footer className="p-4 sm:p-8">Footer here</footer>;

  return (
    <html lang="en">
      <body
        className={`"w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col "${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
