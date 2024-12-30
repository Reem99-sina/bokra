import { useTranslation } from "@/translations/clients";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { CustomArrowProps } from "react-slick";

export const PrevArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  const { lang } = useTranslation();

  return lang == "ar" ? (
    <BsArrowRightSquare
      className={className}
      style={{ ...style }}
      onClick={onClick}
      color="black"
      aria-label="Previous Slide"
    />
  ) : (
    <BsArrowLeftSquare
      className={className}
      style={{ ...style }}
      onClick={onClick}
      color="black"
      aria-label="Previous Slide"
    />
  );
};

export const NextArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  const { lang } = useTranslation();
  
  return lang == "ar" ? (
    <BsArrowLeftSquare
      className={className}
      style={{ ...style }}
      onClick={onClick}
      color="black"
      aria-label="Previous Slide"
    />
  ) : (
    <BsArrowRightSquare
      className={className}
      style={{ ...style }}
      onClick={onClick}
      color="black"
      aria-label="Previous Slide"
    />
  );
};
