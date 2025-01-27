import { useTranslation } from "@/translations/clients";
import { TextInput } from "../shared/form/text-input.component";
import MainTitleComponent from "../shared/main-title.component";
import { Controller, useForm } from "react-hook-form";
import PhoneNumber from "../shared/phone-number";
import { Button } from "../shared/button.component";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { PersonalInfo } from "@/types/user.type";
import { toast } from "@/lib/toast";
import { usePersonalInfoMutation } from "@/services/onboard.service";
import { OverflowLoading } from "../shared/overflow-loading";

const PersonalInformationComponent = ({ onNext }: { onNext: () => void }) => {
  const { mutateAsync } = usePersonalInfoMutation();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const { register, control, handleSubmit, formState } =
    useForm<PersonalInfo>();
  const { contactPersonName, phoneNumber, city, address, governorate } =
    useMemo(() => {
      return formState.errors;
    }, [formState.errors]);
  const onSubmit = async (data: PersonalInfo) => {
    setIsLoading(true);
    try {
      const response = await mutateAsync({
        ...data,
        phoneNumber: `+${data.phoneNumber}`,
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
        <div className="flex items-center  gap-4 sm:flex-row my-4 flex-wrap">
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("contactPersonName"),
                ...register("contactPersonName", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("contactPersonName")}
              errorMessage={
                contactPersonName
                  ? String(contactPersonName?.message)
                  : undefined
              }
              className=" !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <h3
              className={clsx(
                " mb-2 font-bold text-xs",
                phoneNumber ? "text-red-500" : "text-black"
              )}
            >
              {t("phone")}
            </h3>
            <Controller
              control={control}
              name="phoneNumber"
              rules={{
                required: t("inputRequired", {
                  inputName: t("errorPhoneNumberValid"),
                }),
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <PhoneNumber
                    errorMessage={error?.message}
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("governorate"),
                ...register("governorate", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("governorate")}
              errorMessage={
                governorate ? String(governorate?.message) : undefined
              }
              className="!text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("city"),
                ...register("city", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("city")}
              errorMessage={city ? String(city?.message) : undefined}
              className=" !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[500px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("address"),
                ...register("address", {
                  required: { value: true, message: t("requiredMessage") },
                }),
              }}
              label={t("address")}
              errorMessage={address ? String(address?.message) : undefined}
              className=" !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
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

export default PersonalInformationComponent;
