"use client";
import AddLoan from "@/components/account/personal-loan/add-loan";
import PersonalLoan from "@/components/account/personal-loan/personalLoan";
import { MobileMenuDrawer } from "@/components/layout/header/mobile-menu";
import Pagination from "@/components/pagination.component";
import { Button } from "@/components/shared/button.component";
import { DrawerRef } from "@/components/shared/drawer.component";
import MainTitleComponent from "@/components/shared/main-title.component";
import { useTranslation } from "@/translations/clients";
import { dataLoans } from "@/utils/data.util";
import clsx from "clsx";
import React, { useMemo, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

const PersonalLoanComponent = () => {
  const { t } = useTranslation();
  const refDrawer = useRef<DrawerRef>(null);
  const [page, setPage] = useState(1);
  const [edit, setEdit] = useState(false);

  const dataPagination = useMemo(() => {
    return dataLoans.slice((page - 1) * 5, page * 5);
  }, [page]);
  
  return (
    <div className="container my-5 flex flex-col gap-y-5 justify-around">
      <MainTitleComponent title={t("personalLoans")} />

      <div className="flex gap-4 flex-wrap">
        {dataPagination?.map((ele) => (
          <PersonalLoan loan={ele} key={ele?.type} onClick={()=>{setEdit(true);refDrawer?.current?.open()}}/>
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
      <div className="">
        <div className="flex max-w-[1300px] justify-end p-4 gap-x-4">
          <Button
            className={clsx(
              "ml-3 h-10 !w-[117px] flex-none gap-2 rounded-[4px] bg-black text-white "
            )}
            type="submit"
            text={t("add")}
            onClick={() => {setEdit(false);refDrawer?.current?.open()}}
          />
        </div>
      </div>
      <MobileMenuDrawer
        modalRef={refDrawer}
        width={320}
        placement="right"
        ref={refDrawer}
        Footer={
          <div className="flex items-center gap-x-3 p-3">
            <Button text={edit?t("edit"):t("addLoan")} className="!bg-black " />
            <Button
              text={t("cancel")}
              className="!bg-white !text-gray-500"
              onClick={() => refDrawer?.current?.close()}
            />
          </div>
        }
        TopLeftComponent={
          <div className="flex items-center justify-between w-full">
            <IoClose />
            <h3 className="font-black">{edit?t("edit"):t("addLoan")}</h3>
          </div>
        }
      >
        <AddLoan />
      </MobileMenuDrawer>
    </div>
  );
};

export default PersonalLoanComponent;
