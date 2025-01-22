"use client";

import { useTranslation } from "@/translations/clients";
import { IUserForgetRequest } from "@/types/user.type";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "../shared/form/text-input.component";
import { Button } from "../shared/button.component";
import { toast } from "@/lib/toast";
import Link from "next/link";
import Image from "next/image";

const ForgetPasswordForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForgetRequest>({});

  const { t, lang } = useTranslation();
  const onSubmit: SubmitHandler<IUserForgetRequest> = () => {
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
              {t("forget")}
            </span>
            <div className="flex items-center justify-center text-center">
              <span className="w-[50%] text-center text-xs font-black leading-5 text-gray-500">
                {t("descriptionForget")}
              </span>
            </div>
            <div className="my-3" />
            <TextInput
              inputProps={{
                placeholder: t("id_or_email"),
                ...register("email"),
              }}
              errorMessage={errors.email?.message}
              className="!font-normal"
            />
            <div className="my-2 flex flex-col gap-y-3">
              <div className="flex w-full">
                <Button
                  className="w-full justify-center rounded bg-black  !px-3 !py-2"
                  type="submit"
                  text={t("resetPassword")}
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
              <div className="flex  items-center justify-center">
                <Link
                  className="my-2 text-center  text-sm text-black"
                  href={"/login"}
                >
                  {t("login")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
