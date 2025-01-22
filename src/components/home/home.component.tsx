import React from "react";
import CardDetail from "../shared/card-detail";
import { MdOutlineMyLocation, MdOutlineStrikethroughS } from "react-icons/md";
import { FaFileSignature, FaSearch } from "react-icons/fa";
import { LiaShareAltSolid } from "react-icons/lia";
import { Button } from "../shared/button.component";
import { TextInput } from "../shared/form/text-input.component";
import { TfiMenuAlt } from "react-icons/tfi";
import { useTranslation } from "@/translations/clients";
import Link from "next/link";

const HomeComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[url('/embedded-finance.jpg')] container sm:h-[80vh] h-auto pb-3 max-w-full bg-center bg-no-repeat bg-cover relative flex justify-center flex-col items-center gap-4 pt-14">
      <div className="absolute inset-0 bg-layout"></div>
      <div className="flex flex-col justify-center items-center h-auto  gap-5 text-center z-0">
        <h1 className="sm:text-[3rem] text-xl font-black">
          {t("header_bokra")}
        </h1>
        <p className=" text-lg font-black">{t("sub_title")}</p>
      </div>
      <div className="flex gap-4 z-0 items-center flex-wrap justify-center">
        <div className="flex flex-wrap my-4 justify-center">
          <TextInput
            leftIcon={
              <div className="p-3">
                <TfiMenuAlt color="black" />
              </div>
            }
            className="rounded-none !p-3"
            inputProps={{ placeholder: t("what") }}
          />
          <TextInput
            leftIcon={
              <div className="p-3">
                <MdOutlineMyLocation color="black" />
              </div>
            }
            className="rounded-none  !p-3"
            inputProps={{ placeholder: t("location") }}
          />
        </div>
        <div className="w-auto flex " dir="rtl">
          <Button
            text={t("search")}
            className="!w-auto bg-beige ltr !text-xs !px-4 !py-3 !text-black"
            startIcon={<FaSearch className="me-4" />}
          />
        </div>
      </div>

      <div className="md:flex gap-x-4 z-0 md:absolute  bottom-[-10%] w-[50%] justify-center items-center hidden">
        <CardDetail className=" text-black items-center shadow-lg  sm:min-w-[20%] min-w-fit">
          <LiaShareAltSolid color="black" size={"40"} />
          <h3 className="capitalize font-bold text-sm">{t("partnership")}</h3>
          <Link
            className="text-xs text-gray-500 underline"
            href="/account/personal-loans/add"
          >
            {t("apply_now")}
          </Link>
        </CardDetail>
        <CardDetail className=" text-black items-center shadow-lg  sm:min-w-[20%] min-w-fit">
          <MdOutlineStrikethroughS color="black" size={"40"} />
          <h3 className="capitalize font-bold text-sm">{t("speculation")}</h3>
          <Link
            className="text-xs text-gray-500 underline"
            href="/account/personal-loans/add"
          >
            {t("apply_now")}
          </Link>
        </CardDetail>
        <CardDetail className=" text-black items-center shadow-lg  sm:min-w-[20%] min-w-fit">
          <FaFileSignature color="black" size={"40"} />
          <h3 className="capitalize font-bold text-sm">{t("rent")}</h3>
          <Link
            className="text-xs text-gray-500 underline"
            href="/account/personal-loans/add"
          >
            {t("apply_now")}
          </Link>
        </CardDetail>
      </div>
    </div>
  );
};

export default HomeComponent;
