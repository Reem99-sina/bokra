import { TextInput } from "@/components/shared/form/text-input.component";
import { useTranslation } from "@/translations/clients";

const ConfirmRenewalLoan = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col gap-4">
      <div className=" min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("loanId"),
            // ...register("email"),
          }}
          label={t("loanId")}
          disabled={true}
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div className=" min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("start_date"),
            type:"date"
            // ...register("email"),
          }}
          label={t("start_date")}
          disabled={true}
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div className=" min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("end_date"),
            type:"date"
            // ...register("email"),
          }}
          label={t("end_date")}
          disabled={true}
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div className=" min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("payment_term"),
            // ...register("email"),
          }}
          label={t("payment_term")}
          disabled={true}
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div className=" min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("monthly_payment"),
            // ...register("email"),
          }}
          label={t("monthly_payment")}
          disabled={true}
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div className=" min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("loanAmount"),
            // ...register("email"),
          }}
          label={t("loanAmount")}
          disabled={true}
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
    </div>
  );
};

export default ConfirmRenewalLoan;
