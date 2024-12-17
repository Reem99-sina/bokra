import vision from "@/icon/vision.png";
import AboutCardComponent from "./about-card.component";
import { ImTarget } from "react-icons/im";
import { useTranslation } from "@/translations/clients";
import ScrollAnimationExample from "../scroll.compnent";
import Image from "next/image";

const AboutComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container justify-center items-center flex  flex-col gap-4 ">
      <h3 className="text-black ">{t("howWork")}</h3>
      <p className="text-gray-500 md:w-[50%] w-full text-center">{t("howWorkDesc")}</p>
      <ScrollAnimationExample>
      <div className="flex gap-4  justify-center  my-6  sm:flex-nowrap flex-wrap mx-auto">
        <AboutCardComponent
          head={t("head_first_about")}
          desc={t("desc_first_about")}
          buttonText={t("read_more")}
          icon={<ImTarget color="black" size={"30"} />}
        />
        <AboutCardComponent
          head={t("find_what")}
          desc={t("desc_find")}
          buttonText={t("read_more")}
          icon={<Image src={vision} width={40} height={20} alt=""className="object-cover" />}
        />
       
      </div>
      </ScrollAnimationExample>
    </div>
  );
};

export default AboutComponent;
