"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IUserRequest } from "@/types/user.type";
import { useRouter } from "next/navigation";
import { TextInput } from "../shared/form/text-input.component";
import { useTranslation } from "@/translations/clients";
import { Button } from "../shared/button.component";
import { toast } from "@/lib/toast";
import Link from "next/link";
import { FacebookIcon, GoogleIcon } from "@/icon";
import { validateInput } from "@/utils/validate.userName";
import { useAuth } from "@/hooks/auth.hook";
import { useLoginMutation } from "@/services/profile.service";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({});
  const { mutateAsync } = useLoginMutation();

  const { t } = useTranslation();
  const { authenticate } = useAuth();

  const onSubmit: SubmitHandler<IUserRequest> = async (data) => {
    try {
      const response = await mutateAsync({
        email: data.email?.trim()?.toLowerCase(),
        password: data.password,
      });

      if (response.result.token) {
        router.replace("/");

        authenticate(response.result);
        toast.success(t("youHaveSuccessfullyLoggedIn"));
      } else {
        toast.error("حدث خطأ ما ! ");
      }
    } catch (errors) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore

      const errorMessage = errors.message || t("somethingWentWrong");
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex  w-full flex-col">
      <div className="h-[1px] w-full bg-grayLight"></div>
      <div className="px-14 pb-6 pt-6 flex flex-col">
        <p className="mb-4 text-center text-2xl font-black text-black justify-self-center w-full">
          {t("login")}
        </p>

        <span className="text-center text-xs font-black leading-5 text-gray-500">
          {t("use_email_or_user_name")}
        </span>
        <span className="text-center text-xs font-black leading-5 text-gray-500">
          {t("access_system")}
        </span>

        <div className="my-3" />
        <TextInput
          inputProps={{
            placeholder: t("user_name_or_email"),
            ...register("email", {
              required: {
                value: true,
                message: t("inputRequired", {
                  inputName: t("user_name_or_email"),
                }),
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
          errorMessage={errors.email?.message}
          className="!font-normal !text-black"
        />

        <div className="my-2" />

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
            }),
          }}
          errorMessage={errors.password?.message}
          className="!font-normal !text-black"
        />
        <div className="my-3" />
        <div className="mb-2 mt-2 flex flex-col gap-y-3">
          <div className="flex w-full">
            <Button
              className="w-full justify-center rounded bg-black !px-3 !py-2 !font-bold"
              type="submit"
              text={t("login")}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
          <div className="flex  items-center justify-between">
            <Link
              className="text-center text-gray-500 underline my-2 text-xs"
              href={"/auth/register"}
            >
              {t("dontHaveAccount")}
            </Link>
            <Link
              className="text-center text-gray-500 underline my-2 text-xs"
              href={"/auth/forget-password"}
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
              onClick={() => {}}
            />
          </div>
          <div className="flex w-full">
            <Button
              className="w-full justify-center rounded bg-white border !text-black !text-base !px-3 !py-2 !font-bold"
              type="submit"
              startIcon={<GoogleIcon className="mx-3" />}
              text={t("loginwithGoogle")}
              onClick={() => {
                window.location.href =
                  process.env.NEXT_PUBLIC_BASE_URL + "/auth/google/login";
              }}
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
  );
};
