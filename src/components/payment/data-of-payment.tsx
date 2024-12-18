import { useTranslation } from "@/translations/clients";
import { RadioExample } from "../shared/Radio.component";
import { FaRegCreditCard } from "react-icons/fa";
import { TextInput } from "../shared/form/text-input.component";
import { useForm } from "react-hook-form";
import { formattedAmount } from "@/utils/money.util";
import { dataLoansDetail } from "@/utils/data.util";

const DataOfPayment = () => {
  const { t } = useTranslation();
  const formdata = useForm();
  
  return (
    <div className="bg-gray-300 p-5 h-full text-black flex flex-col gap-4 container">
      <h3 className="font-black">{t("payment_detail")}</h3>
      <div className="flex items-center gap-3">
        <RadioExample label={t("creditCard")} id="" name="" />
        <FaRegCreditCard />
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
      <div className="flex flex-col gap-5">
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
