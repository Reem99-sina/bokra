import { useTranslation } from "@/translations/clients";
import { TextInput } from "./form/text-input.component";
import { CiSearch } from "react-icons/ci";
import { Button } from "./button.component";
import clsx from "clsx";

const SearchComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <div className=" flex w-full flex-row">
        <div className="relative w-full">
          <TextInput
            inputProps={{ placeholder: t("search"), className: "!ps-0" }}
            className="rounded  px-12"
          />
        </div>
        <Button
          className={clsx(
            "absolute my-1  flex h-8  items-center  justify-center border-e border-strokeDark !p-0 !w-10 "
          )}
          text=""
          type="button"
          startIcon={<CiSearch color="black" />}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
