"use client";
import Pagination from "@/components/pagination.component";
import MainTitleComponent from "@/components/shared/main-title.component";
import { Table } from "@/components/shared/table";
import { useTranslation } from "@/translations/clients";
import { financialTransactions } from "@/utils/data.util";
import { MdPayments } from "react-icons/md";
import { useMemo } from "react";
import { formattedAmount } from "@/utils/money.util";
import { formatPhoneNumber } from "@/utils/formatNumber";

const FinancialTransaction = () => {
  const { t } = useTranslation();
  const columns: {
    title?: string;
    accessor: string;
  }[] = [
    { title: "Transaction ID", accessor: "transactionID" },
    { title: "Transaction Amount", accessor: "transactionAmount" },
    { title: "Transaction Date", accessor: "transactionDate" },
    { title: "transaction Type", accessor: "transactionType" },
    { title: "Description", accessor: "description" },
    { title: "Payment Method", accessor: "paymentMethod" },
    { title: "Name", accessor: "name" },
    { title: "Address", accessor: "address" },
    { title: "Phone", accessor: "phone" },
    { title: "Email", accessor: "email" },
  ];
  const items = useMemo(() => {
    return financialTransactions?.map((ele) => ({
      transactionID: ele?.transactionID,
      transactionAmount: (
        <div>{formattedAmount({ amount: Number(ele?.transactionAmount) })}</div>
      ),
      transactionDate: ele?.transactionDate,
      transactionType: ele?.transactionType,
      description: ele?.description,
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
    <div className="container my-5 sm:w-[95%] w-full">
      <div className=" flex flex-col gap-y-5 justify-start">
        <div>
          <MainTitleComponent title={t("financialTransactions")} />
        </div>
        <div className="">
          <Table columns={columns} items={items} />
        </div>
        <div className="flex items-center justify-end">
          <Pagination
            onPageChange={() => {}}
            pageCount={Math.ceil(financialTransactions?.length / 5)}
            initialPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialTransaction;
