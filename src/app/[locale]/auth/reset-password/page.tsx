"use client";

import { useTranslation } from "@/translations/clients";
import { Button } from "@/components/shared/button.component";
import { TextInput } from "@/components/shared/form/text-input.component";
import { useForm, SubmitHandler } from "react-hook-form";
import { RenewpasswordRequest } from "@/types/user.type";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { OverflowLoading } from "@/components/shared/overflow-loading";
import { toast } from "@/lib/toast";
import { useResetPasswordMutation } from "@/services/profile.service";

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RenewpasswordRequest>();

  const { mutateAsync } = useResetPasswordMutation(token as string);

  const onSubmit: SubmitHandler<RenewpasswordRequest> = async (data) => {
    if (!token) return;

    setIsLoading(true);
    try {
      await mutateAsync({
        newPassword: data.password,
        confirmNewPassword: data.repeatPassword,
      });
      toast.success(t("passwordChangedSuccessfully"));
      router.push("/auth/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || t("somethingWentWrong");
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  if (!token) {
    router.push("/auth/login");

    return null;
  }

  return (
    <div className="w-full">
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
                    value != getValues("password")
                      ? t("errorRepeatPassword")
                      : true,
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
      {isLoading && <OverflowLoading />}
    </div>
  );
}
