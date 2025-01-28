import React, { useMemo, useState } from "react";
import MainTitleComponent from "../shared/main-title.component";
import { useTranslation } from "@/translations/clients";
import { useForm } from "react-hook-form";
import { CompanyInfo } from "@/types/user.type";
import { TextInput } from "../shared/form/text-input.component";
import { OverflowLoading } from "../shared/overflow-loading";
import { Button } from "../shared/button.component";
import { toast } from "@/lib/toast";
import { useCompanyInfoMutation } from "@/services/onboard.service";

const CompanyInformationComponent = ({ onNext }: { onNext: () => void }) => {
  const { t } = useTranslation();
  const { mutateAsync } = useCompanyInfoMutation();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<CompanyInfo>();
  
  const {
    name,
    type,
    businessRegistrationNumber,
    establishmentDate,
    industrySector,
    linkedInLink,
    webSiteAddress,
  } = useMemo(() => {
    return formState.errors;
  }, [formState.errors]);

  const onSubmit = async (data: CompanyInfo) => {
    setIsLoading(true);
    try {
      const response = await mutateAsync({
        ...data,
      });
      if (response?.result) {
        toast.success(response.message);
        onNext();
      } else {
        toast.error(response?.message || t("somethingWentWrong"));
      }
    } catch (errors) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const errorMessage = errors.message || t("somethingWentWrong");
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <MainTitleComponent title={t("personalData")} />
      <div className=" flex justify-between flex-col">
        <div className="flex items-start  gap-4 sm:flex-row my-4 flex-wrap">
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("companyName"),
                ...register("name", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("companyName")}
              errorMessage={name ? String(name?.message) : undefined}
              
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("companyType"),
                ...register("type", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("companyType")}
              errorMessage={type ? String(type?.message) : undefined}
              
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("busRegistNumber"),
                ...register("businessRegistrationNumber", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("busRegistNumber")}
              errorMessage={
                businessRegistrationNumber
                  ? String(businessRegistrationNumber?.message)
                  : undefined
              }
              
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("establishmentDate"),
                type: "date",
                ...register("establishmentDate", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("establishmentDate")}
              errorMessage={
                establishmentDate
                  ? String(establishmentDate?.message)
                  : undefined
              }
              
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("industrySector"),
                ...register("industrySector", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("industrySector")}
              errorMessage={
                industrySector ? String(industrySector?.message) : undefined
              }
              
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("webSiteAddress"),
                ...register("webSiteAddress", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("webSiteAddress")}
              errorMessage={
                webSiteAddress ? String(webSiteAddress?.message) : undefined
              }
              
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("linkedInLink"),
                ...register("linkedInLink", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("linkedInLink")}
              errorMessage={
                linkedInLink ? String(linkedInLink?.message) : undefined
              }
              
            />
          </div>
        </div>
        <div className="flex justify-end ">
          {isLoading ? (
            <OverflowLoading />
          ) : (
            <Button
              text={t("Next")}
              className="!w-auto"
              onClick={handleSubmit(onSubmit)}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default CompanyInformationComponent;
