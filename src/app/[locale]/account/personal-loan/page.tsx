"use client";
import PersonalLoan from "@/components/account/personal-loan/personalLoan";
import Pagination from "@/components/pagination.component";
import { Button } from "@/components/shared/button.component";
import { TextInput } from "@/components/shared/form/text-input.component";
import MainTitleComponent from "@/components/shared/main-title.component";
import { useTranslation } from "@/translations/clients";
import { dataLoans } from "@/utils/data.util";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";

const PersonalLoanComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [page, setPage] = useState(1);

  const dataPagination = useMemo(() => {
    return dataLoans.slice((page - 1) * 5, page * 5);
  }, [page]);

  return (
    <div className="container my-8 flex flex-col gap-y-5 justify-around ">
      <MainTitleComponent title={t("personalLoans")} />
      <div className="flex items-center">
        <div className="w-full">
          <TextInput
            inputProps={{ placeholder: t("search") }}
            className="!text-black !font-light"
          />
        </div>
        <div className="flex max-w-auto justify-end ">
          <Button
            className={clsx(
              "ml-3 h-10 !w-auto flex-none gap-2 rounded-[4px] !bg-beige !text-black !text-sm"
            )}
            type="submit"
            text={t("search")}
            onClick={() => {
              router?.push("/account/personal-loan/add");
            }}
          />
          <Button
            className={clsx(
              "ml-3 h-10 !w-auto flex-none gap-2 rounded-[4px] bg-black text-white !text-sm"
            )}
            type="submit"
            text={t("add")}
            onClick={() => {
              router?.push("/account/personal-loan/add");
            }}
          />
        </div>
      </div>
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
