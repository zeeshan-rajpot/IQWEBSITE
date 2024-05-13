import React from "react";
import Stepper from "../../Compunents/Stepper";
import Navbar from "../../Compunents/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center px-4 lg:px-72 py-6">
        <h1 className="text-xl lg:text-3xl font-bold">Test</h1>
        <p className="text-sm text-[#1A9AFF] p-3 border">00:02:39</p>
      </div>
      <Stepper />
      <div className=" py-0 md:py-12 flex justify-center ">
        <p className="text-xl lg:text-3xl">Choose the missing figure</p>
      </div>
      <div className="flex justify-center">
        <img src="pngegg 1.png" alt="" className="w-9/12  lg:w-4/12" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center">
        <div>
          <img src="Frame 39.png" alt="" className="w-4/12" />
        </div>
        <div>
          {" "}
          <img src="Frame 40.png" alt="" className="w-4/12" />
        </div>
        <div>
          {" "}
          <img src="Frame 41.png" alt="" className="w-4/12" />
        </div>
        <div>
          {" "}
          <img src="Frame 39 (1).png" alt="" className="w-4/12" />
        </div>
        <div>
          {" "}
          <img src="Frame 40 (1).png" alt="" className="w-4/12" />
        </div>
        <div>
          {" "}
          <img src="Frame 41 (1).png" alt="" className="w-4/12" />
        </div>
      </div>
    </>
  );
};

export default index;
