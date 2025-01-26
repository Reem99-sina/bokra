"use client";
import Pagination from "@/components/pagination.component";
import { Table } from "@/components/shared/table";
import { useTranslation } from "@/translations/clients";
import { financialTransactions } from "@/utils/data.util";
import { MdPayments } from "react-icons/md";
import { useMemo, useRef } from "react";
import { formattedAmount } from "@/utils/money.util";
import { formatPhoneNumber } from "@/utils/formatNumber";
import SearchComponent from "@/components/shared/search-component";
import clsx from "clsx";
import { Modal, ModalRef } from "../shared/modal.component";

import PaymentPage from "@/app/[locale]/payment/page";
import { Button } from "../shared/button.component";
import Link from "next/link";

const RepaymentSchedule = () => {
  const modalRef = useRef<ModalRef>(null);

  const { t } = useTranslation();
  const columns: {
    title?: string;
    accessor: string;
  }[] = [
    { title: t("loanName"), accessor: "loanName" },

    { title: t("transactionID"), accessor: "transactionID" },
    { title: t("transactionAmount"), accessor: "transactionAmount" },
    { title: t("transactionDate"), accessor: "transactionDate" },
    { title: t("status"), accessor: "status" },

    { title: t("action"), accessor: "action" },
  ];
  const items = useMemo(() => {
    return financialTransactions?.map((ele) => ({
      loanName: (
        <div>
          <Link
            href={`/account/personal-loans/1`}
            target="_parent"
            className="hover:underline cursor-pointer"
          >
            {t("loanName")}
          </Link>
        </div>
      ),
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
              ele?.status == "upcoming"
                ? "border-yellowDark text-yellowDark"
                : ele?.status == "paid"
                ? "border-greenCustom text-greenCustom"
                : "border-red-500 text-red-500"
            )}
          >
            {ele?.status}
          </p>
        </div>
      ),
      name: ele?.senderReceiverInfo?.name,
      address: ele?.senderReceiverInfo?.address,
      phone: formatPhoneNumber(
        Number(ele?.senderReceiverInfo?.phone.replace("+", ""))
      ),
      email: ele?.senderReceiverInfo?.email,
      action: (
        <div>
          <Button
            text={t("makePayment")}
            className="!bg-black !text-white !px-3 !py-2 !text-xs"
            onClick={() => modalRef.current?.open()}
          />
        </div>
      ),
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
      <Modal ref={modalRef}>
        <PaymentPage onCancel={() => modalRef?.current?.close()} />
      </Modal>
    </div>
  );
};

export default RepaymentSchedule;
