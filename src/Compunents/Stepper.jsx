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
      image: "/Frame 163.png",
      options: [
        "/Frame 257.png",
        "/Frame 258.png",
        "/Frame 259.png",
        "/Frame 260.png",
        "/Frame 261.png",
        "/Frame 262.png",
      ],
      correctAnswer: "/Frame 260.png",
    }, {
      label: "",
      image: "/Frame 166.png",
      options: [
        "/Frame 263.png",
        "/Frame 265.png",
        "/Frame 266.png",
        "/Frame 267.png",
        "/Frame 268.png",
        "/Frame 269.png",
      ],
      correctAnswer: "/Frame 269.png",
    },{
      label: "",
      image: "/Frame 165.png",
      options: [
        "/Frame 264.png",
        "/Frame 270.png",
        "/Frame 271.png",
        "/Frame 272.png",
        "/Frame 273.png",
        "/Frame 274.png",
      ],
      correctAnswer: "/Frame 264.png",
    },{
      label: "",
      image: "/Frame 240.png",
      options: [
        "/Frame 275.png",
        "/Frame 276.png",
        "/Frame 277.png",
        "/Frame 278.png",
        "/Frame 279.png",
        "/Frame 280.png",
      ],
      correctAnswer: "/Frame 276.png",
    },
  {
      label: "",
      image: "/Frame 244.png",
      options: [
        "/Frame 281.png",
        "/Frame 282.png",
        "/Frame 283.png",
        "/Frame 284.png",
        "/Frame 285.png",
        "/Frame 286.png",
      ],
      correctAnswer: "/Frame 283 .png",
    },{
      label: "",
      image: "/Frame 250.png",
      options: [
        "/Frame 343.png",
        "/Frame 344.png",
        "/Frame 345.png",
        "/Frame 346.png",
        "/Frame 347.png",
        "/Frame 348.png",
      ],
      correctAnswer: "/Frame 343 .png",
    },{
      label: "",
      image: "/Frame 248.png",
      options: [
        "/Frame 293.png",
        "/Frame 294.png",
        "/Frame 295.png",
        "/Frame 296.png",
        "/Frame 297.png",
        "/Frame 298.png",
      ],
      correctAnswer: "/Frame 296 .png",
    },{
      label: "",
      image: "/Frame 242.png",
      options: [
        "/Frame 287.png",
        "/Frame 289.png",
        "/Frame 291.png",
        "/Frame 288.png",
        "/Frame 290.png",
        "/Frame 292.png",
      ],
      correctAnswer: "/Frame 288 .png",
    } ,{
      label: "",
      image: "/Frame 238.png",
      options: [
        "/Frame 312.png",
        "/Frame 319.png",
        "/Frame 320.png",
        "/Frame 321.png",
        "/Frame 322.png",
        "/Frame 323.png",
      ],
      correctAnswer: "/Frame 320 .png",
    },{
      label: "",
      image: "/Frame 245.png",
      options: [
        "/Frame 349.png",
        "/Frame 351.png",
        "/Frame 353.png",
        "/Frame 350.png",
        "/Frame 352.png",
        "/Frame 354.png",
      ],
      correctAnswer: "/Frame 353.png",
    },{
      label: "",
      image: "/Frame 311.png",
      options: [
        "/Frame 299.png",
        "/Frame 301.png",
        "/Frame 303.png",
        "/Frame 300.png",
        "/Frame 302.png",
        "/Frame 304.png",
      ],
      correctAnswer: "/Frame 301.png",
    },{
      label: "",
      image: "/Frame 252.png",
      options: [
        "/Frame 324.png",
        "/Frame 325.png",
        "/Frame 326.png",
        "/Frame 336.png",
        "/Frame 328.png",
        "/Frame 329.png",
      ],
      correctAnswer: "/Frame 326.png",
    },{
      label: "",
      image: "/Frame 206.png",
      options: [
        "/Frame 361.png",
        "/Frame 362.png",
        "/Frame 363.png",
        "/Frame 364.png",
        "/Frame 365.png",
        "/Frame 366.png",
      ],
      correctAnswer: "/Frame 365.png",
    },{
      label: "",
      image: "/Frame 219.png",
      options: [
        "/Frame 305.png",
        "/Frame 307.png",
        "/Frame 309.png",
        "/Frame 306.png",
        "/Frame 308.png",
        "/Frame 310.png",
      ],
      correctAnswer: "/Frame 309.png",
    },{
      label: "",
      image: "/Frame 169.png",
      options: [
        "/Frame 379.png",
        "/Frame 381.png",
        "/Frame 383.png",
        "/Frame 382.png",
        "/Frame 308.png",
        "/Frame 384.png",
      ],
      correctAnswer: "/Frame 381.png",
    },{
      label: "",
      image: "/Frame 170.png",
      options: [
        "/Frame 367.png",
        "/Frame 369.png",
        "/Frame 371.png",
        "/Frame 368.png",
        "/Frame 370.png",
        "/Frame 372.png",
      ],
      correctAnswer: "/Frame 370.png",
    },{
      label: "",
      image: "/Frame 171.png",
      options: [
        "/Frame 337.png",
        "/Frame 339.png",
        "/Frame 341.png",
        "/Frame 338.png",
        "/Frame 340.png",
        "/Frame 342.png",
      ],
      correctAnswer: "/Frame 342.png",
    },{
      label: "",
      image: "/Frame 391.png",
      options: [
        "/Frame 373.png",
        "/Frame 375.png",
        "/Frame 377.png",
        "/Frame 374.png",
        "/Frame 376.png",
        "/Frame 378.png",
      ],
      correctAnswer: "/Frame 376.png",
    },{
      label: "",
      image: "/Frame 212.png",
      options: [
        "/Frame 330.png",
        "/Frame 332.png",
        "/Frame 334.png",
        "/Frame 331.png",
        "/Frame 333.png",
        "/Frame 335.png",
      ],
      correctAnswer: "/Frame 260.png",
    },{
      label: "",
      image: "/Frame 230.png",
      options: [
        "/Frame 313.png",
        "/Frame 315.png",
        "/Frame 317.png",
        "/Frame 314.png",
        "/Frame 316.png",
        "/Frame 318.png",
      ],
      correctAnswer: "/Frame 314.png",
    },{
      label: "",
      image: "/Frame 256.png",
      options: [
        "/Frame 355.png",
        "/Frame 357.png",
        "/Frame 359.png",
        "/Frame 356.png",
        "/Frame 358.png",
        "/Frame 360.png",
      ],
      correctAnswer: "/Frame 359.png",
    },{
      label: "",
      image: "/Frame 392.png",
      options: [
        "/Frame 393.png",
        "/Frame 396.png",
        "/Frame 395.png",
        "/Frame 397.png",
        "/Frame 398.png",
        "/Frame 399.png",
      ],
      correctAnswer: "/Frame 396.png ",
    },{
      label: "",
      image: "/Frame 394.png",
      options: [
        "/Frame 401.png",
        "/Frame 402.png",
        "/Frame 403.png",
        "/Frame 404.png",
        "/Frame 405.png",
        "/Frame 406.png",
      ],
      correctAnswer: "/Frame 406.png",
    },{
      label: "",
      image: "/Frame 407.png",
      options: [
        "/Frame 409.png",
        "/Frame 411.png",
        "/Frame 413.png",
        "/Frame 410.png",
        "/Frame 412.png",
        "/Frame 414.png",
      ],
      correctAnswer: "/Frame 414.png",
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
          <div className="text-center w-11/12 md:5/6 lg:5/6 2xl:w-6/6 mx-auto">
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
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 place-items-center md:w-10/12 m-auto my-12">
              {steps[activeStep].options.map((option, index) => (
                <div
                  key={index}
                  className={`relative w-10/12 md:w-12/12 ${
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
                  {/* <span className="absolute top-[-30px] left-[50%] transform -translate-x-[50%] text-xl font-normal">
                    {index + 1}
                  </span> */}
                  <label
                    htmlFor={`step${activeStep + 1}_option${index}`}
                    className="flex items-center cursor-pointer"
                  >
                    <img src={option} alt={`Option ${index + 1}`} className=" "/>
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
