"use client";

import React from "react";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import "../i18n/config";
import { Providers } from "@/components/providers/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>patrykmrzyglod.dev</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="patrykmrzyglod.dev" key="title" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
