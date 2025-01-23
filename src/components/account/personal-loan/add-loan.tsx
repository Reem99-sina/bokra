import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import clsx from "clsx";

import BackNavigation from "@/components/shared/back-navigation";
import { Button } from "@/components/shared/button.component";
import ErrorInputComponent from "@/components/shared/form/error-input.component";
import { TextInput } from "@/components/shared/form/text-input.component";
import MainTitleComponent from "@/components/shared/main-title.component";
import { OverflowLoading } from "@/components/shared/overflow-loading";
import { Select } from "@/components/shared/select.component";
import { UploadFilesInput } from "@/components/shared/upload-files-input.component";
import { toast } from "@/lib/toast";
import {
  useAddLoanMutation,
  useSubmitLoanDocumentsMutation,
} from "@/services/loan.service";
import { useTranslation } from "@/translations/clients";
import { UploadFilesVariants } from "@/types/file.type";
import { LoanForm } from "@/types/loan.type";
import { loanCurrency, technologyType } from "@/utils/data.util";
import { useQueryClient } from "@tanstack/react-query";

const AddLoan = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [termsCheckedState, setTermsCheckedState] = useState<{
    checked: boolean;
    error: string | null;
  }>({
    checked: false,
    error: null,
  });

  const formdata = useForm<LoanForm>({
    defaultValues: {
      loanAmount: undefined,
      businessRegNumber: "",
      businessName: "",
      industryType: "",
      loanPurpose: "",
      financialStatement: undefined,
      annualRevenue: undefined,
      expenses: undefined,
      liabilities: undefined,
      businessRegCert: undefined,
      identityDocument: undefined,
      loanCurrency: "",
    },
    mode: "onChange",
  });

  const {
    mutateAsync: addLoan,
    isPending: isAddingLoan,
    data: createdLoan,
  } = useAddLoanMutation();
  const { mutateAsync: addLoanDocuments, isPending: isAddingLoanDocuments } =
    useSubmitLoanDocumentsMutation();

  const queryClient = useQueryClient();

  const isPending = isAddingLoan || isAddingLoanDocuments;

  const loan_currency = formdata.watch("loanCurrency");

  const onSubmit = async (data: LoanForm) => {
    if (!termsCheckedState.checked) {
      setTermsCheckedState({ checked: false, error: t("termsError") });

      return;
    }

    try {
      if (createdLoan) {
        await addLoanDocuments({ ...data, loanId: createdLoan.result.id });
      } else {
        const loan = await addLoan(data);
        await addLoanDocuments({ ...data, loanId: loan.result.id });
      }

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      await queryClient.invalidateQueries({ queryKey: ["my-loans"] });

      toast.success(t("loanAddedSuccessfully"));
      router.push("/account/personal-loans");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message || t("somethingWentWrong"));
    }
  };

  return (
    <form
      className="flex flex-col   text-black"
      onSubmit={formdata.handleSubmit(onSubmit)}
    >
      <div className="flex gap-x-3 flex-row-reverse">
        <MainTitleComponent title={t("loanDetail")} />
        <BackNavigation title="" />
      </div>
      <div className=" flex flex-wrap gap-6 my-4">
        <div className="sm:min-w-[280px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("purposeCompany"),
              ...formdata.register("loanPurpose", {
                required: { value: true, message: t("purposeMessage") },
              }),
            }}
            errorMessage={formdata.formState.errors.loanPurpose?.message}
            label={t("purposeCompany")}
            className="md:min-w-[300px] w-full !text-xs  !text-gray-500"
          />
        </div>
        <div className="sm:min-w-[280px] min-w-full">
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
            className="md:min-w-[300px] w-full !text-xs  "
          />
        </div>
        <div className="sm:min-w-[280px] min-w-full">
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
                <Select
                  label={t("loanCurrency")}
                  placeholder={t("loanCurrency")}
                  options={loanCurrency}
                  onChange={(value) => onChange(value)}
                  errorMessage={error?.message}
                  styleCustom={{
                    width: "auto",
                    backgroundColor: "#fff",
                    minWidth: "300px",
                  }}
                />
              );
            }}
          />
        </div>
      </div>
      <MainTitleComponent title={t("businessInformation")} />
      <div className=" flex flex-wrap gap-6  my-4">
        <div className="sm:min-w-[280px] min-w-full">
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
            className="md:min-w-[300px] w-full !text-xs"
          />
        </div>
        <div className="sm:min-w-[280px] min-w-full">
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
            className=" w-full !text-xs    "
          />
        </div>

        <div className="sm:min-w-[280px] min-w-full">
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
                    errorMessage={error?.message}
                    styleCustom={{
                      width: "auto",
                      backgroundColor: "#fff",
                      minWidth: "300px",
                    }}
                  />
                </>
              );
            }}
          />
        </div>
      </div>

      <MainTitleComponent title={t("financials")} />

      <div className=" flex flex-wrap gap-6 my-4">
        <div className="sm:min-w-[280px] min-w-full">
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
            className="md:min-w-[300px] w-full !text-xs    "
          >
            {!formdata.formState.errors.annualRevenue?.message && (
              <p className="text-[12px] font-light text-gray-400 ">
                {t("Annual_Revenue") + " " + t("Annual_Revenue_des")}
              </p>
            )}
          </TextInput>
        </div>

        <div className="sm:min-w-[280px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("total_liabilities"),
              type: "number",
              ...formdata.register("liabilities", {
                required: {
                  value: true,
                  message: t("inputRequired", {
                    inputName: t("total_liabilities"),
                  }),
                },
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
            className="md:min-w-[300px] w-full !text-xs    "
          >
            {!formdata.formState.errors.liabilities?.message && (
              <p className="text-[12px] font-light text-gray-400  ">
                {t("total_liabilities_desc")}
              </p>
            )}
          </TextInput>
        </div>

        <div className="sm:min-w-[280px] min-w-full">
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
            className="md:min-w-[300px] w-full !text-xs    "
          />
        </div>
      </div>

      <MainTitleComponent title={t("docUpload")} />

      <div className="flex flex-wrap gap-6 my-4">
        <div className="max-w-[500px] w-full">
          <Controller
            control={formdata.control}
            name="financialStatement"
            rules={{
              required: t("fileType"),
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <UploadFilesInput
                  id="financialStatements"
                  text={t("finStatements")}
                  placeholder={t("finStatements")}
                  value={value ? [value] : []}
                  isMultiple={false}
                  onChange={(files) => {
                    onChange(files[0]);
                  }}
                  variant={UploadFilesVariants.INPUT}
                  errorMessage={error?.message}
                />
              );
            }}
          />
        </div>
        <div className="max-w-[500px] w-full">
          <Controller
            control={formdata.control}
            name="businessRegCert"
            rules={{
              required: t("errorbusinessregistration"),
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <UploadFilesInput
                  id="businessRegCert"
                  text={t("busRegistCert")}
                  placeholder={t("busRegistCert")}
                  value={value ? [value] : []}
                  isMultiple={false}
                  onChange={(files) => {
                    onChange(files[0]);
                  }}
                  variant={UploadFilesVariants.INPUT}
                  errorMessage={error?.message}
                />
              );
            }}
          />
        </div>
        <div className="max-w-[500px] w-full">
          <Controller
            control={formdata.control}
            name="identityDocument"
            rules={{
              required: t("errorId"),
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <UploadFilesInput
                  id="identityDocument"
                  text={t("identityDocument")}
                  placeholder={t("identityDocument")}
                  value={value ? [value] : []}
                  isMultiple={false}
                  onChange={(files) => {
                    onChange(files[0]);
                  }}
                  variant={UploadFilesVariants.INPUT}
                  errorMessage={error?.message}
                />
              );
            }}
          />
        </div>
      </div>

      <div
        className=" flex flex-wrap gap-x-1 my-2 items-center"
        onClick={() => {
          setTermsCheckedState({
            checked: !termsCheckedState.checked,
            error: null,
          });
        }}
      >
        <Checkbox
          crossOrigin={undefined}
          checked={termsCheckedState.checked}
          onChange={(e) => {
            setTermsCheckedState({ checked: e.target.checked, error: null });
          }}
        />
        <h3 className={clsx("text-black font-normal text-xs cursor-pointer")}>
          {t("terms_and_conditions")}
        </h3>
      </div>

      {termsCheckedState.error && (
        <ErrorInputComponent errorMessage={termsCheckedState.error} />
      )}

      <div className="flex items-center justify-end gap-x-3 p-3">
        <Button
          text={t("addLoan")}
          className="!bg-black !w-auto !text-xs"
          type="submit"
          disabled={!!termsCheckedState.error}
        />
      </div>

      {isPending && <OverflowLoading />}
    </form>
  );
};

export default AddLoan;
