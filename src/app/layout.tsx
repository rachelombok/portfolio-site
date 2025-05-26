import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ImageKitProvider } from "@imagekit/next";
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next"


import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TransitionPageWrapper from "@/components/TransitionPageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachel Ombok's Photography Portfolio",
  description: "built by rachel",
  keywords: [],
  authors: [{name: 'Rachel Ombok'}],
  creator: 'Rachel Ombok'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/siu1aok.css"></link>
      <link rel='icon' href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🩰</text></svg>'/>
      <link rel='apple-touch-icon' href='/apple-icon/data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🩰</text></svg>'/>
    
      </head>
      <GoogleTagManager gtmId={`${process.env.GTAG_CODE}`}/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}>

        
        <Navigation/>
        <TransitionPageWrapper>
        {children}
        </TransitionPageWrapper>
       
        <ScrollToTop/>
        <Footer/>
        </ImageKitProvider>
      </body>
    </html>
  );
}
