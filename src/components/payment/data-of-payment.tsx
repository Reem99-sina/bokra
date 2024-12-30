import { useTranslation } from "@/translations/clients";
import { RadioExample } from "../shared/Radio.component";

import { TextInput } from "../shared/form/text-input.component";
import { useForm } from "react-hook-form";
import { formattedAmount } from "@/utils/money.util";
import { dataLoansDetail } from "@/utils/data.util";

const DataOfPayment = () => {
  const { t } = useTranslation();
  const formdata = useForm();
  const paymentMethod = [t("bankTransfer"), t("Cheque"), t("onlinePayment")];
  
  return (
    <div className="bg-bg3 p-5 h-full text-black flex flex-col gap-6 container font-normal">
      <div>
        <h3 className="font-bold text-base ">{t("payment_detail")}</h3>
        <div className="flex items-center gap-4">
          {paymentMethod.map((ele) => (
            <div className="flex items-center gap-3" key={ele}>
              <RadioExample label={ele} id="" name="" />
            </div>
          ))}
        </div>
      </div>
      <div className="min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("name"),
            ...formdata.register("name"),
          }}
          label={t("name")}
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div className="min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("cardNumber"),
            ...formdata.register("cardNumber"),
          }}
          label={t("cardNumber")}
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div className="flex items-center gap-4 sm:flex-nowrap flex-wrap">
        <div className="md:min-w-[200px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("CVV_number"),
              ...formdata.register("CVV_number"),
            }}
            label={t("CVV_number")}
            className="md:max-w-[200px] w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
          />
        </div>
        <div className="md:min-w-[200px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("expirydate"),
              ...formdata.register("expirydate"),
            }}
            label={t("expirydate")}
            className="md:max-w-[200px] w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3>{t("priceBefore")}</h3>
          <p>
            {formattedAmount({
              amount: Number(dataLoansDetail?.loanDetails?.loanAmountRequested),
            })}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h3>{t("commission")}</h3>
          <p>
            {formattedAmount({
              amount: Number(dataLoansDetail?.loanDetails?.loanAmountRequested),
            })}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h3>{t("platcommission")}</h3>
          <p>
            {formattedAmount({
              amount: Number(dataLoansDetail?.loanDetails?.loanAmountRequested),
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataOfPayment;
