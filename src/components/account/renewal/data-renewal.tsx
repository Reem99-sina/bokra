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
import Link from "next/link";
import { useMemo, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FaCashRegister } from "react-icons/fa";
import ConfirmRenewalLoan from "./confirm-renewal-loan";

const DataLoan = () => {
  const { t } = useTranslation();
  const drawerRef = useRef<DrawerRef>(null);
  const formdata = useForm();
  const columns: {
    title?: string;
    accessor: string;
  }[] = [
    { title: t("loanId"), accessor: "loanId" },
    { title: t("start_date"), accessor: "start_date" },
    { title: t("end_date"), accessor: "end_date" },
    { title: t("payment_term"), accessor: "payment_term" },
    { title: t("monthly_payment"), accessor: "monthly_payment" },
    { title: t("total_payment"), accessor: "total_payment" },
    { title: t("on_time_payment"), accessor: "on_time_payments" },
    { title: t("late_payments"), accessor: "late_payments" },
    { title: t("missed_payments"), accessor: "missed_payments" },
    { title: t("loanAmount"), accessor: "loanAmount" },
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
      start_date: (
        <div className="flex items-center gap-2">
          <p>Jan 1, 2023</p>
        </div>
      ),
      payment_term: "12 months",

      end_date: (
        <div className="flex items-center justify-center gap-x-3">
          <p>Dec 31, 2023</p>
        </div>
      ),
      monthly_payment: (
        <div>
          {formattedAmount({
            amount: Number(ele?.expenses),
            currency: ele?.loanCurrency,
          })}
        </div>
      ),
      total_payment: (
        <div>
          {formattedAmount({
            amount: Number(ele?.annualRevenue),
            currency: ele?.loanCurrency,
          })}
        </div>
      ),
      on_time_payments: <div className="text-greenCustom">11</div>,
      late_payments: <div className="text-yellowDark">1</div>,
      missed_payments: <div className="text-red-600">0</div>,
      action: (
        <div className="flex items-center gap-3">
          <Button
            text={t("renewLoan")}
            className=" bg-black !px-3 !py-2 text-xs text-white rounded-md block"
            onClick={() => drawerRef.current?.open()}
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
        title={t("confirm_loan_renew")}
        className="!rounded-lg !bg-[#03787C]"
        Footer={
          <div className="flex items-center justify-center gap-4">
            <Button
              text={t("submit_renewal_request")}
              onClick={formdata.handleSubmit(() => {})}
              className="!bg-black !text-xs !text-white !py-2 !px-3 !whitespace-nowrap"
            />
            <Button
              text={t("cancel")}
              onClick={() => drawerRef?.current?.close()}
              className="!bg-white !text-xs !text-black !border !py-2 !px-3 !whitespace-nowrap"
            />
          </div>
        }
        placement="right"
      >
        <div className=" flex h-screen   w-full flex-col bg-beige p-4">
          <FormProvider {...formdata}>
            <ConfirmRenewalLoan />
          </FormProvider>
        </div>
      </FormDrawer>
    </div>
  );
};

export default DataLoan;
