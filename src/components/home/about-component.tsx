import { IoTelescopeSharp } from "react-icons/io5";
import AboutCardComponent from "./about-card.component";
import { AiOutlineFund } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { useTranslation } from "@/translations/clients";

const AboutComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container justify-center items-center flex  flex-col gap-4 ">
      <h3 className="text-black ">{t("howWork")}</h3>
      <p className="text-gray-500">{t("howWorkDesc")}</p>
      <div className="flex gap-4  justify-center  my-6  sm:flex-nowrap flex-wrap mx-auto">
        <AboutCardComponent
          head={t("head_first_about")}
          desc={t("desc_first_about")}
          buttonText={t("read_more")}
          icon={<FaRegLightbulb color="black" size={"30"} />}
        />
        <AboutCardComponent
          head={t("find_what")}
          desc={t("desc_find")}
          buttonText={t("read_more")}
          icon={<IoTelescopeSharp color="black" size={"30"} />}
        />
        <AboutCardComponent
          head={t("expore_funding")}
          desc={t("export_desc")}
          buttonText={t("read_more")}
          icon={<AiOutlineFund color="black" size={"30"} />}
        />
      </div>
    </div>
  );
};

export default AboutComponent;
