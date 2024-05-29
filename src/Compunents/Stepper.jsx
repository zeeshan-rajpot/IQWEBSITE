import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const steps = [
    { label: "", data: "Data for Step 1" },
    { label: "", data: "Data for Step 2" },
    { label: "", data: "Data for Step 3" },
    
  ];

  return (
    <>
    
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
       {step.label}
        </div>
      ))}

      
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <div className="mt-2 block">
        {steps[activeStep] && (
          <div className="text-center  w-11/12 md:5/6 lg:5/6 2xl:w-4/6    mx-auto">
             <div className=" py-0 md:py-12 flex justify-center ">
        <p className="text-xl lg:text-3xl">Choose the missing figure</p>
      </div>
      <div className="flex justify-center">
        <img src="pngegg 1.png" alt="" className="  lg:w-4/12" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center md:w-6/12 m-auto">
        <div  className="w-8/12 md:w-12/12" >
          <img src="Frame 39.png" alt=""/>
        </div>
        <div className="w-8/12 md:w-12/12">
          {" "}
          <img src="Frame 40.png" alt=""  />
        </div>
        <div className="w-8/12 md:w-12/12">
          {" "}
          <img src="Frame 41.png" alt=""  />
        </div>
        <div  className="w-8/12 md:w-12/12">
          {" "}
          <img src="Frame 39 (1).png" alt="" />
        </div>
        <div className="w-8/12 md:w-12/12">
          {" "}
          <img src="Frame 40 (1).png" alt=""  />
        </div>
        <div className="w-8/12 md:w-12/12">
          {" "}
          <img src="Frame 41 (1).png" alt=""  />
        </div>
      </div>



      <div className="my-4">
          {activeStep < steps.length - 1 && (
            <button
              onClick={handleNext}
              className="px-[100px] bg-theme text-white px-8 py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200"
            >
              Next
            </button>
          )}
          {activeStep === steps.length - 1 && (
            <Link
              to='/Payment'
            className="px-[100px] bg-theme text-white px-8 py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200"
            >
              Finish
            </Link>
          )}
        </div>




          </div>
        )}
      </div>

      </>

  );
};

export default CustomStepper;
