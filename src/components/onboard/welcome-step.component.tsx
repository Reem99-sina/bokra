import React from "react";
import { Button } from "../shared/button.component";

export const WelcomeStep = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-black text-gray-900">
        Welcome to Our Platform!
      </h1>

      <p className="text-center text-gray-600 max-w-lg">
        We're excited to have you on board. Let's get your account set up in
        just a few simple steps. We'll guide you through providing your personal
        information, company details, and required documents.
      </p>

      <div className="flex flex-row gap-4">
        <Button
          text="Continue"
          className="flex items-center gap-2"
          onClick={onNext}
        />
      </div>
    </div>
  );
};
