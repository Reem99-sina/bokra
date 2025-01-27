"use client";

import React, { useMemo } from "react";
import { Stepper, Step } from "@material-tailwind/react";

import {
  FaUser,
  FaFile,
  FaBuilding,
  FaCheck,
  FaHandshake,
} from "react-icons/fa";
import { WelcomeStep } from "@/components/onboard/welcome-step.component";
import PersonalInformationComponent from "@/components/onboard/personal-information.component";
import CompanyInformationComponent from "@/components/onboard/company-information.component";
import { useUser } from "@/hooks/user.hooks";
import { IUser } from "@/types/user.type";

export default function Onboard() {
  const { user } = useUser();
  const initialStep = useMemo(() => {
    return (user as IUser)?.status == "apply-personal-info"
      ? 2
      :(user as IUser)?.status == "apply-company-info"?3: 0;
  }, [user]);
  const [activeStep, setActiveStep] = React.useState(initialStep);
  React.useEffect(() => {
    setActiveStep(initialStep);
  }, [initialStep]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = [
    {
      title: "Welcome",
      Icon: FaHandshake,
      Component: <WelcomeStep onNext={handleNext} />,
    },
    {
      title: "Personal Information",
      Icon: FaUser,
      Component: <PersonalInformationComponent onNext={handleNext} />,
    },
    {
      title: "Company Information",
      Icon: FaBuilding,
      Component: <CompanyInformationComponent onNext={handleNext} />,
    },
    {
      title: "Document Upload",
      Icon: FaFile,
      Component: <div onClick={handlePrev}>Document Upload</div>,
    },
  ];

  return (
    <div className="container flex flex-col  flex-1 self-center pt-10">
      <Stepper activeStep={activeStep}>
        {steps.map(({ Icon, title }, index) => {
          const isActive = activeStep >= index;
          const isCompleted = activeStep > index;

          return (
            <Step key={index}>
              {isCompleted ? (
                <FaCheck className="h-5 w-5 text-white" />
              ) : (
                <Icon
                  className={`h-5 w-5 ${
                    isActive ? "text-white" : "text-gray-500"
                  }`}
                />
              )}
              <div className="absolute -bottom-[2rem] w-max text-center">
                <p className={`${isActive ? "text-black" : "text-gray-500"}`}>
                  {title}
                </p>
              </div>
            </Step>
          );
        })}
      </Stepper>

      <div className="flex flex-1 flex-col pt-6 px-6">
        <div className="flex flex-1 flex-row justify-between bg-white rounded-lg p-5 shadow-md my-6 border border-gray-200">
          {steps[activeStep].Component}
        </div>
      </div>
    </div>
  );
}
