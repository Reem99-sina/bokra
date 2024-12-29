import { useTranslation } from "@/translations/clients";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { FaLanguage } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

const Language = () => {
  const { t, changeLanguage } = useTranslation();

  return (
    <Menu>
      <MenuHandler>
        <div
          className="cursor-pointer"
          // onClick={() => changeLanguage(lang == "ar" ? "en" : "ar")}
        >
          <GrLanguage color="white" className="text-lg " />
        </div>
      </MenuHandler>
      <MenuList className="z-10 p-0 focus:outline-none">
        <div>
          <MenuItem className="flex items-center ">
            <div
              onClick={() => changeLanguage("ar")}
              className="flex items-center gap-2 p-2  text-xs font-normal text-black hover:underline"
            >
              <FaLanguage />
              <p>{t("ar")}</p>
            </div>
          </MenuItem>
        </div>
        <div>
          <MenuItem>
            <div
              onClick={() => changeLanguage("en")}
              className="flex items-center gap-2 p-2 text-xs font-normal text-black hover:underline"
            >
              <FaLanguage />
              <p>{t("en")}</p>
            </div>
          </MenuItem>
        </div>
      </MenuList>
    </Menu>
  );
};

export default Language;
