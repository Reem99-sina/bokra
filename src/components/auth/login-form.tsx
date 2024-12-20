"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IUserRequest } from "@/types/user.type";
import { useRouter } from "next/navigation";
import { TextInput } from "../shared/form/text-input.component";
import { useTranslation } from "@/translations/clients";
import { Button } from "../shared/button.component";
import toast from "react-hot-toast";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FacebookIcon, GoogleIcon } from "@/icon";
// import { useLoginMutation } from "@/services/profile.service";
import { useUser } from "@/hooks/user.hooks";
import Image from "next/image";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { updateUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({});

  const { t } = useTranslation();

  const onSubmit: SubmitHandler<IUserRequest> = async (data) => {
    updateUser(data);
    router.replace("/");
    toast.success("login successfully");
  };

  return (
    <div className={`mt-2 flex h-screen w-full items-center justify-center `}>
      <div className="rounded-md border border-[#DCDFE4]">
        <div
          // onSubmit={handleSubmit(onSubmit)}
          className="flex min-w-[568px] flex-col rounded-xl bg-white "
          // autoComplete="off"
        >
          <div className="flex items-center justify-center  w-full ">
            <Image src={"/logo_black.jpeg"} width={100} height={90} alt="logo" />
          </div>
          <div className="h-[1px] w-full bg-grayLight"></div>
          <div className="px-14 pb-6 pt-6 flex flex-col">
            <p className="mb-4 text-center text-2xl font-black text-beige justify-self-center w-full">
              {t("login")}
            </p>

            <span className="text-center text-xs font-black leading-5 text-gray-500">
              {t("use_email_or_phone")}
            </span>
            <span className="text-center text-xs font-black leading-5 text-gray-500">
              {t("access_system")}
            </span>

            <div className="my-3" />
            <TextInput
              inputProps={{
                placeholder: t("id_or_email"),
                ...register("email"),
              }}
              errorMessage={errors.email?.message}
              className="!font-normal !text-black"
            />

            <div className="my-[10px]" />
            <TextInput
              inputProps={{
                type: "password",
                placeholder: t("password"),
                ...register("password"),
              }}
              errorMessage={errors.password?.message}
              className="!font-normal !text-black"
            />
            <div className="my-2 flex flex-col gap-y-3">
              <div className="flex w-full">
                <Button
                  className="w-full justify-center rounded bg-black"
                  type="submit"
                  text={t("login")}
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
              <div className="flex  items-center justify-between">
                <Link
                  className="text-center text-gray-500 underline my-2 text-xs"
                  href={"/register"}
                >
                  {t("dontHaveAccount")}
                </Link>
                <Link
                  className="text-center text-gray-500 underline my-2 text-xs"
                  href={"/forget-password"}
                >
                  {t("forgetPassword")}
                </Link>
              </div>
              <div className="flex w-full">
                <Button
                  className="w-full justify-center rounded bg-white border !text-black !text-base !px-3 !py-2 !font-bold"
                  type="submit"
                  startIcon={<FacebookIcon className="mx-3" />}
                  text={t("loginwithfacebook")}
                  onClick={() => signIn("facebook")}
                />
              </div>
              <div className="flex w-full">
                <Button
                  className="w-full justify-center rounded bg-white border !text-black !text-base !px-3 !py-2 !font-bold"
                  type="submit"
                  startIcon={<GoogleIcon className="mx-3" />}
                  text={t("loginwithGoogle")}
                  onClick={() => signIn("google")}
                />
              </div>
            </div>

            <div className="mb-1 mt-3 flex w-full items-center justify-evenly text-xs font-bold text-gray-500">
              <span>{t("privacy_settings")}</span>
              <span>|</span>
              <span>{t("terms_conditions")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
