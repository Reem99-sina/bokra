import React from "react";
import { Spinner } from "./spinner.component";

export const ScreenLoader = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Spinner />
    </div>
  );
};
