// import clsx from "clsx";
import { Providers } from "@/providers";
// import { arFont, enFont } from "@/config/font.config";

export const revalidate = 0;

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({ children, params }: Props) {
  const waitParams = await params;
  return (
    <div
      lang={waitParams?.locale}
      dir={waitParams?.locale === "ar" ? "rtl" : "ltr"}
    >
      <Providers>{children}</Providers>
    </div>
  );
}
