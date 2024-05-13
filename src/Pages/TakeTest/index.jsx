import React from "react";
import Stepper from "../../Compunents/Stepper";
import Navbar from "../../Compunents/Navbar";
import Footer from "../../Compunents/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center px-4 lg:px-72 py-6">
        <h1 className="text-xl lg:text-3xl font-bold">Test</h1>
        <p className="text-sm text-[#1A9AFF] p-3 border">00:02:39</p>
      </div>
      <Stepper />
      <Footer/>
    
    </>
  );
};

export default index;
