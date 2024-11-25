
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "@/style/globals.css";

import type { Metadata } from "next";
// import clsx from "clsx";
import { Providers } from "@/providers";
// import { arFont, enFont } from "@/config/font.config";

export const metadata: Metadata = {
  title: "bokra",
  description: "bokra",
};

export const revalidate = 0;

interface Props {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function RootLayout({ children, params}: Props) {
  const {locale}=await params
  return (
    <html
      lang={locale ? locale : "ar"}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css"
          rel="stylesheet"
        ></link>
      </head>
      <body
      // className={clsx(locale === "ar" ? arFont.className : enFont.className)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
