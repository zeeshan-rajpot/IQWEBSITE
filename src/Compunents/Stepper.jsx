import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    step1: '',
    step2: '',
    step3: '',
    step4: '',
    step5: '',
    step6: '',
  });

  const steps = [
    // {
    //   label: 'not in all',
    //   image: '/Frame 392.png',
    //   options: [
    //     '/Frame 393.png',
    //     '/Frame 396.png',
    //     '/Frame 395.png',
    //     '/Frame 397.png',
    //     '/Frame 398.png',
    //     '/Frame 399.png',
    //   ],
    //   correctAnswer: '/Frame 396.png',
    //   marks: 1,
    // },

    // {
    //   label: 'not in all',
    //   image: '/Frame 256.png',
    //   options: [
    //     '/Frame 355.png',
    //     '/Frame 357.png',
    //     '/Frame 359.png',
    //     '/Frame 356.png',
    //     '/Frame 358.png',
    //     '/Frame 360.png',
    //   ],
    //   correctAnswer: '/Frame 359.png',
    //   marks: 1,
    // },
    // {
    //   label: 'not in all',
    //   image: '/Frame 245.png',
    //   options: [
    //     '/Frame 349.png',
    //     '/Frame 351.png',
    //     '/Frame 353.png',
    //     '/Frame 350.png',
    //     '/Frame 352.png',
    //     '/Frame 354.png',
    //   ],
    //   correctAnswer: '/Frame 353.png',
    //   marks: 2,
    // },
    // {
    //   label: 'not in all',
    //   image: '/Frame 311.png',
    //   options: [
    //     '/Frame 299.png',
    //     '/Frame 301.png',
    //     '/Frame 303.png',
    //     '/Frame 300.png',
    //     '/Frame 302.png',
    //     '/Frame 304.png',
    //   ],
    //   correctAnswer: '/Frame 301.png',
    //   marks: 2,
    // },

    // {
    //   label: 'not in all',
    //   image: '/Frame 219.png',
    //   options: [
    //     '/Frame 305.png',
    //     '/Frame 307.png',
    //     '/Frame 309.png',
    //     '/Frame 306.png',
    //     '/Frame 308.png',
    //     '/Frame 310.png',
    //   ],
    //   correctAnswer: '/Frame 309.png',
    //   marks: 2,
    // },
    // {
    //   label: 'not in all',
    //   image: '/Frame 169.png',
    //   options: [
    //     '/Frame 379.png',
    //     '/Frame 381.png',
    //     '/Frame 383.png',
    //     '/Frame 382.png',
    //     '/Frame 308.png',
    //     '/Frame 384.png',
    //   ],
    //   correctAnswer: '/Frame 381.png',
    //   marks: 2,
    // },
    // All correct below this
    {
      label: '1',
      image: '/Frame 4212.png',
      options: [
        '/Frame 4213.png',
        '/Frame 4214.png',
        '/Frame 4215.png',
        '/Frame 4216.png',
        '/Frame 4217.png',
        '/Frame 4218.png',
      ],
      correctAnswer: '/Frame 4216.png',
      marks: 1,
    },
    {
      label: '2',
      image: '/Group 1171275459.png',
      options: [
        '/Frame 4178.png',
        '/Frame 4179.png',
        '/Frame 4180.png',
        '/Frame 4181.png',
        '/Frame 4182.png',
        '/Frame 4183.png',
      ],
      correctAnswer: '/Frame 4181 .png',
      marks: 1,
    },
    {
      label: '3',
      image: '/Frame 163.png',
      options: [
        '/Frame 257.png',
        '/Frame 258.png',
        '/Frame 259.png',
        '/Frame 260.png',
        '/Frame 261.png',
        '/Frame 262.png',
      ],
      correctAnswer: '/Frame 260.png',
      marks: 1,
    },
    {
      label: '4',
      image: '/Frame 4205.png',
      options: [
        '/Frame 4206.png',
        '/Frame 4207.png',
        '/Frame 4208.png',
        '/Frame 4209.png',
        '/Frame 4210.png',
        '/Frame 4211.png',
      ],
      correctAnswer: '/Frame 4208.png',
      marks: 1,
    },
    {
      label: '5',
      image: '/Frame 394.png',
      options: [
        '/Frame 401.png',
        '/Frame 402.png',
        '/Frame 403.png',
        '/Frame 404.png',
        '/Frame 405.png',
        '/Frame 406.png',
      ],
      correctAnswer: '/Frame 406.png',
      marks: 1,
    },

    {
      label: '6',
      image: '/Frame 238.png',
      options: [
        '/Frame 312.png',
        '/Frame 319.png',
        '/Frame 320.png',
        '/Frame 321.png',
        '/Frame 322.png',
        '/Frame 323.png',
      ],
      correctAnswer: '/Frame 320.png',
      marks: 1,
    },
    {
      label: '7',
      image: '/Group 1171275458.png',
      options: [
        '/Frame 4171.png',
        '/Frame 4172.png',
        '/Frame 4173.png',
        '/Frame 4174.png',
        '/Frame 4175.png',
        '/Frame 4176.png',
      ],
      correctAnswer: '/Frame 4176.png',
      marks: 1,
    },
    {
      label: '8',
      image: '/Frame 212.png',
      options: [
        '/Frame 330.png',
        '/Frame 332.png',
        '/Frame 334.png',
        '/Frame 331.png',
        '/Frame 333.png',
        '/Frame 335.png',
      ],
      correctAnswer: '/Frame 332.png',
      marks: 1,
    },
    {
      label: '9',
      image: '/Frame 407.png',
      options: [
        '/Frame 409.png',
        '/Frame 411.png',
        '/Frame 413.png',
        '/Frame 410.png',
        '/Frame 412.png',
        '/Frame 414.png',
      ],
      correctAnswer: '/Frame 414.png',
      marks: 1,
    },

    {
      label: '10',
      image: '/Frame 4184.png',
      options: [
        '/Frame 4185.png',
        '/Frame 4186.png',
        '/Frame 4187.png',
        '/Frame 4188.png',
        '/Frame 4189.png',
        '/Frame 4190.png',
      ],
      correctAnswer: '/Frame 4185.png',
      marks: 1,
    },
    {
      label: '11',
      image: '/Frame 4191.png',
      options: [
        '/Frame 4192.png',
        '/Frame 4193.png',
        '/Frame 4194.png',
        '/Frame 4195.png',
        '/Frame 4196.png',
        '/Frame 4197.png',
      ],
      correctAnswer: '/Frame 4195.png',
      marks: 1,
    },
    {
      label: '12',
      image: '/Frame 4261.png',
      options: [
        '/Frame 4262.png',
        '/Frame 4263.png',
        '/Frame 4264.png',
        '/Frame 4265.png',
        '/Frame 4266.png',
        '/Frame 4267.png',
      ],
      correctAnswer: '/Frame 4262.png',
      marks: 1,
    },
    {
      label: '13',
      image: '/Frame 171.png',
      options: [
        '/Frame 337.png',
        '/Frame 339.png',
        '/Frame 341.png',
        '/Frame 338.png',
        '/Frame 340.png',
        '/Frame 342.png',
      ],
      correctAnswer: '/Frame 342.png',
      marks: 1,
    },
     {
      label: '14',
      image: '/Frame 4198.png',
      options: [
        '/Frame 4199.png',
        '/Frame 4200.png',
        '/Frame 4201.png',
        '/Frame 4202.png',
        '/Frame 4203.png',
        '/Frame 4204.png',
      ],
      correctAnswer: '/Frame 4204.png',
      marks: 1,
    },

    {
      label: '15',
      image: '/Frame 244.png',
      options: [
        '/Frame 281.png',
        '/Frame 282.png',
        '/Frame 283.png',
        '/Frame 284.png',
        '/Frame 285.png',
        '/Frame 286.png',
      ],
      correctAnswer: '/Frame 283.png',
      marks: 1,
    },
    // All above is done in easy below medium started

    {
      label: '1',
      image: '/Frame 4219.png',
      options: [
        '/Frame 4220.png',
        '/Frame 4221.png',
        '/Frame 4222.png',
        '/Frame 4223.png',
        '/Frame 4224.png',
        '/Frame 4225.png',
      ],
      correctAnswer: '/Frame 4222.png',
      marks: 2,
    },

    {
      label: '2',
      image: '/Frame 4247.png',
      options: [
        '/Frame 4248.png',
        '/Frame 4249.png',
        '/Frame 4250.png',
        '/Frame 4251.png',
        '/Frame 4252.png',
        '/Frame 4253.png',
      ],
      correctAnswer: '/Frame 4250.png',
      marks: 2,
    },

    {
      label: '3',
      image: '/Frame 252.png',
      options: [
        '/Frame 324.png',
        '/Frame 325.png',
        '/Frame 326.png',
        '/Frame 336.png',
        '/Frame 328.png',
        '/Frame 329.png',
      ],
      correctAnswer: '/Frame 326.png',
      marks: 2,
    },
     {
      label: '4',
      image: '/Frame 4240.png',
      options: [
        '/Frame 4241.png',
        '/Frame 4242.png',
        '/Frame 4243.png',
        '/Frame 4244.png',
        '/Frame 4245.png',
        '/Frame 4246.png',
      ],
      correctAnswer: '/Frame 4245.png',
      marks: 2,
    },

    {
      label: '5',
      image: '/Frame 166.png',
      options: [
        '/Frame 263.png',
        '/Frame 265.png',
        '/Frame 266.png',
        '/Frame 267.png',
        '/Frame 268.png',
        '/Frame 269.png',
      ],
      correctAnswer: '/Frame 269.png',
      marks: 2,
    },
    {
      label: '6',
      image: '/Frame 170.png',
      options: [
        '/Frame 367.png',
        '/Frame 369.png',
        '/Frame 371.png',
        '/Frame 368.png',
        '/Frame 370.png',
        '/Frame 372.png',
      ],
      correctAnswer: '/Frame 370.png',
      marks: 2,
    },
    {
      label: '7',
      image: '/Frame 391.png',
      options: [
        '/Frame 373.png',
        '/Frame 375.png',
        '/Frame 377.png',
        '/Frame 374.png',
        '/Frame 376.png',
        '/Frame 378.png',
      ],
      correctAnswer: '/Frame 376.png',
      marks: 2,
    },
    {
      label: '8',
      image: '/Frame 230.png',
      options: [
        '/Frame 313.png',
        '/Frame 315.png',
        '/Frame 317.png',
        '/Frame 314.png',
        '/Frame 316.png',
        '/Frame 318.png',
      ],
      correctAnswer: '/Frame 314.png',
      marks: 2,
    },
    {
      label: '9',
      image: '/Frame 4226.png',
      options: [
        '/Frame 4227.png',
        '/Frame 4228.png',
        '/Frame 4229.png',
        '/Frame 4230.png',
        '/Frame 4231.png',
        '/Frame 4232.png',
      ],
      correctAnswer: '/Frame 4232.png',
      marks: 2,
    },
    {
      label: '10',
      image: '/Frame 206.png',
      options: [
        '/Frame 361.png',
        '/Frame 362.png',
        '/Frame 363.png',
        '/Frame 364.png',
        '/Frame 365.png',
        '/Frame 366.png',
      ],
      correctAnswer: '/Frame 365.png',
      marks: 2,
    },
    {
      label: '11',
      image: '/Frame 4233.png',
      options: [
        '/Frame 4234.png',
        '/Frame 4235.png',
        '/Frame 4236.png',
        '/Frame 4237.png',
        '/Frame 4238.png',
        '/Frame 4239.png',
      ],
      correctAnswer: '/Frame 4237.png',
      marks: 2,
    },

    {
      label: '12',
      image: '/Frame 250.png',
      options: [
        '/Frame 343.png',
        '/Frame 344.png',
        '/Frame 345.png',
        '/Frame 346.png',
        '/Frame 347.png',
        '/Frame 348.png',
      ],
      correctAnswer: '/Frame 343.png',
      marks: 2,
    },
    {
      label: '13',
      image: '/Frame 4254.png',
      options: [
        '/Frame 4255.png',
        '/Frame 4256.png',
        '/Frame 4257.png',
        '/Frame 4258.png',
        '/Frame 4259.png',
        '/Frame 4260.png',
      ],
      correctAnswer: '/Frame 4256.png',
      marks: 2,
    },
    {
      label: '14',
      image: '/Frame 240.png',
      options: [
        '/Frame 275.png',
        '/Frame 276.png',
        '/Frame 277.png',
        '/Frame 278.png',
        '/Frame 279.png',
        '/Frame 280.png',
      ],
      correctAnswer: '/Frame 276.png',
      marks: 2,
    },

    {
      label: '15',
      image: '/Frame 242.png',
      options: [
        '/Frame 287.png',
        '/Frame 289.png',
        '/Frame 291.png',
        '/Frame 288.png',
        '/Frame 290.png',
        '/Frame 292.png',
      ],
      correctAnswer: '/Frame 288.png',
      marks: 2,
    },

    // Hard started
    {
      label: '1',
      image: '/Frame 4275.png',
      options: [
        '/Frame 4276.png',
        '/Frame 4277.png',
        '/Frame 4278.png',
        '/Frame 4279.png',
        '/Frame 4280.png',
        '/Frame 4281.png',
      ],
      correctAnswer: '/Frame 4278.png',
      marks: 3,
    },
    {
      label: '2',
      image: '/Frame 248.png',
      options: [
        '/Frame 293.png',
        '/Frame 294.png',
        '/Frame 295.png',
        '/Frame 296.png',
        '/Frame 297.png',
        '/Frame 298.png',
      ],
      correctAnswer: '/Frame 296.png',
      marks: 3,
    },
    {
      label: '3',
      image: '/Frame 4268.png',
      options: [
        '/Frame 4269.png',
        '/Frame 4270.png',
        '/Frame 4271.png',
        '/Frame 4272.png',
        '/Frame 4273.png',
        '/Frame 4274.png',
      ],
      correctAnswer: '/Frame 4269.png',
      marks: 3,
    },
    {
      label: '4',
      image: '/Frame 165.png',
      options: [
        '/Frame 264.png',
        '/Frame 270.png',
        '/Frame 271.png',
        '/Frame 272.png',
        '/Frame 273.png',
        '/Frame 274.png',
      ],
      correctAnswer: '/Frame 264.png',
      marks: 3,
    },
  ];

  const [correctCount, setCorrectCount] = useState(0);
  const [correctness, setCorrectness] = useState(
    Array(steps.length).fill(false)
  );

  const handleNext = () => {
    const currentAnswer = formData[`step${activeStep + 1}`];
    const isCorrect = steps[activeStep].correctAnswer === currentAnswer;

    if (isCorrect) {
      setCorrectCount(prevCount => prevCount + steps[activeStep].marks);
      setCorrectness(prevCorrectness => {
        const newCorrectness = [...prevCorrectness];
        newCorrectness[activeStep] = true;
        return newCorrectness;
      });
    }

    setActiveStep(prevStep => prevStep + 1);
  };

  const handleFinish = () => {
    console.log('Total Score:', correctCount);
    localStorage.setItem('totalScore', correctCount);
    const IQ = 100 + 1.4 * (correctCount - 30);
    localStorage.setItem('calculatedIQ', IQ);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (activeStep < steps.length - 1) {
      handleNext();
    }
  };

  return (
    <>
      <div className='hidden md:flex items-center justify-center md:w-4/6 mx-auto space-x-3 mt-2'>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-full w-20 h-2 flex items-center justify-center ${
              index === activeStep
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
          ></div>
        ))}
      </div>

      <div className='mt-2 block'>
        {steps[activeStep] && (
          <div className='text-center w-11/12 md:5/6 lg:5/6 2xl:w-6/6 mx-auto'>
            <div className='py-0 md:pt-12 flex justify-center'>
              <p className='text-xl lg:text-3xl'>Choose the missing figure</p>
            </div>
            <div className='flex justify-center mt-6'>
              <img
                src={steps[activeStep].image}
                alt={`Step ${activeStep + 1}`}
                className=' lg:w-3/12'
              />
            </div>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-3 place-items-center md:w-10/12 m-auto my-12'>
              {steps[activeStep].options.map((option, index) => (
                <div
                  key={index}
                  className={`relative w-10/12 md:w-12/12 ${
                    formData[`step${activeStep + 1}`] === option
                      ? 'border-2 border-red-500 md:w-auto mx-auto '
                      : ''
                  }`}
                >
                  <input
                    type='radio'
                    id={`step${activeStep + 1}_option${index}`}
                    name={`step${activeStep + 1}`}
                    value={option}
                    checked={formData[`step${activeStep + 1}`] === option}
                    onChange={handleChange}
                    className='mb-2 me-2 hidden'
                  />
                  <label
                    htmlFor={`step${activeStep + 1}_option${index}`}
                    className='flex items-center cursor-pointer'
                  >
                    <img src={option} alt={`Option ${index + 1}`} />
                  </label>
                </div>
              ))}
            </div>

            <div className='my-4'>
              {activeStep === steps.length - 1 && (
                <Link
                  to='/Payment'
                  onClick={handleFinish}
                  className='px-[100px] bg-theme text-white py-3 border border-theme rounded-full hover:bg-transparent hover:text-theme duration-200'
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
