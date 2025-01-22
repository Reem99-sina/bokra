"use client";

import { useTranslation } from "@/translations/clients";
import { Button } from "@/components/shared/button.component";
import { TextInput } from "@/components/shared/form/text-input.component";
import { useForm, SubmitHandler } from "react-hook-form";
import { RenewpasswordRequest } from "@/types/user.type";
import { useFetch } from "@/hooks/fetch.hooks";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { OverflowLoading } from "@/components/shared/overflow-loading";
import { toast } from "@/lib/toast";

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { t, lang } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { api } = useFetch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RenewpasswordRequest>();

  const { mutate } = useMutation<
    { message: string },
    { message: string },
    { newPassword: string; confirmPassword: string }
  >({
    mutationFn: (data) =>
      api.post("/auth/reset-password", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      }),
  });

  const onSubmit: SubmitHandler<RenewpasswordRequest> = (data) => {
    setIsLoading(true);
    mutate(
      {
        confirmPassword: data.repeatPassword,
        newPassword: data.password,
      },
      {
        onSuccess: () => {
          setIsLoading(false);
          toast.success(t("passwordResetSuccess"));
          router.push("/login");
        },
        onError: (error) => {
          setIsLoading(false);
          toast.error(error.message || t("somethingWentWrong"));
        },
      }
    );
  };

  if (!token) {
    router.push("/login");

    return null;
  }

  return (
    <div className="my-4 flex min-h-screen h-auto w-full items-center justify-center">
      <div className="rounded-md border border-[#DCDFE4]">
        <div className="flex max-w-[568px] sm:w-[568px] flex-col rounded-xl bg-white">
          <div className="flex items-center justify-center w-full py-4 bg-black rounded-t-md">
            <Image
              src={
                lang == "ar" ? "/bokra-gray-arabic.png" : "/bokra-gray-eng.png"
              }
              width={100}
              height={90}
              alt="logo"
            />
          </div>

          <div className="px-14 pb-6 pt-6 flex flex-col">
            <span className="mb-4 text-center text-2xl font-black text-black">
              {t("resetPassword")}
            </span>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-y-3 my-4">
                <TextInput
                  inputProps={{
                    placeholder: t("newPassword"),
                    type: "password",
                    ...register("password", {
                      required: t("inputRequired", {
                        inputName: t("newPassword"),
                      }),
                    }),
                  }}
                  errorMessage={errors.password?.message}
                />

                <TextInput
                  inputProps={{
                    placeholder: t("repeatPassword"),
                    type: "password",
                    ...register("repeatPassword", {
                      required: t("inputRequired", {
                        inputName: t("repeatPassword"),
                      }),
                      validate: (value) =>
                        value === getValues("password") ||
                        t("passwordsMustMatch"),
                    }),
                  }}
                  errorMessage={errors.repeatPassword?.message}
                />
              </div>

              <div className="mb-2 flex flex-col gap-y-3">
                <Button
                  className="w-full justify-center rounded bg-black !px-3 !py-2 !font-bold"
                  type="submit"
                  text={t("resetPassword")}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {isLoading && <OverflowLoading />}
    </div>
  );
}
