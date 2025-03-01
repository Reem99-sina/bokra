"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IUserRegisterRequest } from "@/types/user.type";
import { useRouter } from "next/navigation";
import { TextInput } from "../shared/form/text-input.component";
import { useTranslation } from "@/translations/clients";
import { Button } from "../shared/button.component";
import { toast } from "@/lib/toast";

import Link from "next/link";
import PhoneNumber from "../shared/phone-number";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/services/profile.service";
import { UploadFilesInput } from "../shared/upload-files-input.component";
import { UploadFilesVariants } from "@/types/file.type";
import { Select } from "../shared/select.component";
import { useAuth } from "@/hooks/auth.hook";
import { useState } from "react";
import { OverflowLoading } from "../shared/overflow-loading";
import { Checkbox } from "@material-tailwind/react";
import clsx from "clsx";
import ErrorInputComponent from "../shared/form/error-input.component";
import { SocialButtons } from "./social-buttons";

export const RegisterForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<IUserRegisterRequest>({
    defaultValues: {
      // industryField: "businessOwner",
    },
  });
  const { authenticate } = useAuth();
  const [termsCheckedState, setTermsCheckedState] = useState<{
    checked: boolean;
    error: string | null;
  }>({
    checked: false,
    error: null,
  });

  const { t } = useTranslation();
  const { mutate } = useRegisterMutation();
  const { mutateAsync: login } = useLoginMutation();

  const onSubmit: SubmitHandler<IUserRegisterRequest> = async (data) => {
    if (!termsCheckedState.checked) {
      setTermsCheckedState({ checked: false, error: t("termsError") });

      return;
    }
    setIsLoading(true);
    mutate(
      { ...data, phoneNumber: `+${data.phoneNumber}` },
      {
        onSuccess: async () => {
          const res = await login({
            email: data.email,
            password: data.password,
          });
          setIsLoading(false);
          authenticate(res.result);
          toast.success(t("registerSuccessfully"));
          router.replace("/");
        },
        onError: (error: { message: string }) => {
          setIsLoading(false);
          toast.error(error.message || "Something went wrong");
        },
      }
    );
  };

  const industryFieldOptions = [
    { label: t("businessOwner"), value: "businessOwner" },
  ];

  return (
    <div className="flex  w-full flex-col">
      <div className="px-14 pb-6 pt-6 flex flex-col">
        <span className="mb-4 text-center text-2xl font-black text-black">
          {t("register")}
        </span>

        <span className="text-center text-xs font-normal leading-5 text-gray-500">
          {t("use_email_or_user_name")}
        </span>
        <span className="text-center text-xs font-normal leading-5 text-gray-500">
          {t("access_system")}
        </span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-3 my-4">
            <TextInput
              inputProps={{
                placeholder: t("fullname"),
                ...register("fullName", {
                  required: {
                    value: true,
                    message: t("inputRequired", {
                      inputName: t("fullname"),
                    }),
                  },
                  minLength: { value: 2, message: "" },
                  maxLength: { value: 50, message: "" },
                }),
              }}
              className="!font-normal !text-black"
              errorMessage={errors.fullName?.message}
            />

            <TextInput
              inputProps={{
                placeholder: t("email"),
                ...register("email", {
                  required: {
                    value: true,
                    message: t("inputRequired", {
                      inputName: t("email"),
                    }),
                  },
                }),
              }}
              className="!font-normal !text-black"
              errorMessage={errors.email?.message}
            />

            <TextInput
              inputProps={{
                type: "password",
                placeholder: t("password"),
                ...register("password", {
                  required: {
                    value: true,
                    message: t("inputRequired", {
                      inputName: t("password"),
                    }),
                  },
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

            <TextInput
              inputProps={{
                type: "password",
                placeholder: t("repeatPassword"),
                ...register("repeatePassword", {
                  validate: (value) =>
                    value != getValues("password")
                      ? t("errorRepeatPassword")
                      : true,
                  required: {
                    value: true,
                    message: t("inputRequired", {
                      inputName: t("repeatPassword"),
                    }),
                  },
                }),
              }}
              className="!font-normal !text-black"
              errorMessage={errors.repeatePassword?.message}
            />

            <Controller
              control={control}
              name="phoneNumber"
              rules={{
                required: t("inputRequired", {
                  inputName: t("phoneNum"),
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

            <Controller
              control={control}
              name="industryField"
              rules={{
                required: t("inputRequired", {
                  inputName: t("industryField"),
                }),
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <Select
                    options={industryFieldOptions}
                    onChange={onChange}
                    defaultValue={
                      value
                        ? {
                            label:
                              industryFieldOptions?.find(
                                (item) => item.value === `${value}`
                              )?.label || "",
                            value: `${value}`,
                          }
                        : undefined
                    }
                    placeholder={t("industryField")}
                    styleCustom={{ width: "full" }}
                    errorMessage={errors?.industryField?.message}
                  />
                );
              }}
            />

            <Controller
              control={control}
              name="file"
              rules={{
                required: t("inputRequired", {
                  inputName: t("supportFiles"),
                }),
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <UploadFilesInput
                    id="file"
                    value={value ? [value] : []}
                    onChange={(files) => onChange(files[0])}
                    variant={UploadFilesVariants.INPUT}
                    isMultiple={false}
                    errorMessage={error?.message}
                  />
                );
              }}
            />

            <div
              className=" flex flex-wrap gap-x-1 items-center"
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
                  setTermsCheckedState({
                    checked: e.target.checked,
                    error: null,
                  });
                }}
              />
              <h3
                className={clsx(
                  "text-black font-normal text-xs cursor-pointer"
                )}
              >
                {t("terms_and_conditions")}
              </h3>
              <div>
                {termsCheckedState.error && (
                  <ErrorInputComponent errorMessage={termsCheckedState.error} />
                )}
              </div>
            </div>
          </div>

          <div className="mb-2 flex flex-col gap-y-3">
            <div className="flex w-full">
              <Button
                className={
                  "w-full justify-center rounded bg-black !px-3 !py-2 !font-bold "
                }
                type="submit"
                text={t("register")}
                disabled={!!termsCheckedState.error}
              />
            </div>
            <Link
              className="text-center text-gray-500 underline"
              href={"/auth/login"}
            >
              {t("alreadyHaveAccount")}
            </Link>

            <SocialButtons />
          </div>
        </form>

        <div className="mb-1 mt-3 flex w-full items-center justify-evenly text-xs font-bold text-gray-500">
          <span>{t("privacy_settings")}</span>
          <span>|</span>
          <span>{t("terms_conditions")}</span>
        </div>
      </div>
      {isLoading && <OverflowLoading />}
    </div>
  );
};
