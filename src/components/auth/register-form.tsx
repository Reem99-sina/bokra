"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IUserRegisterRequest } from "@/types/user.type";
import { useRouter } from "next/navigation";
import { TextInput } from "../shared/form/text-input.component";
import { useTranslation } from "@/translations/clients";
import { Button } from "../shared/button.component";
import toast from "react-hot-toast";
import { FacebookIcon, GoogleIcon } from "@/icon";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useUser } from "@/hooks/user.hooks";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import { validateInput } from "@/utils/validate.userName";
import ErrorInputComponent from "../shared/form/error-input.component";

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const { updateUser } = useUser();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IUserRegisterRequest>({});
  const password = watch("password");
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<IUserRegisterRequest> = async (data) => {
    updateUser(data);
    router.replace("/login");
    toast.success("register successfully");
  };

  return (
    <div
      className={`my-4 flex min-h-screen h-auto w-full items-center justify-center `}
    >
      <div className="rounded-md border border-[#DCDFE4]">
        <div className="flex w-[568px] flex-col rounded-xl bg-white">
          <div className="flex items-center justify-center  w-full ">
            <Image
              src={"/logo_black.jpeg"}
              width={100}
              height={90}
              alt="logo"
            />
          </div>
          <div className="h-[1px] w-full bg-grayLight"></div>
          <div className="px-14 pb-6 pt-6 flex flex-col">
            <span className="mb-4 text-center text-2xl font-black text-beige">
              {t("register")}
            </span>

            <span className="text-center text-xs font-black leading-5 text-gray-500">
              {t("use_email_or_phone")}
            </span>
            <span className="text-center text-xs font-black leading-5 text-gray-500">
              {t("access_system")}
            </span>
            <div className="my-1" />
            <TextInput
              inputProps={{
                placeholder: t("fullname"),
                ...register("fullName", {
                  required: { value: true, message: t("errorFullName") },
                  minLength:{value:2,message:""},
                  maxLength:{value:50,message:""}
                }),
              }}
              className="!font-normal !text-black"
              errorMessage={errors.fullName?.message}
            />
            <div className="my-1" />
            <TextInput
              inputProps={{
                placeholder: t("id_or_email"),
                ...register("email", {
                  required: {
                    value: true,
                    message: t("errorLoginUserName"),
                  },
                  validate: {
                    value: (value) =>
                      validateInput({
                        value: value,
                        message: t("errorLoginemail"),
                      }),
                  },
                }),
              }}
              className="!font-normal !text-black"
              errorMessage={errors.email?.message}
            />
            <div className="my-1" />
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
            <div className="my-1" />
            <TextInput
              inputProps={{
                type: "password",
                placeholder: t("repeatPassword"),
                ...register("repeatPassword", {
                  validate: (value) =>
                    value != password ? t("errorRepeatPassword") :true,
                  required: {
                    value: true,
                    message: t("errorRepeatRequiredPassword"),
                  },
                }),
              }}
              className="!font-normal !text-black"
              errorMessage={errors.repeatPassword?.message}
            />
            <div className="my-1" />
            <Controller
              control={control}
              name="phoneNumber"
              rules={{
                required: t("errorPhoneNumber"),
                pattern:{
                  value:/^(05\d{8}|9665\d{8})$/,
                  message:t("errorPhoneNumberValid")
                }
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <PhoneInput
                      country={""}
                      value={value}
                      onChange={(phone) => onChange(phone)}
                      specialLabel={""}
                      placeholder={t("phoneNum")}
                      inputStyle={{
                        width: "100%",
                        padding: "7px 10px",
                        borderRadius: "0.375rem",
                        margin: "8px 0px",
                        color: "black",
                        fontSize:"14px",
                        border: errors?.phoneNumber?.message ?"1px solid #ff0000":"1px solid #d1d5db",
                      }}
                    />
                    {errors?.phoneNumber?.message && (
                      <ErrorInputComponent
                        errorMessage={errors?.phoneNumber?.message}
                      />
                    )}
                  </>
                );
              }}
            />
            <div className="my-2 flex flex-col gap-y-3">
              <div className="flex w-full">
                <Button
                  className="w-full justify-center rounded bg-black !px-3 !py-2 !font-bold"
                  type="submit"
                  text={t("register")}
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
              <Link
                className="text-center text-gray-500 underline"
                href={"/login"}
              >
                {t("alreadyHaveAccount")}
              </Link>
              <div className="flex w-full">
                <Button
                  className="w-full justify-center rounded bg-white border !text-black !text-base !px-3 !py-2 !font-bold"
                  type="submit"
                  startIcon={<FacebookIcon className="mx-3" />}
                  text={t("registerwithfacebook")}
                  onClick={() => signIn("facebook")}
                />
              </div>
              <div className="flex w-full">
                <Button
                  className="w-full justify-center rounded bg-white border !text-black !text-base !px-3 !py-2 !font-bold"
                  type="submit"
                  startIcon={<GoogleIcon className="mx-3" />}
                  text={t("registerwithGoogle")}
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
