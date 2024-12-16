"use client";

import MainTitleComponent from "@/components/shared/main-title.component";
import { MdWork } from "react-icons/md";
import { BorderBg3, DataComponents } from "../custom-detail.component";
import { useTranslation } from "@/translations/clients";
import BackNavigation from "@/components/shared/back-navigation";
import Image from "next/image";
import DisplayDataComponent from "@/components/shared/display-data.component";
import { dataLoansDetail } from "@/utils/data.util";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";

const DetailLona = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(t("companyInformation"));
  const handleOpen = (value: string) => setOpen(open === value ? "" : value);

  return (
    <div className="flex flex-col gap-y-2  text-black ">
      <div className="flex gap-x-3 flex-row-reverse">
        <MainTitleComponent title={t("Detail_Loans")} />
        <BackNavigation title="" />
      </div>
      <div className=" flex gap-6 items-start sm:flex-nowrap flex-wrap my-4">
        <div className="flex flex-col gap-4 sm:flex-[0.3] flex-1">
          <div className="flex items-start gap-4 justify-center my-4 flex-wrap">
            <div className=" rounded-md">
              <Image
                src={"/business-loan.jpg"}
                width={250}
                height={100}
                alt="business-loan"
                className="max-h-[300px]  object-contain rounded-md shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <BorderBg3>
              <DisplayDataComponent
                title={t("technologyType")}
                value={dataLoansDetail?.companyInformation?.industrySector}
              />
            </BorderBg3>
            <BorderBg3>
              <DisplayDataComponent
                title={t("problem")}
                value={dataLoansDetail?.businessPlan?.businessGrowthStrategy}
              />
            </BorderBg3>
            <BorderBg3>
              <DisplayDataComponent title={t("nameTeam")} value={""} />
              <div className="flex flex-col">
                <p className=" text-gray-500 font-light text-xs">
                  {dataLoansDetail?.managementTeam?.teamMembers[0]?.name}
                </p>
                <p className=" text-gray-500 font-light text-xs">
                  {dataLoansDetail?.managementTeam?.teamMembers[0]?.role}
                </p>
              </div>
              <DisplayDataComponent
                title={t("yearsExperience")}
                value={
                  dataLoansDetail?.managementTeam?.teamMembers[0]?.experience
                }
                icon={<MdWork />}
              />
            </BorderBg3>
          </div>
        </div>
        <div className="flex-1">
          {DataComponents()?.map((ele) => (
            <div key={ele?.title}>
              <Accordion open={ele?.title == open}>
                <AccordionHeader onClick={() => handleOpen(ele?.title)}>
                  <MainTitleComponent title={ele?.title} />
                </AccordionHeader>
                <AccordionBody>{ele?.component}</AccordionBody>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailLona;
