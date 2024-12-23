
import { useTranslation } from "@/translations/clients";
import TitleComponent from "../shared/title.component";


const AboutComponent = () => {
  const { t } = useTranslation();
 
  return (
    <div className="container justify-center items-center flex  flex-col gap-4  mx-auto">
      <TitleComponent title={t("howWork")} />
      <p className="text-gray-500 md:w-[50%] w-full text-center">
        {t("howWorkDesc")}
      </p>
      
    </div>
  );
};

export default AboutComponent;
