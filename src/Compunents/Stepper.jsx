import React, { useState } from "react";

const CustomStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const steps = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <div className="hidden md:flex items-center justify-center space-x-6 mt-2">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`cursor-pointer rounded-full w-8 h-2 flex items-center justify-center ${
            index === activeStep
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleStepClick(index)}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default CustomStepper;
