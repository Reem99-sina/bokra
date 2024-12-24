import { TextInput } from "@/components/shared/form/text-input.component";
import { Select } from "@/components/shared/select.component";
import { useTranslation } from "@/translations/clients";
import { addLoanInfo } from "@/types/loan.type";
import { loanCurreny, technologyType } from "@/utils/data.util";
import { Checkbox } from "@material-tailwind/react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import AddFiles from "./add-files";
import MainTitleComponent from "@/components/shared/main-title.component";
import { Button } from "@/components/shared/button.component";
import BackNavigation from "@/components/shared/back-navigation";

const AddLoan = ({ type }: { type: string }) => {
  const { t } = useTranslation();

  const formdata = useForm<addLoanInfo>({
    defaultValues: {
      loanAmount: undefined,
      companyType: "",
      businessRegNumber: "",
      businessName: "",
      industryType: "",
      loanPurpose: "",
      financialStatements: undefined,
      annualRevenue: undefined,
      expenses: undefined,
      liabilities: undefined,
      businessRegCert: undefined,
      identityDocument: undefined,
      loanCurrency: "",
    },
    mode: "onChange",
  });
  const loan_currency = formdata.watch("loanCurrency");
  const onSubmit = () => {
    // console.log(data, "data");
  };

  return (
    <div className="flex flex-col gap-y-2  text-black">
      <div className="flex gap-x-3 flex-row-reverse">
        <MainTitleComponent title={t("loanDetail")} />
        <BackNavigation title="" />
      </div>
      <div className=" flex flex-wrap gap-5 my-4">
        <div className="sm:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("purposeCompany"),
              ...formdata.register("loanPurpose", {
                required: { value: true, message: t("purposeMessage") },
              }),
            }}
            errorMessage={formdata.formState.errors.loanPurpose?.message}
            label={t("purposeCompany")}
            className="md:min-w-[400px] w-full !text-xs !font-light !text-gray-500"
          />
        </div>
        <div className="sm:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("loanAmount"),
              type: "number",
              ...formdata.register("loanAmount", {
                required: {
                  value: true,
                  message:
                    loan_currency == "USD"
                      ? t("loanAmountRequiredErrorMessage")
                      : t("loanAmountRangeErrorEGPMessage"),
                },
                min: { value: 5000, message: t("loanAmountRangeErrorMessage") },
                max: {
                  value: 500000,
                  message: t("loanAmountRangeErrorMessage"),
                },
              }),
            }}
            errorMessage={formdata.formState.errors.loanAmount?.message}
            label={t("loanAmount")}
            className="md:min-w-[400px] w-full !text-xs !font-light !text-gray-500  "
          />
        </div>
        <div className="sm:min-w-[300px] min-w-full">
          <Controller
            control={formdata.control}
            name="loanCurrency"
            rules={{
              required: {
                value: true,
                message: t("loanCurrencyRequiredErrorMessage"),
              },
            }}
            render={({ field: { onChange }, fieldState: { error } }) => {
              return (
                <>
                  <Select
                    label={t("loanCurrency")}
                    placeholder={t("loanCurrency")}
                    options={loanCurreny}
                    onChange={(value) => onChange(value)}
                    error={Boolean(error?.message)}
                    styleCustom={{
                      width: "auto",
                      backgroundColor: "#fff",
                      minWidth: "300px",
                    }}
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
      </div>
      <MainTitleComponent title={t("businessInformation")} />
      <div className=" flex flex-wrap gap-5  my-4">
        <div className="sm:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("business_name"),
              type: "text",
              ...formdata.register("businessName", {
                required: { value: true, message: t("business_error") },
              }),
            }}
            errorMessage={formdata.formState.errors.businessName?.message}
            label={t("business_name")}
            className="md:min-w-[400px] w-full !text-xs !font-light !text-gray-500    "
          />
        </div>
        <div className="sm:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("registration_number"),
              type: "text",
              ...formdata.register("businessRegNumber", {
                required: {
                  value: true,
                  message: t("registration_error_required"),
                },
                pattern: {
                  value: /^[a-zA-Z0-9]{10,15}$/,
                  message: t("registration_error_alph"),
                },
              }),
            }}
            errorMessage={formdata.formState.errors.businessRegNumber?.message}
            label={t("registration_number")}
            className=" w-full !text-xs !font-light !text-gray-500    "
          />
        </div>
        <div className="sm:min-w-[300px] min-w-full">
          <Controller
            control={formdata.control}
            name="industryType"
            rules={{
              required: { value: true, message: t("industry_error") },
            }}
            render={({ field: { onChange }, fieldState: { error } }) => {
              return (
                <>
                  <Select
                    label={t("technologyType")}
                    placeholder={t("technologyType")}
                    options={technologyType}
                    onChange={(value) => onChange(value)}
                    error={Boolean(error?.message)}
                    styleCustom={{
                      width: "auto",
                      backgroundColor: "#fff",
                      minWidth: "300px",
                    }}
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
      </div>
      <MainTitleComponent title={t("financials")} />
      <div className=" flex flex-wrap gap-5 my-4">
        <div className="sm:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("Annual_Revenue"),
              type: "number",
              ...formdata.register("annualRevenue", {
                required: {
                  value: true,
                  message: t("annual_revenue_error_required"),
                },
                pattern: {
                  value: /^[0-9]+(\.[0-9]+)?$/,
                  message: t("enter_valid_number"),
                },
              }),
            }}
            errorMessage={formdata.formState.errors.annualRevenue?.message}
            label={t("Annual_Revenue")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500    "
          >
            {!formdata.formState.errors.annualRevenue?.message && (
              <p className="text-[12px] font-light text-gray-400 mb-2">
                {t("Annual_Revenue") + " " + t("Annual_Revenue_des")}
              </p>
            )}
          </TextInput>
        </div>
        <div className="sm:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("total_liabilities"),
              type: "number",
              ...formdata.register("liabilities", {
                pattern: {
                  value: /^[0-9]+(\.[0-9]+)?$/,
                  message: t("enter_valid_number"),
                },
                validate: (value) => {
                  return Number(value) >
                    Number(formdata.getValues("annualRevenue"))
                    ? t("liabilitiesErrorExceed")
                    : undefined;
                },
              }),
            }}
            errorMessage={formdata.formState.errors.liabilities?.message}
            label={t("total_liabilities")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500    "
          >
            {!formdata.formState.errors.liabilities?.message && (
              <p className="text-[12px] font-light text-gray-400 mb-2 ">
                {t("total_liabilities_desc")}
              </p>
            )}
          </TextInput>
        </div>
        <div className="sm:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("expenses"),
              type: "number",
              ...formdata.register("expenses", {
                required: { value: true, message: t("expenses_error_require") },
                pattern: {
                  value: /^[0-9]+(\.[0-9]+)?$/,
                  message: t("enter_valid_number"),
                },
              }),
            }}
            errorMessage={formdata.formState.errors.expenses?.message}
            label={t("expenses")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500    "
          />
        </div>
      </div>
      <MainTitleComponent title={t("docUpload")} />
      <div className=" flex flex-wrap gap-5 my-4">
        <div className="sm:min-w-[300px] min-w-full">
          <FormProvider {...formdata}>
            <AddFiles
              formName="financialStatements"
              placeholder={t("finStatements")}
              desc={""}
              label={t("finStatements")}
             
            />
          </FormProvider>
        </div>
        <div className="sm:min-w-[300px] min-w-full">
          <FormProvider {...formdata}>
            <AddFiles
              formName="businessRegCert"
              placeholder={t("busRegistCert")}
              desc={""}
              label={t("busRegistCert")}
             
            />
          </FormProvider>
        </div>
        <div className="sm:min-w-[300px] min-w-full">
          <FormProvider {...formdata}>
            <AddFiles
              formName="identityDocument"
              placeholder={t("identityDocument")}
              desc={""}
              label={t("identityDocument")}
           
            />
          </FormProvider>
        </div>
      </div>
      <div className=" flex flex-wrap gap-x-2 my-2 items-center">
        <Checkbox crossOrigin={undefined} />
        <h3 className="text-black font-bold text-sm">{t("question")}</h3>
      </div>
      <div className="flex items-center justify-end gap-x-3 p-3">
        <Button
          text={type == "edit" ? t("edit") : t("addLoan")}
          className="!bg-black !w-auto !text-sm !px-4 !py-2"
          onClick={formdata.handleSubmit(onSubmit)}
        />
        <Button
          text={t("cancel")}
          className="!bg-beige !text-gray-500 !w-auto !text-sm  !px-4 !py-2"
          // onClick={() => refDrawer?.current?.close()}
        />
      </div>
    </div>
  );
};

export default AddLoan;
