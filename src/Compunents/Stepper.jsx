import React, { useState } from "react";
import { Link } from "react-router-dom";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
  });

  const [correctCount, setCorrectCount] = useState(0);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    if (steps[activeStep].correctAnswer === formData[`step${activeStep + 1}`]) {
      setCorrectCount((prevCount) => prevCount + 1);
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const steps = [
    {
      label: "",
      image: "/Group 5901.png",
      options: [
        "/answer1.png",
        "/Group (1).png",
        "/Group (2).png",
        "/Group (3).png",
        "/Group (4).png",
        "/Group (5).png",
      ],
      correctAnswer: "/answer1.png",
    },
    {
      label: "",
      image: "/Group 5902.png",
      options: [
        "/Group 5903.png",
        "/Group 5904.png",
        "/Group 5905.png",
        "/Group 5906.png",
        "/Group 5907.png",
        "/Group 5908.png",
      ],
      correctAnswer: "/Group 5905.png",
    },
    {
      label: "",
      image: "/Group 5909.png",
      options: [
        "/Group 5910.png",
        "/Group 5911.png",
        "/Group 5912.png",
        "/Group 5913.png",
        "/Group 5914.png",
        "/Group 5915.png",
      ],
      correctAnswer: "/Group 5913.png",
    },
    {
      label: "",
      image: "/Group 8.png",
      options: [
        "/Group 5916.png",
        "/Group 5926.png",
        "/Group 5920.png",
        "/Group 5919.png",
        "/Group 5921.png",
        "/Group 5922.png",
      ],
      correctAnswer: "/Group 5926.png",
    },
    {
      label: "",
      image: "/Group 5923.png",
      options: [
        "/Group 5924.png",
        "/Group 5926.png",
        "/Group 5927.png",
        "/Group 5928.png",
        "/Group 5929.png",
        "/Group 5930.png",
      ],
      correctAnswer: "/Group 5930.png",

    },
    {
      label: "",
      image: "/Group 5931.png",
      options: [
        "/Group 5932.png",
        "/Group 5933.png",
        "/Group 5934.png",
        "/Group 5935.png",
        "/Group 5927.png",
        "/Group 5916.png",
      ],
      correctAnswer: "/Group 5916.png",

    },
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
          <div className="text-center w-11/12 md:5/6 lg:5/6 2xl:w-4/6 mx-auto">
            <div className="py-0 md:py-12 flex justify-center">
              <p className="text-xl lg:text-3xl">Choose the missing figure</p>
            </div>
            <div className="flex justify-center mt-12">
              <img
                src={steps[activeStep].image}
                alt={`Step ${activeStep + 1}`}
                className="w-6/12 lg:w-3/12"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center md:w-6/12 m-auto my-12">
              {steps[activeStep].options.map((option, index) => (
                <div
                  key={index}
                  className="w-8/12 md:w-12/12 flex  items-center justify-center"
                >
                  <input
                    type="radio"
                    id={`step${activeStep + 1}_option${index}`}
                    name={`step${activeStep + 1}`}
                    value={option}
                    checked={formData[`step${activeStep + 1}`] === option}
                    onChange={handleChange}
                    className="mb-2 me-2"
                  />
                  <label htmlFor={`step${activeStep + 1}_option${index}`}>
                    <img src={option} alt={`Option ${index + 1}`} />
                  </label>
                </div>
              ))}
            </div>

            <div className="my-4">
              {activeStep < steps.length - 1 && (
                <button
                  onClick={handleNext}
                  className="px-[100px] bg-theme text-white py-3 border border-theme rounded-full hover:bg-transparent hover:text-theme duration-200"
                >
                  Next
                </button>
              )}
              {activeStep === steps.length - 1 && (
                <Link
                  to="/Payment"
                  className="px-[100px] bg-theme text-white py-3 border border-theme rounded-full hover:bg-transparent hover:text-theme duration-200"
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

export default Stepper;
