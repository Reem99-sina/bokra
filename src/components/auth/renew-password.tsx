"use client";

import { useTranslation } from "@/translations/clients";
import { RenewpasswordRequest } from "@/types/user.type";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "../shared/form/text-input.component";
import { Button } from "../shared/button.component";
import toast from "react-hot-toast";
import Image from "next/image";

const RenewPasswordForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RenewpasswordRequest>({});
  const password = watch("password");

  const { t, lang } = useTranslation();
  const onSubmit: SubmitHandler<RenewpasswordRequest> = () => {
    router.replace("/dashboard");
    toast.success("login successfully");
  };

  return (
    <div className={`mt-2 flex h-screen w-full items-center justify-center `}>
      <div className="rounded-md border border-[#DCDFE4]">
        <div
          // onSubmit={handleSubmit(onSubmit)}
          className="flex   max-w-[568px] sm:w-[568px] flex-col rounded-xl bg-white "
          // autoComplete="off"
        >
          <div className="flex items-center justify-center  w-full pb-4 pt-5 bg-black rounded-t-md">
            <Image
              src={
                lang == "ar" ? "/bokra-gray-arabic.png" : "/bokra-gray-eng.png"
              }
              width={100}
              height={90}
              alt="logo"
            />
          </div>
          <div className="h-[1px] w-full bg-grayLight"></div>
          <div className="px-14 pb-6 pt-6 flex flex-col">
            <span className="mb-4 text-center text-2xl font-black text-black">
              {t("renew")}
            </span>
            <div className="flex items-center justify-center text-center">
              <span className="w-[50%] text-center text-xs font-black leading-5 text-gray-500">
                {t("descriptionRenew")}
              </span>
            </div>
            <div className="my-3" />
            <TextInput
              inputProps={{
                type: "password",
                placeholder: t("password"),
                ...register("password", {
                  required: { value: true, message: t("errorPasswordNotEmty") },
                  minLength: {
                    value: 8,
                    message: t("errorPasswordPattern"),
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                    message: t("errorPasswordPattern"),
                  },
                }),
              }}
              className="!font-normal !text-black"
              errorMessage={errors.password?.message}
            />
            <div className="mb-3" />
            <TextInput
              inputProps={{
                type: "password",
                placeholder: t("repeatPassword"),
                ...register("repeatPassword", {
                  validate: (value) =>
                    value != password ? t("errorRepeatPassword") : true,
                  required: {
                    value: true,
                    message: t("errorRepeatRequiredPassword"),
                  },
                }),
              }}
              className="!font-normal !text-black"
              errorMessage={errors.repeatPassword?.message}
            />
            <div className="my-3 flex flex-col gap-y-3">
              <div className="flex w-full">
                <Button
                  className="w-full justify-center rounded bg-black  !px-3 !py-2"
                  type="submit"
                  text={t("renew")}
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewPasswordForm;
