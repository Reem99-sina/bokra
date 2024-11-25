"use client";

import * as React from "react";
import { memo } from "react";
import { MenuList } from "./menu-list";

const SideBar: React.FC = () => {
  return (
    <>
      <div className="flex  h-full flex-col items-end py-6  ">
        <MenuList />
        <div className="mt-auto self-center "></div>
        <div className="flex  h-full flex-col items-end py-6 "></div>
      </div>
    </>
  );
};

export default memo(SideBar);
