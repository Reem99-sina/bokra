"use client";

import * as React from "react";
import { memo } from "react";
import UserMenu from "./user-menu";
import Image from "next/image";
// import { Egypt, United } from "@/icon";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <Image src="/valoro.png" alt="Logo" className="mr-2" width={20} height={20}/>
          </div>

          <div className="flex items-center space-x-6 gap-2">
            <select
              className="bg-white text-[#7B8494] border border-[#7B8494] rounded  p-1  "
              defaultValue="ar"
            >
              <option value="en">
                English
                {/* <United /> */}
              </option>
              <option value="ar">
                {/* <Egypt /> */}
                العربية
              </option>
            </select>

            <div className="flex items-center space-x-4">
              <span>
                <UserMenu user={{ img: null, name: "Maged" }} />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
