import { ReactNode } from "react";

const DisplayDataComponent = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon?: ReactNode;
}) => {
  return (
    <div className=" flex justify-between items-start flex-col text-xs">
      <p className="font-black">{title}:</p>
      <p className=" text-gray-500 font-light flex items-center gap-x-2">
        {icon}
        {value}
      </p>
    </div>
  );
};

export default DisplayDataComponent;
