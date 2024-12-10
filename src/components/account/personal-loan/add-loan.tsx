import { TextInput } from "@/components/shared/form/text-input.component";
import { Select } from "@/components/shared/select.component";
import { useTranslation } from "@/translations/clients";
import { addLoanInfo } from "@/types/loan.type";
import { technologyType } from "@/utils/data.util";
import { Textarea } from "@material-tailwind/react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import AddFiles from "./add-files";

const AddLoan = () => {
  const { t } = useTranslation();
  const formdata= useForm<addLoanInfo>({
    defaultValues: {
      companyName: "",
      industry: "",
      purposeOfCompany: "",
      gainCompany: "",
      problem: "",
      amountMoney: "",
      duration: "",
      files: undefined,
    },
    mode: "onChange",
  });
  
  return (
    <div className="flex flex-col gap-y-3 -ms-8 p-4 h-[80vh] overflow-y-auto">
       <div>
        <Controller
          control={formdata.control}
          name="files"
          rules={{
            required: t("requiredMessage"),
          }}
          render={() => {
            return (
              <FormProvider {...formdata}>
                <AddFiles/>
              </FormProvider>
            );
          }}
        />
      </div>
      <div>
        <TextInput
          inputProps={{
            placeholder: t("companyName"),
            ...formdata.register("companyName"),
          }}
          label={t("companyName")}
          className="max-w-auto !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div>
        <Controller
          control={formdata.control}
          name="industry"
          rules={{
            required: t("requiredMessage"),
          }}
          render={({ field: { onChange }, fieldState: { error } }) => {
            return (
              <>
                <Select
                  label={t("technologyType")}
                  placeholder={t("technologyType")}
                  options={technologyType}
                  onChange={(value) => onChange(value)}
                  styleCustom={{ width: "auto", backgroundColor: "white" }}
                />
                {error?.message && (
                  <p className="mb-4 text-xs text-red-600 dark:text-red-500">
                    {error?.message}
                  </p>
                )}
              </>
            );
          }}
        />
      </div>
      <div>
        <p className="mb-2 text-xs font-bold">{t("purposeCompany")}</p>
        <Controller
          control={formdata.control}
          name="purposeOfCompany"
          rules={{
            required: t("requiredMessage"),
          }}
          render={({ field: { onChange } }) => {
            return (
              <>
                <Textarea
                  rows={5}
                  onChange={(event) => onChange(event)}
                  placeholder={t("purposeCompany")}
                  className="border border-gray-300 rounded-md !bg-white p-3 "
                />
              </>
            );
          }}
        />
      </div>
      <div>
        <TextInput
          inputProps={{
            placeholder: t("gainCompany"),
            type: "number",
            ...formdata.register("gainCompany"),
          }}
          label={t("gainCompany")}
          className="max-w-auto !text-xs !font-bold !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div>
        <p className="mb-2 text-xs">{t("problem")}</p>
        <Controller
          control={formdata.control}
          name="problem"
          rules={{
            required: t("requiredMessage"),
          }}
          render={({ field: { onChange } }) => {
            return (
              <>
                <Textarea
                  rows={5}
                  onChange={(event) => onChange(event)}
                  placeholder={t("problemPlaceholder")}
                  className="border border-gray-300 rounded-md !bg-white p-3"
                />
              </>
            );
          }}
        />
      </div>
      <div>
        <TextInput
          inputProps={{
            placeholder: t("amountMoney"),
            type: "number",
            ...formdata.register("amountMoney"),
          }}
          label={t("amountMoney")}
          className="max-w-auto !text-xs !font-bold !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div>
        <TextInput
          inputProps={{
            placeholder: t("duration"),
            type: "number",
            ...formdata.register("duration"),
          }}
          label={t("duration")}
          className="max-w-auto !text-xs !font-bold !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
     
    </div>
  );
};

export default AddLoan;
