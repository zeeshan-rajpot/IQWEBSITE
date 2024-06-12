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
        "/Group 5924.png",
        "/Group 5916.png",
      ],
      correctAnswer: "/Group 5924.png",
    },
    {
      label: "",
      image: "/Group 1171275239.png",
      options: [
        "/Group 1171275240.png",
        "/Group 1171275241.png",
        "/Group 1171275242.png",
        "/Group 1171275243.png",
        "/Group 1171275244.png",
        "/Group 1171275246.png",
      ],
      correctAnswer: "/Group 1171275243.png",
    },
    {
      label: "",
      image: "/Group 1171275247.png",
      options: [
        "/Group 1171275248.png",
        "/Group 1171275249.png",
        "/Group 1171275251.png",
        "/Group 1171275252.png",
        "/Group 1171275253.png",
        "/Group 1171275254.png",
      ],
      correctAnswer: "/Group 1171275254.png",
    },
    {
      label: "",
      image: "/Group 1171275238.png",
      options: [
        "/Group 1171275255.png",
        "/Group 1171275256.png",
        "/Group 1171275257.png",
        "/Group 1171275258.png",
        "/Group 1171275259.png",
        "/Group 1171275260.png",
      ],
      correctAnswer: "/Group 1171275255.png",
    }, 
     {
      label: "",
      image: "/Group 1171275261.png",
      options: [
        "/Group 1171275262.png",
        "/Group 1171275263.png",
        "/Group 1171275264.png",
        "/Group 1171275265.png",
        "/Group 1171275266.png",
        "/Group 1171275267.png",
      ],
      correctAnswer: "/Group 1171275263.png",
    },
    {
      label: "",
      image: "/Group 1171275268.png",
      options: [
        "/Group 1171275269.png",
        "/Group 1171275270.png",
        "/Group 1171275271.png",
        "/Group 1171275272.png",
        "/Group 1171275273.png",
        "/Group 1171275274.png",
      ],
      correctAnswer: "/Group 1171275271.png",
    },
    {
      label: "",
      image: "/Group 1171275275.png",
      options: [
        "/Group 1171275276.png",
        "/Group 1171275283.png",
        "/Group 1171275282.png",
        "/Group 1171275279.png",
        "/Group 1171275280.png",
        "/Group 1171275281.png",
      ],
      correctAnswer: "/Group 1171275276.png",
    }, {
      label: "",
      image: "/Group 1171275284.png",
      options: [
        "/Group 1171275286.png",
        "/Group 1171275287.png",
        "/Group 1171275288.png",
        "/Group 1171275291.png",
        "/Group 1171275290.png",
        "/Group 1171275289.png",
      ],
      correctAnswer: "/Group 1171275291.png",
    }, {
      label: "",
      image: "/Group 1171275285.png",
      options: [
        "/Group 1171275292.png",
        "/Group 1171275293.png",
        "/Group 1171275294.png",
        "/Group 1171275297.png",
        "/Group 1171275296.png",
        "/Group 1171275295.png",
      ],
      correctAnswer: "/Group 1171275297.png",
    },{
      label: "",
      image: "/Group 1171275298.png",
      options: [
        "/Group 1171275299.png",
        "/Group 1171275300.png",
        "/Group 1171275301.png",
        "/Group 1171275302.png",
        "/Group 1171275303.png",
        "/Group 1171275304.png",
      ],
      correctAnswer: "/Group 1171275301.png",
    },{
      label: "",
      image: "/Group 1171275305.png",
      options: [
        "/Group 1171275306.png",
        "/Group 1171275307.png",
        "/Group 1171275308.png",
        "/Group 1171275309.png",
        "/Group 1171275310.png",
        "/Group 1171275311.png",
      ],
      correctAnswer: "/Group 1171275308.png",
    },{
      label: "",
      image: "/Group 1171275312.png",
      options: [
        "/Group 1171275313.png",
        "/Group 1171275314.png",
        "/Group 1171275315.png",
        "/Group 1171275316.png",
        "/Group 1171275317.png",
        "/Group 1171275318.png",
      ],
      correctAnswer: "/Group 1171275317.png",
    },{
      label: "",
      image: "/Group 1171275325.png",
      options: [
        "/Group 1171275319.png",
        "/Group 1171275320.png",
        "/Group 1171275321.png",
        "/Group 1171275322.png",
        "/Group 1171275323.png",
        "/Group 1171275324.png",
      ],
      correctAnswer: "/Group 1171275321.png",
    },{
      label: "",
      image: "/Group 1171275333.png",
      options: [
        "/Group 1171275334.png",
        "/Group 1171275335.png",
        "/Group 1171275336.png",
        "/Group 1171275337.png",
        "/Group 1171275338.png",
        "/Group 1171275338.png",
      ],
      correctAnswer: "/Group 1171275335.png",
    },{
      label: "",
      image: "/Group 1171275340.png",
      options: [
        "/Group 1171275341.png",
        "/Group 1171275342.png",
        "/Group 1171275343.png",
        "/Group 1171275344.png",
        "/Group 1171275345.png",
        "/Group 1171275346.png",
      ],
      correctAnswer: "/Group 1171275345.png",
    },{
      label: "",
      image: "/Group 1171275354.png",
      options: [
        "/Group 1171275355.png",
        "/Group 1171275356.png",
        "/Group 1171275357.png",
        "/Group 1171275358.png",
        "/Group 1171275359.png",
        "/Group 1171275360.png",
      ],
      correctAnswer: "/Group 1171275357.png",
    },{
      label: "",
      image: "/Group 1171275361.png",
      options: [
        "/Group 1171275362.png",
        "/Group 1171275363.png",
        "/Group 1171275364.png",
        "/Group 1171275365.png",
        "/Group 1171275366.png",
        "/Group 1171275367.png",
      ],
      correctAnswer: "/Group 1171275366.png",
    },{
      label: "",
      image: "/Group 1171275368.png",
      options: [
        "/Group 1171275369.png",
        "/Group 1171275370.png",
        "/Group 1171275371.png",
        "/Group 1171275372.png",
        "/Group 1171275373.png",
        "/Group 1171275374.png",
      ],
      correctAnswer: "/Group 1171275371.png",
    },{
      label: "",
      image: "/Group 1171275375.png",
      options: [
        "/Group 1171275376.png",
        "/Group 1171275377.png",
        "/Group 1171275378.png",
        "/Group 1171275379.png",
        "/Group 1171275380.png",
        "/Group 1171275381.png",
      ],
      correctAnswer: "/Group 1171275379.png",
    },{
      label: "",
      image: "/Group 1171275382.png",
      options: [
        "/Group 1171275383.png",
        "/Group 1171275384.png",
        "/Group 1171275387.png",
        "/Group 1171275386.png",
        "/Group 1171275385.png",
        "/Group 1171275388.png",
      ],
      correctAnswer: "/Group 1171275386.png",
    },
  ];

  return (
    <>
      <div className="hidden md:flex items-center justify-center md:w-4/6 mx-auto space-x-3 mt-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-full w-20 h-2 flex items-center justify-center ${
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
            <div className="py-0 md:pt-12 flex justify-center">
              <p className="text-xl lg:text-3xl">Choose the missing figure</p>
            </div>
            <div className="flex justify-center mt-6">
              <img
                src={steps[activeStep].image}
                alt={`Step ${activeStep + 1}`}
                className="w-6/12 lg:w-3/12"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center md:w-6/12 m-auto my-12">
              {steps[activeStep].options.map((option, index) => (
                <div
                  key={index}
                  className={`relative w-8/12 md:w-12/12 ${
                    formData[`step${activeStep + 1}`] === option
                      ? "border-2 border-red-500 p-2 w-40"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    id={`step${activeStep + 1}_option${index}`}
                    name={`step${activeStep + 1}`}
                    value={option}
                    checked={formData[`step${activeStep + 1}`] === option}
                    onChange={handleChange}
                    className="mb-2 me-2 hidden "
                  />
                  <span className="absolute top-[-30px] left-[50%] transform -translate-x-[50%] text-xl font-normal">
                    {index + 1}
                  </span>
                  <label
                    htmlFor={`step${activeStep + 1}_option${index}`}
                    className="flex items-center cursor-pointer"
                  >
                    <img src={option} alt={`Option ${index + 1}`} className="h-[150px] object-contain"/>
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
