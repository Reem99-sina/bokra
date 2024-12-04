import "react-toastify/dist/ReactToastify.css";
import "@/style/globals.css";
import React from "react";
import { Providers } from "../providers";
import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer-component";

interface Props {
  children: React.ReactNode;
  params: {
    locale: string; // Added type for locale
  };
}

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

      <body
      // className={clsx(locale === 'ar' ? arFont.className : enFont.className)}
      >
        {/* <HolyLoader
          color={colors.primary}
          speed={250}
          easing='linear'
          showSpinner={false}
        /> */}

        <div className="flex h-screen  w-screen   flex-col  overflow-x-hidden ">
          <Providers>
            <Header />

            <div className="flex w-full flex-1 flex-col   justify-center bg-beige">
              {children}
            </div>

            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
