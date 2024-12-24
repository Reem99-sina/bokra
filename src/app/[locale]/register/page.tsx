"use client";

import { RegisterForm } from "@/components/auth/register-form";
import * as React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen h-auto items-center justify-center flex-1 bg-beige  ">
      <div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Login;
