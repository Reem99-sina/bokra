import { TextInput } from "@/components/shared/form/text-input.component";
import { Select } from "@/components/shared/select.component";
import { useTranslation } from "@/translations/clients";
import { addLoanInfo } from "@/types/loan.type";
import { technologyType } from "@/utils/data.util";
import {  Textarea } from "@material-tailwind/react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import AddFiles from "./add-files";
import PhoneInput from "react-phone-input-2";
import MainTitleComponent from "@/components/shared/main-title.component";
import { RadioExample } from "@/components/shared/Radio.component";
import { Button } from "@/components/shared/button.component";

const AddLoan = ({ type }: { type: string }) => {
  const { t } = useTranslation();

  const formdata = useForm<addLoanInfo>({
    defaultValues: {
      companyName: "",
      industryPartnername: "",
      companyType: "",
      busRegistNumber: "",
      companyWebAddress: "",
      companyLinkedin: "",
      datOfEst: "",
      industry: "",
      purposeOfCompany: "",
      gainCompany: "",
      problem: "",
      amountMoney: "",
      duration: "",
      files: undefined,
      address: "",
      city: "",
      email: "",
      governorate: "",
      personName: "",
      phoneNum: "",
      annual_revenue: "",
      net_profit_margin: "",
      total_asset: "",
      total_liabilities: "",
      loan_amount_requested: "",
    },
    mode: "onChange",
  });

  return (
    <div className="flex flex-col gap-y-2 h-[80vh] overflow-y-auto text-black">
      <MainTitleComponent title={t("companyInformation")} />
      <div className=" flex flex-wrap gap-x-3 my-2">
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("companyName"),
              ...formdata.register("companyName"),
            }}
            label={t("companyName")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("IndustryPartnername"),
              ...formdata.register("industryPartnername"),
            }}
            label={t("IndustryPartnername")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
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
                    label={t("companyType")}
                    placeholder={t("companyType")}
                    options={technologyType}
                    onChange={(value) => onChange(value)}
                    styleCustom={{
                      width: "auto",
                      backgroundColor: "white",
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
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("busRegistNumber"),
              type: "number",
              ...formdata.register("busRegistNumber"),
            }}
            label={t("busRegistNumber")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          >
            <p className="text-[12px] font-light text-gray-400 mb-2">
              {t("busRegistNumber")}
            </p>
          </TextInput>
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("datOfEst"),
              type: "date",
              ...formdata.register("datOfEst"),
            }}
            label={t("datOfEst")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
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
                    styleCustom={{
                      width: "auto",
                      backgroundColor: "white",
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
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("companyWebAddress"),
              type: "text",
              ...formdata.register("companyWebAddress"),
            }}
            label={t("companyWebAddress")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          >
            <p className="text-[12px] font-light text-gray-400 mb-2">
              {t("companyWebAddress")}
            </p>
          </TextInput>
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("companyLinkedin"),
              type: "text",
              ...formdata.register("companyLinkedin", {
                pattern: {
                  value: /^(http|https):\/\/[^ "]+$/,
                  message: "Must be a valid URL",
                },
              }),
            }}
            label={t("companyLinkedin")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          />
        </div>
      </div>
      <MainTitleComponent title={t("contactInfo")} />
      <div className=" flex flex-wrap gap-x-3 my-2">
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("address"),
              type: "text",
              ...formdata.register("address"),
            }}
            label={t("address")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          />
        </div>

        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("city"),
              type: "text",
              ...formdata.register("city"),
            }}
            label={t("city")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("governorate"),
              type: "text",
              ...formdata.register("governorate"),
            }}
            label={t("governorate")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("personName"),
              type: "text",
              ...formdata.register("personName"),
            }}
            label={t("personName")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <Controller
            control={formdata.control}
            name="phoneNum"
            rules={{
              required: t("requiredMessage"),
            }}
            render={({ field: { onChange, value } }) => {
              return (
                <PhoneInput
                  country={"us"}
                  value={value}
                  onChange={(phone) => onChange(phone)}
                  specialLabel={t("phoneNum")}
                  inputStyle={{
                    width: "300px",
                    padding: "7px 10px",
                    borderRadius: "0.375rem",
                    margin: "8px 0px",
                    color: "black",
                    border: "1px solid #d1d5db",
                  }}
                />
              );
            }}
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("email"),
              type: "text",
              ...formdata.register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              }),
            }}
            label={t("email")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          />
        </div>
      </div>
      <MainTitleComponent title={t("legalDoc")} />
      <div className=" flex flex-wrap gap-x-3 my-2">
        <div className="md:min-w-[300px] min-w-full">
          <Controller
            control={formdata.control}
            name="files"
            rules={{
              required: t("requiredMessage"),
            }}
            render={() => {
              return (
                <FormProvider {...formdata}>
                  <AddFiles
                    formName="files"
                    placeholder={t("addFilelegal")}
                    label={t("addFiles")}
                  />
                </FormProvider>
              );
            }}
          />
        </div>
      </div>
      <MainTitleComponent title={t("financials")} />
      <div className=" flex flex-wrap gap-x-3 my-2">
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("Annual_Revenue_des"),
              type: "number",
              ...formdata.register("annual_revenue"),
            }}
            label={t("Annual_Revenue")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          >
            <p className="text-[12px] font-light text-gray-400 mb-2">
              {t("Annual_Revenue") + " " + t("Annual_Revenue_des")}
            </p>
          </TextInput>
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("net_profit_margin_desc"),
              type: "number",
              ...formdata.register("net_profit_margin"),
            }}
            label={t("net_profit_margin")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          >
            <p className="text-[12px] font-light text-gray-400 mb-2">
              {t("net_profit_margin_desc")}
            </p>
          </TextInput>
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("total_asset_desc"),
              type: "number",
              ...formdata.register("total_asset"),
            }}
            label={t("total_asset")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          >
            <p className="text-[12px] font-light text-gray-400 mb-2 ">
              {t("total_asset_desc")}
            </p>
          </TextInput>
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("total_liabilities"),
              type: "number",
              ...formdata.register("total_liabilities"),
            }}
            label={t("total_liabilities")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          >
            <p className="text-[12px] font-light text-gray-400 mb-2 ">
              {t("total_liabilities_desc")}
            </p>
          </TextInput>
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("revenue_projections"),
              type: "number",
              ...formdata.register("revenue_projections"),
            }}
            label={t("revenue_projections")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500   "
          >
            <p className="text-[12px] font-light text-gray-400 mb-2 ">
              {t("revenue_projections_desc")}
            </p>
          </TextInput>
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("Cash_flow_forecasts"),
              type: "number",
              ...formdata.register("Cash_flow_forecasts"),
            }}
            label={t("Cash_flow_forecasts")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500  "
          >
            <p className="text-[12px] font-light text-gray-400 mb-2 ">
              {t("Cash_flow_forecasts_desc")}
            </p>
          </TextInput>
        </div>
      </div>
      <MainTitleComponent title={t("loan_details")} />
      <div className=" flex flex-wrap gap-x-3 my-2">
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("loan_amount_requested"),
              type: "number",
              ...formdata.register("loan_amount_requested"),
            }}
            label={t("loan_amount_requested")}
            className="md:min-w-[500px] w-full !text-xs !font-bold !text-gray-500  "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("proposed_repayment_desc"),
              type: "number",
              ...formdata.register("loan_amount_requested"),
            }}
            label={t("proposed_repayment")}
            className="md:min-w-[500px] w-full !text-xs !font-bold !text-gray-500  "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <p className="mb-2 text-sm font-bold">{t("purposeCompany")}</p>
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
                    className="border border-gray-300 rounded-md !bg-white p-3 md:!min-w-[500px] !w-full"
                  />
                </>
              );
            }}
          />
        </div>
      </div>
      <MainTitleComponent title={t("business_plan")} />
      <div className=" flex flex-wrap gap-x-3 my-2">
        <div className="md:min-w-[300px] min-w-full">
          <p className="mb-2 text-sm">{t("problem")}</p>
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
                    className="border border-gray-300 rounded-md !bg-white p-3 md:!min-w-[500px] !w-full"
                  />
                </>
              );
            }}
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("timelines"),
              type: "datetime-local",
              ...formdata.register("gainCompany"),
            }}
            label={t("timelines")}
            className="md:min-w-[500px] w-full !text-xs !font-light !text-gray-500   "
          >
            <p className="text-[12px] font-light text-gray-400 mb-2 ">
              {t("timelines_desc")}
            </p>
          </TextInput>
        </div>
      </div>
      <MainTitleComponent title={t("collateral")} />
      <div className=" flex flex-wrap gap-x-3 my-2">
        <div className="md:min-w-[300px] min-w-full">
          <Controller
            control={formdata.control}
            name="files"
            rules={{
              required: t("requiredMessage"),
            }}
            render={() => {
              return (
                <FormProvider {...formdata}>
                  <AddFiles
                    formName="files"
                    placeholder={t("potential_collateral")}
                    desc={t("potential_collateral_desc")}
                    label={t("potential_collateral")}
                  />
                </FormProvider>
              );
            }}
          />
        </div>
      </div>
      <MainTitleComponent title={t("management_team")} />
      <div className=" flex flex-wrap gap-x-3 my-2">
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("nameTeam"),
              type: "number",
              ...formdata.register("loan_amount_requested"),
            }}
            label={t("nameTeam")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500  "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("postion"),
              type: "number",
              ...formdata.register("loan_amount_requested"),
            }}
            label={t("postion")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500  "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <TextInput
            inputProps={{
              placeholder: t("yearsExperience"),
              type: "number",
              ...formdata.register("loan_amount_requested"),
            }}
            label={t("yearsExperience")}
            className="md:min-w-[300px] w-full !text-xs !font-light !text-gray-500  "
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <p className="mb-2 text-sm">{t("expertise")}</p>
          <Controller
            control={formdata.control}
            name="problem"
            rules={{
              required: t("requiredMessage"),
            }}
            render={({ field: { onChange } }) => {
              return (
                <div className="w-full">
                  <Textarea
                    rows={5}
                    onChange={(event) => onChange(event)}
                    placeholder={t("expertise")}
                    className="border border-gray-300 rounded-md !bg-white p-3 md:!min-w-[500px] !min-w-[300px]"
                  />
                </div>
              );
            }}
          />
        </div>
        <div className="md:min-w-[300px] min-w-full">
          <p className="mb-2 text-sm">{t("track_record")}</p>
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
                    placeholder={t("track_record")}
                    className="border border-gray-300 rounded-md !bg-white p-3 md:!min-w-[500px] !w-full"
                  />
                </>
              );
            }}
          />
        </div>
      </div>
      <MainTitleComponent title={t("industry_analysis")} />
      <div className=" flex flex-wrap gap-x-3 my-2">
        <div className="md:min-w-[300px] min-w-full">
          <p className="mb-2 text-sm">{t("industry_landscape")}</p>
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
                    placeholder={t("industry_landscape_desc")}
                    className="border border-gray-300 rounded-md !bg-white p-3 md:!min-w-[500px] !w-full"
                  />
                </>
              );
            }}
          />
        </div>
      </div>
      <MainTitleComponent title={t("additional_information")} />
      <div className=" flex flex-wrap gap-x-3 my-2 items-center">
        <h3 className="text-black font-bold text-sm">{t("question")}</h3>
        <RadioExample id="yes" name="type" label="yes" />
        <RadioExample id="no" name="type" label="no" />
      </div>
      <div className="flex items-center justify-end gap-x-3 p-3">
        <Button
          text={type == "edit" ? t("edit") : t("addLoan")}
          className="!bg-black !w-auto"
        />
        <Button
          text={t("cancel")}
          className="!bg-beige !text-gray-500 !w-auto"
          // onClick={() => refDrawer?.current?.close()}
        />
      </div>
    </div>
  );
};

export default AddLoan;
