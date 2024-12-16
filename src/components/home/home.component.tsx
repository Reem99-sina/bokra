import React from "react";
import CardDetail from "../shared/card-detail";
import { MdAgriculture, MdOutlineMyLocation, MdOutlineStrikethroughS } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaFileSignature, FaSearch } from "react-icons/fa";
import { LiaShareAltSolid } from "react-icons/lia";
import { Button } from "../shared/button.component";
import { TextInput } from "../shared/form/text-input.component";
import { TfiMenuAlt } from "react-icons/tfi";
import { useTranslation } from "@/translations/clients";

const HomeComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[url('/embedded-finance.jpg')] container sm:h-[500px] h-screen max-w-full bg-center bg-no-repeat bg-cover relative flex justify-center flex-col items-center gap-4">
      <div className="absolute inset-0 bg-layout"></div>
      <div className="flex flex-col justify-center items-center h-auto w-[50%] gap-5 text-center z-0">
        <h3 className="text-2xl font-bold">{t("header_bokra")}</h3>
        <p className="">{t("sub_title")}</p>
      </div>
      <div className="flex gap-4 z-0 items-center">
        <div className="flex flex-wrap my-4">
          <TextInput
            leftIcon={<TfiMenuAlt color="black" />}
            className="rounded-none !p-3"
            inputProps={{ placeholder: "What?" }}
          />
          <TextInput
            leftIcon={<MdOutlineMyLocation color="black" />}
            className="rounded-none  !p-3"
            inputProps={{ placeholder: "location?" }}
          />
        </div>
        <div className="" dir="rtl">
          <Button
            text={t("search")}
            className="!w-auto bg-beige ltr !text-xs !px-4 !py-3 !text-black"
            startIcon={<FaSearch className="me-4" />}
          />
        </div>
      </div>
      <div className="sm:flex gap-x-4 z-0 sm:absolute  bottom-[-10%] w-[50%] justify-center items-center hidden">
        <CardDetail className="text-md text-black items-center shadow-lg  sm:min-w-[20%] min-w-fit">
          <LiaShareAltSolid color="black" size={"40"} />
          <h3 className="capitalize font-bold">partnership</h3>
          <p className="text-xs">102</p>
        </CardDetail>
        <CardDetail className="text-md text-black items-center shadow-lg  sm:min-w-[20%] min-w-fit">
          <MdOutlineStrikethroughS color="black" size={"40"} />
          <h3 className="capitalize font-bold">strike</h3>
          <p className="text-xs">102</p>
        </CardDetail>
        <CardDetail className="text-md text-black items-center shadow-lg  sm:min-w-[20%] min-w-fit">
          <FaFileSignature color="black" size={"40"} />
          <h3 className="capitalize font-bold">rent</h3>
          <p className="text-xs">102</p>
        </CardDetail>
        <CardDetail className="text-md text-black items-center shadow-lg  sm:min-w-[20%] min-w-fit">
          <LuChartNoAxesCombined color="black" size={"40"} />
          <h3 className="capitalize font-bold">profitable</h3>
          <p className="text-xs">102</p>
        </CardDetail>
        <CardDetail className="text-md text-black items-center shadow-lg  sm:min-w-[20%] min-w-fit">
          <MdAgriculture color="black" size={"40"} />
          <h3 className="capitalize font-bold">ladder</h3>
          <p className="text-xs">102</p>
        </CardDetail>
      </div>
    </div>
  );
};

export default HomeComponent;
