import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ImageKitProvider } from "@imagekit/next";
import { GoogleTagManager } from '@next/third-parties/google';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TransitionPageWrapper from "@/components/TransitionPageWrapper";
import VercelAnalyticsWrapper from "@/components/VercelAnalyticsWrapper";

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
  authors: [{ name: 'Rachel Ombok' }],
  creator: 'Rachel Ombok'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <VercelAnalyticsWrapper />
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/siu1aok.css"></link>

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

      </head>
      <GoogleTagManager gtmId={`${process.env.GTAG_CODE}`} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto max-w-[130rem]`}
      >
        <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}>


          <Navigation />
          <TransitionPageWrapper>
            {children}
          </TransitionPageWrapper>

          <ScrollToTop />
          <Footer />
        </ImageKitProvider>
      </body>
    </html>
  );
}
