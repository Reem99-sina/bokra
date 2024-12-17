import { ReactNode } from "react";
import { Button } from "../shared/button.component";
import CardDetail from "../shared/card-detail";

const AboutCardComponent = ({
  icon,
  head,
  desc,
  buttonText,
}: {
  icon: ReactNode;
  head: string;
  desc: string;
  buttonText: string;
}) => {
  return (
    <CardDetail className="text-md text-black items-center shadow-lg  gap-4 py-6 px-3 justify-center rounded-md">
      <div className="p-4 rounded-full bg-beige">{icon}</div>
      <h3 className="capitalize font-bold text-base">{head}</h3>
      <p className="text-[12px] text-gray-500 md:w-[50%] w-full text-center">{desc}</p>
      <Button
        className="!bg-white !text-black !border !border-grayLight !w-auto !text-xs"
        text={buttonText}
      />
    </CardDetail>
  );
};

export default AboutCardComponent;
