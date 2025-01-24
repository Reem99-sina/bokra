"use client";

import { useTranslation } from "@/translations/clients";
import { IUserForgetRequest } from "@/types/user.type";
import { useForm } from "react-hook-form";
import { TextInput } from "../shared/form/text-input.component";
import { Button } from "../shared/button.component";
import { toast } from "@/lib/toast";
import Link from "next/link";
import { useForgetPasswordMutation } from "@/services/profile.service";

const ForgetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForgetRequest>({});

  const { t } = useTranslation();

  const { mutateAsync } = useForgetPasswordMutation();

  const onSubmit = async (data: IUserForgetRequest) => {
    try {
      const response = await mutateAsync({
        email: data.email,
      });

      toast.success(response?.message || t("passwordResetLinkSent"));
    } catch (errors) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const errorMessage = errors.message || "حدث خطأ أثناء إرسال البريد.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex   max-w-[568px] sm:w-[568px] flex-col">
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
            placeholder: t("user_name_or_email"),
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
              href={"/auth/login"}
            >
              {t("login")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
