import AboutCardComponent from "./about-card.component";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/translations/clients";
import TitleComponent from "../shared/title.component";
import Slider, { Settings } from "react-slick";
// import { RefObject, useRef } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { DataTypeLoans } from "@/utils/data.util";

const TypeLoanComponent = () => {
  const { t, lang } = useTranslation();
  const loans = DataTypeLoans();
  // const sliderRef: RefObject<Slider> = useRef(null);
  const router = useRouter();
  function routerLink() {
    router.push("/account/personal-loan/add");
  }
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    centerPadding: "0",
    prevArrow:
      lang == "ar" ? (
        <BsArrowRightSquare color="black" />
      ) : (
        <BsArrowLeftSquare color="black" />
      ),
    nextArrow:
      lang == "ar" ? (
        <BsArrowLeftSquare color="black" />
      ) : (
        <BsArrowRightSquare color="black" />
      ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // For devices with screen width <= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // For devices with screen width <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <TitleComponent title={t("ourSolution")} />
      <div className="my-6">
        <Slider {...settings} className="mx-6 flex items-center">
          {/* @ts-expect-error unknown error */}
          {loans?.map((ele) => {
            const Icon = ele?.icon;

            return (
              <div key={ele?.head}>
                <AboutCardComponent
                  head={ele?.head}
                  desc={ele?.desc}
                  buttonText={t("apply_now")}
                  icon={<Icon color="black" size={"30"} />}
                  onClick={routerLink}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TypeLoanComponent;
