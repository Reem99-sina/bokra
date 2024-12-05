"use client";

import * as React from "react";
import { LinkItemComponent } from "./menu-item";
import { ShowEye } from "@/icon";


const links = [
  {
    title: "ddd",
    icon: ShowEye,
    children: [
      {
        title: "jjj",
        icon: ShowEye,
        href: "",
      },
    ],
  },
];

export const MenuList: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col ">
      {links?.map(({ title, children }) => (
        <div key={title} className="mb-8 flex flex-col">
          <span className="flex items-center gap-2 py-4 text-sm font-black text-[#58595B]">
            {/* {icon ? icon:null} */}
            {title}
          </span>

          {children.map((item) => (
            <LinkItemComponent item={item} key={item.title} />
          ))}
        </div>
      ))}
    </div>
  );
};
