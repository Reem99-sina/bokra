import { useTranslation } from "@/translations/clients";
import { TextInput } from "./form/text-input.component";
import { CiSearch } from "react-icons/ci";

const SearchComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3 ">
      <div className="w-full">
        <TextInput inputProps={{ placeholder: t("search") }} />
      </div>
      <div className="bg-beige p-3 rounded">
        <CiSearch color="black" />
      </div>
    </div>
  );
};

export default SearchComponent;
