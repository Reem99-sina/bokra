"use client";
import PersonalLoan from "@/components/account/personal-loan/personalLoan";
import Pagination from "@/components/pagination.component";
import { Button } from "@/components/shared/button.component";
import FilterComponent from "@/components/shared/filter-component";
import { Line } from "@/components/shared/line.component";
import MainTitleComponent from "@/components/shared/main-title.component";
import SearchComponent from "@/components/shared/search-component";
import { useTranslation } from "@/translations/clients";
import { dataLoans, FilterLoans } from "@/utils/data.util";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoAddSharp } from "react-icons/io5";

const PersonalLoanComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const formdata = useForm();
  const dataPagination = useMemo(() => {
    return dataLoans.slice((page - 1) * 5, page * 5);
  }, [page]);

  return (
    <div className="container mb-8 mt-5 mx-auto flex flex-col gap-y-5 justify-around ">
      <MainTitleComponent title={t("personalLoans")} />
      <div className="flex items-center gap-2">
        <div className="w-full">
          <SearchComponent />
        </div>
        <div className="flex max-w-auto justify-end ">
          <Button
            className={clsx(
              "!ml-0 h-10 !w-auto flex-none gap-2 rounded-[4px] bg-black text-white !text-xs !px-4 !py-3 !font-black"
            )}
            type="submit"
            text={t("search")}
            onClick={() => {
              router?.push("/account/personal-loan/add");
            }}
          />
        </div>
      </div>
      <Line />
      <FormProvider {...formdata}>
        {FilterLoans()?.map((ele) => (
          <FilterComponent
            title={ele?.title}
            type={ele?.type}
            options={ele?.options}
            key={ele?.title}
          />
        ))}
      </FormProvider>
      <div className="flex gap-4 flex-wrap">
        {dataPagination?.map((ele, index) => (
          <PersonalLoan
            loan={ele}
            key={ele?.type}
            onClick={() => {
              router.push(`/account/personal-loan/detail/${index + 1}`);
            }}
          />
        ))}
      </div>
      <div className="flex max-w-auto justify-end ">
          <Button
            className={clsx(
              "ml-3 h-10 !w-auto flex-none gap-2 rounded-[4px] bg-black text-white !text-sm"
            )}
            type="submit"
            text={""}
            onClick={() => {
              router?.push("/account/personal-loan/add");
            }}
            startIcon={<IoAddSharp color={"white"} className="text-md"/>}
          />
        </div>
      <div>
        <Pagination
          pageCount={Math.ceil(dataLoans?.length / 5)}
          initialPage={page}
          className=""
          onPageChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default PersonalLoanComponent;
