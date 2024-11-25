"use client";
import * as React from "react";
// import { Globe, ProfileUser } from "@/icon";
import Logout from "./logout";

interface IUserMenuProps {
  user: {
    img: string | null;
    name: string;
  };
}

const UserMenu: React.FC<IUserMenuProps> = ({ user: { name } }) => {
  return (
    <div className="flex items-center  w-full ">
      <div className="flex items-center">
        <div className="flex flex-row gap-4">
          {/* <ProfileUser /> */}
        </div>
        <div className="ms-2 w-full ">
          <p className="text-xs font-bold text-[#7B8494]">{name}</p>
        </div>
      </div>
      <Logout />
    </div>
  );
};

export default UserMenu;
