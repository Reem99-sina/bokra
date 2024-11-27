import "react-datepicker/dist/react-datepicker.css";
import "@/style/globals.css";

import type { Metadata } from "next";
// import clsx from "clsx";
import { Providers } from "@/providers";
import { config } from "@/config";
// import { arFont, enFont } from "@/config/font.config";

export const metadata: Metadata = {
  title: "bokra",
  description: "bokra",
};

export const revalidate = 0;

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang={config.DEFAULT_LOCALE} dir={config.DEFAULT_LOCALE === "ar" ? "rtl" : "ltr"}>
      
      <body
      // className={clsx(locale === "ar" ? arFont.className : enFont.className)}
      >
       {children}
      </body>
    </html>
  );
}
