"use client";
// import { LogoutIcon } from "@/icon";

import * as React from "react";
import { useAuth } from "@/hooks/auth.hook";
import { Button } from "@/components/shared/button.component";

const Logout: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Button
      className="mr-2 flex flex-col items-center ps-1"
      type="button"
      text="logout"
      onClick={() => logout()}

    />
     
  );
};

export default Logout;
