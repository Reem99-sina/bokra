"use client";
import Pagination from "@/components/pagination.component";
import { Table } from "@/components/shared/table";
import { useTranslation } from "@/translations/clients";
import { FilterHistoryLoans, financialTransactions } from "@/utils/data.util";
import { MdPayments } from "react-icons/md";
import { useMemo } from "react";
import { formattedAmount } from "@/utils/money.util";
import { formatPhoneNumber } from "@/utils/formatNumber";
import SearchComponent from "@/components/shared/search-component";
import clsx from "clsx";
import { FormProvider, useForm } from "react-hook-form";
import { Line } from "../shared/line.component";
import FilterComponent from "../shared/filter-component";
import { Button } from "../shared/button.component";

const FinancialTransaction = () => {
  const { t } = useTranslation();
  const formdata=useForm()
  const columns: {
    title?: string;
    accessor: string;
  }[] = [
    { title: t("transactionID"), accessor: "transactionID" },
    { title: t("transactionAmount"), accessor: "transactionAmount" },
    { title: t("transactionDate"), accessor: "transactionDate" },
    { title: t("transactionType"), accessor: "transactionType" },
    { title: t("status"), accessor: "status" },
    { title: t("paymentMethod"), accessor: "paymentMethod" },
    { title: t("Name"), accessor: "name" },
    { title: t("address"), accessor: "address" },
    { title: t("phoneNum"), accessor: "phone" },
    { title: t("email"), accessor: "email" },
  ];
  const items = useMemo(() => {
    return financialTransactions?.map((ele) => ({
      transactionID: ele?.transactionID,
      transactionAmount: (
        <div>{formattedAmount({ amount: Number(ele?.transactionAmount) })}</div>
      ),
      transactionDate: ele?.transactionDate,
      transactionType: ele?.transactionType,
      paymentMethod: (
        <div className="flex gap-x-3 items-center justify-center">
          <MdPayments />
        </div>
      ),
      status: (
        <div className="flex justify-center">
          <p
            className={clsx(
              "px-2 py-[2px] text-[12px] border-2 rounded-sm w-fit",
              "border-greenCustom text-greenCustom"
            )}
          >
            paid
          </p>
        </div>
      ),
      name: ele?.senderReceiverInfo?.name,
      address: ele?.senderReceiverInfo?.address,
      phone: formatPhoneNumber(
        Number(ele?.senderReceiverInfo?.phone.replace("+", ""))
      ),
      email: ele?.senderReceiverInfo?.email,
    }));
  }, [financialTransactions]);

  return (
    <div className={clsx(" mb-8 mt-8  ", ``)}>
      <div className=" flex flex-col gap-y-5 justify-start">
        <div className=" rounded-md flex flex-col gap-4">
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
                onClick={() => {}}
              />
            </div>
          </div>
          <Line />
          <FormProvider {...formdata}>
            {FilterHistoryLoans()?.map((ele) => (
              <FilterComponent
                title={ele?.title}
                type={ele?.type}
                options={ele?.options}
                key={ele?.title}
              />
            ))}
          </FormProvider>
          <Table columns={columns} items={items} />

          <div className="flex items-center justify-end">
            <Pagination
              onPageChange={() => {}}
              pageCount={Math.ceil(financialTransactions?.length / 5)}
              initialPage={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTransaction;
