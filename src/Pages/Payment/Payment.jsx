import React, { useState } from "react";
import Navbar from "../../Compunents/Navbar";
import Footer from "../../Compunents/Footer";
import { Link } from "react-router-dom";

const Payment = () => {
  const [paymentCompolete, setPaymentCompolete] = useState(true);
  const [payment, setPayment] = useState(true);

  const handlePayment = () => {
    setPayment(!payment);
  };

  const handleClick = () => {
    setPaymentCompolete(!paymentCompolete);
  };
  return (
    <>
      <div>
        <Navbar />
        {paymentCompolete && (
          <div>
            <div className="flex justify-center text-center">
              <img
                src="/Group 1171275215.png"
                className="w-[200px] lg:w-[300px] 2xl:w-[400px]"
                alt=""
              />
            </div>
            <div className=" w-11/12 md:5/6 lg:5/6 2xl:w-4/6  py-4   mx-auto">
              <div className="flex flex-col justify-center text-center">
                <h2 className="text-themeDarkBlue text-xl md:text-2xl lg:text-3xl font-semibold">
                  Congrats!
                </h2>
                <h2 className="text-themeDarkBlue text-xl md:text-2xl lg:text-3xl font-semibold">
                  You have just completed the test
                </h2>
                <p className="lg:text-xl font-normal text-ptheme mt-3">
                  To build your results and statistics, please fill this form
                  and pay 5$.
                </p>
              </div>
            </div>

            <section>
              <div className=" w-11/12 md:w-5/6 lg:w-4/6 2xl:w-4/6  py-4   mx-auto shadow rounded-xl mb-12">
                <div className="w-11/12 md:w-5/6 lg:w-5/6 2xl:w-5/6 mx-auto mt-0 md:mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900  ring-gray-500 shadow-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Country"
                        type="text"
                        name="country"
                        id="country"
                        autoComplete="family-name"
                        className="block w-full rounded-md px-3  py-1.5 text-gray-900 shadow-md  ring-gray-300 placeholder:text-gray-400 border-0   sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <>
                  <div className="text-center">
                    <p className="lg:text-xl font-normal text-ptheme my-6 ">
                      Choose payment method and fill details
                    </p>
                  </div>
                  <div className=" flex justify-center ">
                    <img
                      src="/Frame 989.png"
                      alt=""
                      className=" w-28 md:w-32 h-16"
                    />
                    <img
                      src="/Frame 991.png"
                      alt=""
                      className="w-28 md:w-32  h-16"
                    />
                    <img
                      src="/Frame 992.png"
                      alt=""
                      className="w-28 md:w-32  h-16"
                    />
                  </div>

                  <div className="w-11/12 md:w-5/6 lg:w-5/6 2xl:w-5/6 mx-auto  mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-6">
                      <label className="block text-md text-[#717171] font-thin ">
                        Enter your Card Details to save Info
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name on card
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="  Full Name"
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900  ring-gray-500 shadow-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="card-number"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Card Number
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="XXXX   XXXX   XXXX   XXXX"
                          type="number"
                          name="card-number"
                          id="card-number"
                          autoComplete="family-name"
                          className="block w-full rounded-md  py-1.5 px-2 text-gray-900 shadow-md  ring-gray-300 placeholder:text-gray-400 border-0   sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className=" col-span-6 sm:col-span-3">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Expiry date
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="MM/YY"
                          type="text"
                          name="date"
                          id="date"
                          autoComplete="family-name"
                          className="block w-full rounded-md  py-1.5 px-2 text-gray-900 shadow-md  ring-gray-300 placeholder:text-gray-400 border-0   sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="security-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Security code
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="CVV"
                          type="text"
                          name="security-code"
                          id="security-code"
                          autoComplete="family-name"
                          className="block w-full rounded-md  py-1.5 px-2 text-gray-900 shadow-md  ring-gray-300 placeholder:text-gray-400 border-0   sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-12">
                    <button
                      onClick={handleClick}
                      className="px-[100px] bg-theme text-white  py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200"
                    >
                      Pay Now
                    </button>
                  </div>
                </>
              </div>
            </section>
          </div>
        )}
        {!paymentCompolete && (
          <div>
            <section>
              <div className=" w-11/12 md:w-5/6 lg:w-4/6 2xl:w-4/6  py-4 mt-24   mx-auto shadow rounded-xl mb-12">
                <div className="text-start mx-3 md:mx-12">
                  <p className="lg:text-2xl font-md text-black mt-6 md:my-6 ">
                    Your IQ- Test Report
                  </p>
                  <div className="flex justify-start items-center">
                    <div className="hidden md:block">
                      <img src="/image 92.png" alt="" />
                    </div>

                    <div>
                      <div className="flex justify-between mt-12 md:mt-0">
                        <p className="lg:text-3xl font-normal text-ptheme ">
                          John Doe
                        </p>
                        <p className="lg:text-xl font-normal text-ptheme ">
                          IQ: 142
                        </p>
                      </div>
                      <p className="lg:text-xl font-normal text-ptheme ">
                        Lorem ipsum dolor sit amet consectetur. Nunc vitae morbi
                        porta nibh id eu faucibus senectus. Dolor sit amet
                        consectetur. Nunc vitae morbi porta nibh id eu faucibus
                        senectus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default Payment;
