"use client";
import * as React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { customComponents } from "./customize-components";

interface IAppProps {
  children: React.ReactNode;
}

const MuiTheme: React.FC<IAppProps> = ({ children }) => {
  return <ThemeProvider value={customComponents}>{children}</ThemeProvider>;
};

export default MuiTheme;
