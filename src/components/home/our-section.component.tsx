import { useTranslation } from "@/translations/clients";
import React from "react";
import { BorderBg3 } from "../account/custom-detail.component";
import Image from "next/image";
import { Vision, Mission } from "@/icon";

const OurSectionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center gap-4  container mx-auto">
      <BorderBg3 className="text-black  !bg-transparent flex items-center !flex-row sm:flex-nowrap flex-wrap">
        <Image src={Mission} width={200} height={50} alt="" />
        <div className="text-center flex flex-col gap-4 justify-center items-center ">
          <h3>{t("head_first_about")}</h3>
          <p >{t("desc_first_about")}</p>
        </div>
      </BorderBg3>
      <BorderBg3 className="text-black  !bg-transparent flex items-center !flex-row sm:flex-nowrap flex-wrap">
        <Image src={Vision} width={200} height={50} alt="" />
        <div className="text-center flex flex-col gap-4 justify-center items-center">
          <h3>{t("find_what")}</h3>
          <p >{t("desc_find")}</p>
        </div>
      </BorderBg3>
    </div>
  );
};

export default OurSectionComponent;
