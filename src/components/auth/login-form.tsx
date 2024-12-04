"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IUserRequest } from "@/types/user.type";

import { useRouter } from "next/navigation";
import { TextInput } from "../shared/form/text-input.component";
import { useTranslation } from "@/translations/clients";
import { Button } from "../shared/button.component";
import toast from "react-hot-toast";

export const LoginForm: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({});

  const { t, isRTL } = useTranslation();

  const onSubmit: SubmitHandler<IUserRequest> = async () => {
    router.replace("/");
    toast.success("تم تسجيل الدخول بنجاح");
  };

  return (
    <div
      className={`mt-2 flex h-screen w-full items-center justify-center ${
        isRTL ? "pe-56" : "ps-56"
}`}
    >
      <div className="rounded-md border border-[#DCDFE4]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-[568px] flex-col rounded-xl bg-white px-14 pb-6 pt-10"
          autoComplete="off"
        >
          <span className="mb-4 text-center text-2xl font-black text-black">
            {t("login")}
          </span>

          <span className="text-center text-xs font-black leading-5 text-blue-500">
            {t("use_email_or_phone")}
          </span>
          <span className="text-center text-xs font-black leading-5 text-blue-500">
            {t("access_system")}
          </span>

          <div className="my-3" />
          <TextInput
            inputProps={{
              placeholder: t("id_or_email"),
              ...register("email"),
            }}
            errorMessage={errors.email?.message}
          />

          <div className="my-[10px]" />
          <TextInput
            inputProps={{
              type: "password",
              placeholder: t("password"),
              ...register("password"),
            }}
            errorMessage={errors.password?.message}
          />

          <div className="my-2" />

          <div className="flex w-full">
            <Button
              className="w-full justify-center rounded bg-blue-800"
              type="submit"
              text={t("login")}
            />
          </div>

          <div className="mb-1 mt-3 flex w-full items-center justify-evenly text-xs font-bold text-blue-500">
            <span>{t("privacy_settings")}</span>
            <span>|</span>
            <span>{t("terms_conditions")}</span>
          </div>
        </form>
      </div>
    </div>
  );
};
