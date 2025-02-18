"use client";

import React from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Poppins } from "next/font/google";
import "../i18n/config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const dynamic = "force-dynamic";

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
      </head>
      <body className={poppins.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <AppLoadingOverlay /> */}
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
