import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/style/globals.css";
import React from "react";
import { Providers } from "../providers";
import { Metadata } from "next";

import { Lato, Cairo } from "next/font/google";
import clsx from "clsx";

import HolyLoader from "holy-loader";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer-component";

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

const cairoFont = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "bokra",
};

export const revalidate = 0;

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
      </head>

      <body
        className={clsx(
          locale === "ar" ? cairoFont.className : latoFont.className
        )}
      >
        <HolyLoader
          color={"white"}
          speed={250}
          easing="linear"
          showSpinner={false}
        />

        <div className="flex h-screen  w-screen   flex-col  overflow-x-hidden scroll-smooth  relative z-10 bg-white">
          <Providers locale={locale}>
            <Header />

            <div className="flex flex-col flex-1 mb-8">{children}</div>

            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
