"use client";

import Pagination from "@/components/pagination.component";
// import UpdateStatus from '@/components/repayment/update-status';
import { Button } from "@/components/shared/button.component";
import { DrawerRef } from "@/components/shared/drawer.component";
import FilterComponent from "@/components/shared/filter-component";
import { FormDrawer } from "@/components/shared/form-drawer.component";
import SearchComponent from "@/components/shared/search-component";
import { Table } from "@/components/shared/table";
import { useTranslation } from "@/translations/clients";
import { ApprovalApplicationData, FilterLoans } from "@/utils/data.util";
import { formattedAmount } from "@/utils/formatNumber";
import clsx from "clsx";
import Link from "next/link";
import { useMemo, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaCashRegister } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";

const DataLoan = () => {
  const { t } = useTranslation();
  const drawerRef = useRef<DrawerRef>(null);
  const formdata = useForm();
  const columns: {
    title?: string;
    accessor: string;
  }[] = [
    { title: t("loanId"), accessor: "loanId" },
    { title: t("status"), accessor: "status" },
    { title: t("loanPurpose"), accessor: "loanPurpose" },
    { title: t("loanAmount"), accessor: "loanAmount" },
    { title: t("Annual_Revenue"), accessor: "annualRevenue" },
    { title: t("expenses"), accessor: "expenses" },
    { title: t("total_liabilities"), accessor: "liabilities" },
    { title: t("action"), accessor: "action" },
  ];
  const items = useMemo(() => {
    return ApprovalApplicationData?.map((ele) => ({
      loanAmount: (
        <div>
          {formattedAmount({
            amount: Number(ele?.loanAmount),
            currency: ele?.loanCurrency,
          })}
        </div>
      ),
      loanId: (
        <div className="flex items-center gap-2">
          <FaCashRegister />
          <p>{ele?.businessRegNumber}</p>
        </div>
      ),
      businessName: (
        <div className="flex items-center gap-2">
          <IoIosBusiness />
          <p>{ele?.businessName}</p>
        </div>
      ),
      industryType: ele?.industryType,
      status: (
        <div className="flex justify-center">
          <p
            className={clsx(
              "w-fit rounded-sm border-2 px-2 py-[2px] text-[12px]",
              ele?.status == "pending"
                ? "border-yellowDark text-yellowDark"
                : ele?.status == "Approve"
                ? "border-greenCustom text-greenCustom"
                : "border-red-500 text-red-500"
            )}
          >
            {ele?.status}
          </p>
        </div>
      ),
      loanPurpose: (
        <div className="flex items-center justify-center gap-x-3">
          {ele?.loanPurpose}
        </div>
      ),
      annualRevenue: (
        <div>
          {formattedAmount({
            amount: Number(ele?.annualRevenue),
            currency: ele?.loanCurrency,
          })}
        </div>
      ),
      expenses: (
        <div>
          {formattedAmount({
            amount: Number(ele?.expenses),
            currency: ele?.loanCurrency,
          })}
        </div>
      ),
      liabilities: (
        <div>
          {formattedAmount({
            amount: Number(ele?.liabilities),
            currency: ele?.loanCurrency,
          })}
        </div>
      ),
      action: (
        <div className="flex items-center gap-3">
          <Button
            text={t("renewLoan")}
            className=" bg-black !px-3 !py-2 text-xs text-white rounded-md block"
            onClick={() => {}}
          />

          <Link
            href={"/account/personal-loan/detail/1"}
            className=" bg-white px-3 py-2 text-xs text-black  block border rounded-md"
            target="_parent"
          >
            {t("viewDetails")}
          </Link>
        </div>
      ),
    }));
  }, [ApprovalApplicationData, t]);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <SearchComponent />

        {FilterLoans()?.map((ele) => (
          <FilterComponent
            title={ele?.title}
            type={ele?.type}
            options={ele?.options}
            key={ele?.title}
          />
        ))}

        <div className="">
          <Table columns={columns} items={items} />
        </div>
        <div className="mb-4 flex items-center justify-end">
          <Pagination
            onPageChange={() => {}}
            pageCount={Math.ceil(ApprovalApplicationData?.length / 5)}
            initialPage={1}
          />
        </div>
      </div>
      <FormDrawer
        ref={drawerRef}
        title={t("loanRenewal")}
        className="!rounded-lg !bg-[#03787C]"
        Footer={
          <Button
            text={t("update")}
            onClick={formdata.handleSubmit(() => {})}
            className="!bg-black !text-xs !text-white"
          />
        }
        placement="right"
      >
        <div className=" flex h-screen   w-full flex-col bg-beige p-4">
          <FormProvider {...formdata}>
            <div></div>
            {/* <UpdateStatus /> */}
            </FormProvider>
        </div>
      </FormDrawer>
    </div>
  );
};

export default DataLoan;
