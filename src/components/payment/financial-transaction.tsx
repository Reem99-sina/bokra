"use client";
import Pagination from "@/components/pagination.component";
import { Table } from "@/components/shared/table";
import { useTranslation } from "@/translations/clients";
import { financialTransactions } from "@/utils/data.util";
import { MdPayments } from "react-icons/md";
import { useMemo } from "react";
import { formattedAmount } from "@/utils/money.util";
import { formatPhoneNumber } from "@/utils/formatNumber";
import SearchComponent from "@/components/shared/search-component";
import clsx from "clsx";

const FinancialTransaction = () => {
  const { t } = useTranslation();
  const columns: {
    title?: string;
    accessor: string;
  }[] = [
    { title: t("transactionID"), accessor: "transactionID" },
    { title: t("transactionAmount"), accessor: "transactionAmount" },
    { title: t("transactionDate"), accessor: "transactionDate" },
    { title: t("transactionType"), accessor: "transactionType" },
    { title: t("desc"), accessor: "description" },
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
          <div className="w-full">
            {" "}
            <SearchComponent />
          </div>
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
