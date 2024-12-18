import { useTranslation } from "@/translations/clients";
import { TextInput } from "../shared/form/text-input.component";
import { useForm } from "react-hook-form";
import { Checkbox } from "@material-tailwind/react";

const UserOfLoan = () => {
  const { t } = useTranslation();
  const formdata = useForm();
  
  return (
    <div className="flex flex-col text-black gap-3">
      <h3 className="font-bold">{t("invoice_information")}</h3>
      <div className="min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("name"),
            ...formdata.register("name"),
          }}
          label={t("name")}
          
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div className="min-w-full">
        <TextInput
          inputProps={{
            placeholder: t("address"),
            ...formdata.register("address"),
          }}
          label={t("address")}
          className=" w-full !text-xs !font-normal !text-gray-500 !py-0 !min-h-[40px]"
        />
      </div>
      <div className="flex items-center gap-3">
        <Checkbox crossOrigin={undefined} />
        <p>{t("checkInfoFirst")}</p>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox crossOrigin={undefined} />
        <p>{t("checkInfoSecond")}</p>
      </div>
    </div>
  );
};

export default UserOfLoan;
