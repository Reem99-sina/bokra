import "react-toastify/dist/ReactToastify.css";
import "@/style/globals.css";
import React from "react";
import { Providers } from "../providers";
import { Metadata } from "next";

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
        <div className="flex h-screen  w-screen   flex-col  overflow-x-hidden ">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
