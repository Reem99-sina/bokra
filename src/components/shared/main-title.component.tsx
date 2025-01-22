import { ReactNode } from "react";

const MainTitleComponent = ({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center  gap-4 sm:flex-row text-gray-500 w-full">
      <h3 className="font-black text-base">{title}</h3>
      <div className="mx-2 flex h-[1px] flex-1 bg-grayLight" />
      {!!action && <div className="flex items-center gap-2">{action}</div>}
    </div>
  );
};

export default MainTitleComponent;
