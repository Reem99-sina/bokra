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
    <div className=" flex justify-between items-start flex-col text-xs gap-2">
      <p className="font-black">{title}:</p>
      {(value || icon) && (
        <p className=" text-gray-500 font-normal flex items-center gap-x-2 text-[12px]">
          {icon}
          {value}
        </p>
      )}
    </div>
  );
};

export default DisplayDataComponent;
