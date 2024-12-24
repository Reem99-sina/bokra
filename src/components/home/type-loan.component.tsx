
import AboutCardComponent from "./about-card.component";
import { LiaShareAltSolid } from "react-icons/lia";
import { MdAgriculture, MdOutlineStrikethroughS } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/translations/clients";
import TitleComponent from "../shared/title.component";

const TypeLoanComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  function routerLink() {
    router.push("/account/personal-loan/add");
  }
  
  return (
    <div className="container mx-auto">
      <TitleComponent title={t("ourSolution")} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  my-6  sm:flex-nowrap flex-wrap mx-auto">
        <AboutCardComponent
          head={"Partnership"}
          desc={t("desc_first_about")}
          buttonText={t("apply_now")}
          icon={<LiaShareAltSolid color="black" size={"30"} />}
          onClick={routerLink}
        />
        <AboutCardComponent
          head={"Strike"}
          desc={t("desc_find")}
          buttonText={t("apply_now")}
          icon={<MdOutlineStrikethroughS color="black" size={"30"} />}
          onClick={routerLink}
        />
        <AboutCardComponent
          head={"Rent"}
          desc={t("desc_find")}
          buttonText={t("apply_now")}
          icon={<FaFileSignature color="black" size={"30"} />}
          onClick={routerLink}
        />
        <AboutCardComponent
          head={"Profitable"}
          desc={t("desc_find")}
          buttonText={t("apply_now")}
          icon={<LuChartNoAxesCombined color="black" size={"30"} />}
          onClick={routerLink}
        />
        <AboutCardComponent
          head={"Ladder"}
          desc={t("desc_find")}
          buttonText={t("apply_now")}
          icon={<MdAgriculture color="black" size={"30"} />}
          onClick={routerLink}
        />
      </div>
    </div>
  );
};

export default TypeLoanComponent;
