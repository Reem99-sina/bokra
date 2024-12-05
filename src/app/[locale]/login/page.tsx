"use client";

import { LoginForm } from "@/components/auth/login-form";
import * as React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center flex-1 bg-beige  ">
      <div><LoginForm /></div>
    </div>
  );
};

export default Login;
