import { useTranslation } from "@/translations/clients";
import { Button } from "../shared/button.component";
import { TextInput } from "../shared/form/text-input.component";
import { useRouter } from "next/navigation";

const StayUpdateComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className=" text-black flex flex-col gap-5 items-center justify-center container mx-auto">
      <h1 className="sm:text-[3rem] text-xl font-black">{t("stay_updated")}</h1>
      <p className="">{t("desc_stay")}</p>
      <div className="flex gap-x-4 justify-center items-center my-5">
        <TextInput
          inputProps={{ placeholder: "Email" }}
          className="py-3 !rounded-full !px-3"
        />
        <Button
          text={t("register")}
          className=" !bg-black !w-auto !text-xs rounded-full !px-7 !py-4"
          onClick={() => router.replace("/auth/register")}
        />
      </div>
    </div>
  );
};

export default StayUpdateComponent;
