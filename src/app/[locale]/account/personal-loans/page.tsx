"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { IoAddSharp } from "react-icons/io5";

import { LoanCard } from "@/components/account/personal-loan/loan-card";
import Pagination from "@/components/pagination.component";
import { Button } from "@/components/shared/button.component";
import FilterComponent from "@/components/shared/filter-component";
import MainTitleComponent from "@/components/shared/main-title.component";
import SearchComponent from "@/components/shared/search-component";
import { useMyLoansQuery } from "@/services/loan.service";
import { useTranslation } from "@/translations/clients";
import { ScreenLoader } from "@/components/shared/screen-loader";

const PersonalLoanComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const formdata = useForm();
  const { data, isLoading } = useMyLoansQuery();

  const filters = [
    {
      title: t("status"),
      type: "select",
      options: [
        {
          label: "Pending",
          value: "pending",
        },
        {
          label: "Approved",
          value: "approved",
        },
        {
          label: "Rejected",
          value: "rejected",
        },
      ],
    },
    {
      title: t("type"),
      type: "select",
      options: [
        {
          label: "Business",
          value: "business",
        },
        {
          label: "Personal",
          value: "personal",
        },
        {
          label: "Education",
          value: "education",
        },
        {
          label: "Medical",
          value: "medical",
        },
      ],
    },
  ];

  if (isLoading || !data) {
    return <ScreenLoader />;
  }

  return (
    <div className="container mb-8 mt-5 mx-auto flex flex-col gap-y-5 justify-around ">
      <MainTitleComponent
        title={t("personalLoans")}
        action={
          <Button
            className={clsx(
              "ml-3 h-10 !w-auto flex-none gap-2 rounded-[4px] bg-black text-white !text-sm"
            )}
            text={t("addLoan")}
            onClick={() => {
              router?.push("/account/personal-loans/add");
            }}
            startIcon={<IoAddSharp color={"white"} className="text-md" />}
          />
        }
      />

      <div className="flex items-center gap-2 f">
        <div className="w-full">
          <SearchComponent />
        </div>
      </div>
      <FormProvider {...formdata}>
        <div className="flex flex-row gap-4 items-center flex-wrap">
          {filters?.map((ele) => (
            <FilterComponent
              title={ele?.title}
              type={ele?.type}
              options={ele?.options}
              key={ele?.title}
            />
          ))}
        </div>
      </FormProvider>

      <div className="flex gap-4 flex-wrap">
        {data?.result?.map((ele) => (
          <LoanCard
            loan={ele}
            key={ele?.id}
            onClick={() => {
              router.push(`/account/personal-loans/${ele?.id}`);
            }}
          />
        ))}
      </div>

      <div>
        <Pagination
          pageCount={Math.ceil(data?.result?.length / 5)}
          initialPage={page}
          className=""
          onPageChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default PersonalLoanComponent;
