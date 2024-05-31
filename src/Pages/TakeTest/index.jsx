import React from "react";
import Stepper from "../../Compunents/Stepper";
import Navbar from "../../Compunents/Navbar";
import Footer from "../../Compunents/Footer";
import Countdown from "react-countdown";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center px-4 lg:px-72 py-6">
        <h1 className="text-xl lg:text-3xl font-bold">Test</h1>
        <Countdown
          date={Date.now() + 360000}
          className="text-sm text-[#1A9AFF] p-3 border"
        />
      </div>
      <Stepper />
      <Footer />
    </>
  );
};

export default index;
