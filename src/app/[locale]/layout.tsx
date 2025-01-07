import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/style/globals.css";
import React from "react";
import { Providers } from "../providers";
import { Metadata } from "next";

import { Lato } from "next/font/google";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string; // Added type for locale
  };
}

const latoFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "bokra",
};

export const revalidate = 0;

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
      </head>

      <body className={clsx(latoFont.className)}>
        <div className="flex h-screen  w-screen   flex-col  overflow-x-hidden scroll-smooth  relative z-10 bg-white">
          <Providers locale={locale}>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
