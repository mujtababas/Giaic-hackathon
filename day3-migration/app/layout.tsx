import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FNAV from "./components/firstnav/page";
import SNAV from "./components/snav/page";
import Footer from "./components/footer/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nike with Subhan",
  description: "Generated by Subhan Kaladi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FNAV/>
        <SNAV/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
