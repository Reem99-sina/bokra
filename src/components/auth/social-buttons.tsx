import { FacebookIcon, GoogleIcon } from "@/icon";
import { Button } from "../shared/button.component";
import { useTranslation } from "@/translations/clients";

export const SocialButtons = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full">
        <Button
          className="w-full justify-center rounded bg-white border !text-black !text-base !px-3 !py-2 !font-bold"
          startIcon={<FacebookIcon className="mx-3" />}
          text={t("loginwithfacebook")}
          onClick={() => {}}
        />
      </div>
      <div className="flex w-full">
        <Button
          className="w-full justify-center rounded bg-white border !text-black !text-base !px-3 !py-2 !font-bold"
          startIcon={<GoogleIcon className="mx-3" />}
          text={t("loginwithGoogle")}
          onClick={() => {
            window.location.href =
              process.env.NEXT_PUBLIC_BASE_URL + "/auth/google/login";
          }}
        />
      </div>
    </div>
  );
};
