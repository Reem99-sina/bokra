import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  link: string;
}

export const CategoryCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  link,
}) => {
  return (
    <div className="text-black p-3 bg-white flex flex-col items-center justify-between rounded-lg shadow-lg w-[180px] h-[180px] sm:min-w-[20%] min-w-fit">
      <div className="w-full items-center justify-center flex flex-col gap-1  flex-1">
        <span className="w-full items-center justify-center flex">
          <Icon color="black" size={60} />
        </span>
        <span className="w-full items-center justify-center flex">
          <p className="font-bold text-lg">{title}</p>
        </span>
      </div>
      <div className=" w-full flex items-center justify-center mt-auto">
        <Link className="text-xs text-gray-500 underline" href={link}>
          Apply Now
        </Link>
      </div>
    </div>
  );
};
