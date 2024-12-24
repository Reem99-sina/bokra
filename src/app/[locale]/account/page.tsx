"use client";
import { Button } from "@/components/shared/button.component";
import { TextInput } from "@/components/shared/form/text-input.component";
import MainTitleComponent from "@/components/shared/main-title.component";
import { useUser } from "@/hooks/user.hooks";
import { useTranslation } from "@/translations/clients";
import { IUser, UserInput } from "@/types/user.type";
import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";

const AccountComponent = () => {
  const { t } = useTranslation();
  const { user } = useUser();
  const { register } = useForm<UserInput>({
    defaultValues: {
      name: (user as IUser)?.username || "",
      street: (user as IUser)?.street || "",
      district: (user as IUser)?.district || "",
      city: (user as IUser)?.city || "",
      email: (user as IUser)?.email || "",
      nationality: (user as IUser)?.nationality || "",
      phone: (user as IUser)?.phone || "",
      birthDate: (user as IUser)?.birthDate || "",
      agreeTerms1: false,
      agreeTerms2: false,
    },
    mode: "onChange",
  });

  return (
    <div className="container mt-8 mx-auto">
      <MainTitleComponent title={t("personalData")} />
      <div className=" flex justify-between flex-col h-[92%]">
        <div className="flex items-center  gap-4 sm:flex-row my-4 flex-wrap">
          <div className="md:min-w-[300px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("name"),
                ...register("name"),
              }}
              label={t("name")}
              disabled={true}
              className="md:max-w-[300px] w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[300px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("street"),
                ...register("street"),
              }}
              label={t("street")}
              disabled={true}
              className="md:max-w-[300px] w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[300px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("district"),
                ...register("district"),
              }}
              label={t("district")}
              disabled={true}
              className="md:max-w-[300px] w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[300px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("city"),
                ...register("city"),
              }}
              label={t("city")}
              disabled={true}
              className="md:max-w-[300px] w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[300px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("email"),
                ...register("email"),
              }}
              label={t("email")}
              disabled={true}
              className="md:max-w-[300px] w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[300px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("nationality"),
                ...register("nationality"),
              }}
              label={t("nationality")}
              disabled={true}
              className="md:max-w-[300px] w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[300px] min-w-full">
            <TextInput
              inputProps={{
                placeholder: t("phone"),
                ...register("phone"),
              }}
              label={t("phone")}
              disabled={true}
              className="md:max-w-[300px] w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
          <div className="md:min-w-[300px] min-w-full">
            <TextInput
              inputProps={{
                type: "date",
                placeholder: t("birthDate"),
                ...register("birthDate"),
              }}
              label={t("birthDate")}
              disabled={true}
              className="md:!max-w-[500px] !w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
            />
          </div>
        </div>
        <div className="">
          <div className="flex max-w-[1300px] justify-end p-4 gap-x-4">
            <Button
              className={clsx(
                "ml-3 h-10 !w-[117px] flex-none gap-2 rounded-[4px] bg-black text-white !text-sm"
              )}
              type="submit"
              text={t("edit")}
            />

            <Button
              text={t("cancel")}
              className={clsx(
                "h-10 !w-[117px] gap-2 rounded-[4px] border  !border-gray-300 !bg-beige !text-black !text-sm"
              )}
              //   disabled={!isDirty}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountComponent;
