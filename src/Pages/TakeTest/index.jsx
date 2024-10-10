import React, { useEffect, useState } from 'react';
import Footer from '../../Compunents/Footer';
import Navbar from '../../Compunents/Navbar';
import Stepper from '../../Compunents/Stepper';

const index = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const timeSpent = Math.floor((currentTime - startTime) / 1000); // time in seconds
      setElapsedTime(timeSpent);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // Function to format time (seconds) into hh:mm:ss
  const formatTime = seconds => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m
      .toString()
      .padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  return (
    <>
      <Navbar />
      <div className='flex justify-between items-center px-4 lg:px-72 py-6'>
        <h1 className='text-xl lg:text-3xl font-bold'>Test</h1>
        {/* <Countdown
          date={Date.now() + 360000}
          className="text-sm text-[#1A9AFF] p-3 border"
        /> */}
        <div className='text-sm text-[#1A9AFF] p-3 border'>
          {formatTime(elapsedTime)}
        </div>
      </div>
      <Stepper elapsedTime={elapsedTime} />
      <Footer />
    </>
  );
};

export default index;
