"use client";

import { ScreenLoader } from "@/components/shared/screen-loader";
import { useAuth } from "@/hooks/auth.hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "@/translations/clients";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { lang } = useTranslation();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return <ScreenLoader />;
  }

  return (
    <>
      <div className="flex  justify-center items-center flex-1 sm:bg-beige  py-10 bg-[url('/auth-bg.jpg')] bg-cover bg-left">
        <div className="sm:border flex flex-col  sm:border-[#DCDFE4] justify-center rounded-lg sm:!bg-white ">
          <div className="sm:flex items-center justify-center  w-full  bg-black rounded-t-lg hidden">
            <Image
              src={
                lang == "ar" ? "/bokra-gray-arabic.png" : "/bokra-gray-eng.png"
              }
              width={100}
              height={90}
              alt="logo"
              className="py-4"
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
