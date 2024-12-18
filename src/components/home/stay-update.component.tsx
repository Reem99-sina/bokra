import { useTranslation } from "@/translations/clients";
import { Button } from "../shared/button.component";
import { TextInput } from "../shared/form/text-input.component";

const StayUpdateComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div className=" text-black flex flex-col gap-5 items-center justify-center container">
      <h1 className="sm:text-[5rem] text-2xl font-black">stay updated</h1>
      <p className="">{t("desc_stay")}</p>
      <div className="flex gap-x-4 justify-center items-center my-5">
        <TextInput inputProps={{ placeholder: "Email" }} className="py-3" />
        <Button
          text="Sign Up"
          className=" !bg-black !w-auto !text-xs rounded-full !px-7 !py-4"
        />
      </div>
    </div>
  );
};

export default StayUpdateComponent;
