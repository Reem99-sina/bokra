"use client";
import DataOfLoan from "@/components/payment/data-of-loan";
import DataOfPayment from "@/components/payment/data-of-payment";
import UserOfLoan from "@/components/payment/user-of-loan";
import { Button } from "@/components/shared/button.component";
import { useTranslation } from "@/translations/clients";
import { dataLoansDetail } from "@/utils/data.util";
import { formattedAmount } from "@/utils/money.util";

const PaymentPage = ({onCancel}:{onCancel:()=>void}) => {
  const { t } = useTranslation();
  
  return (
    <div className=" items-center justify-center flex flex-col p-5 h-full min-h-screen bg-beige font-normal">
      <div className="border border-grayLight rounded-md  bg-white">
        <h3 className="text-black font-black text-md text-center p-3">
          {t("payment_detail")}
        </h3>
        <div className="h-[1px] w-full bg-grayLight" />
        <div className="flex  gap-4 sm:flex-nowrap flex-wrap">
          <div className="flex   mt-3  flex-col container pe-2">
            <DataOfLoan />
            <UserOfLoan />
          </div>
          <div className="flex flex-col">
            <DataOfPayment />
          </div>
        </div>
        <div className="h-[1px] w-full bg-grayLight" />
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h3 className="font-black text-black">
              {formattedAmount({
                amount: Number(
                  dataLoansDetail?.loanDetails?.loanAmountRequested
                ),
              })}
            </h3>
            <p className="text-gray-500">{t("total_paid")}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Button
              text={t("pay_now")}
              className="!bg-black !text-white !w-auto !text-xs !py-3 !px-4"
            />
            <Button
              text={t("cancellation")}
              className="!bg-white !text-black !w-auto !text-xs !border !border-grayLight  !py-3 !px-4"
              onClick={onCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
