import React, { useState, useMemo, useEffect } from "react";
import Navbar from "../../Compunents/Navbar";
import Footer from "../../Compunents/Footer";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import { userApi } from "../../api";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Payment = () => {
  const [paymentCompolete, setPaymentCompolete] = useState(true);
  const [payment, setPayment] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [value, setValue] = useState("");
  const [diplomaValue, setDiplomaValue] = useState(null);
  const [fieldValue, setFieldValue] = useState(null);

  const handlePayment = () => {
    setPayment(!payment);
  };

  const handleClick = () => {
    setPaymentCompolete(!paymentCompolete);
  };

  const options = useMemo(() => {
    return countryList()
      .getData()
      .map((country) => ({
        value: country.value,
        label: country.label,
      }));
  }, []);

  const changeHandler = (value) => {
    setValue(value);
  };

  useEffect(() => {
    if (value) {
      console.log(`Selected country: ${value.value}`);
    }
  }, [value]);

  const diplomaOptions = [
    { value: "No Diploma", label: "No Diploma" },
    { value: "2 Year SD", label: "2 Year SD" },
    { value: "3 Year SD", label: "3 Year SD" },
    { value: "4 Year SD", label: "4 Year SD" },
    { value: "5+ Year SD", label: "5+ Year SD" },
  ];

  const diplomaHandler = (selectedOption) => {
    setDiplomaValue(selectedOption);
    console.log("study duration", selectedOption);
  };
  const fieldOptions = [
    { value: "High School", label: "High School" },
    { value: "Agriculture", label: "Agriculture" },
    { value: "Art & Design", label: "Art & Design" },
    { value: "Education", label: "Education" },
    { value: "Law", label: "Law" },
    { value: "Psychology", label: "Psychology" },
    { value: "Math", label: "Math" },
  ];

  const fieldHandler = (selectedOption) => {
    setFieldValue(selectedOption);
    console.log("study field:", selectedOption);
  };

  const marks = sessionStorage.getItem("totalScore");
  const iqScore = sessionStorage.getItem("calculatedIQ");

  const handleSubmit = async () => {
    const postData = {
      fullname,
      email,
      country: value.value,
      age,
      studyDuration: diplomaValue ? diplomaValue.label : "",
      studyLevel: fieldValue ? fieldValue.label : "",
      marks: marks,
      iqScore: iqScore,
    };
    // console.log(postData);

    try {
      // Save result to API
      const response = await userApi.saveResult(postData);
      // console.log("Data saved successfully:", response);

      // Prepare EmailJS email data
      const emailData = {
        user_name: fullname,
        user_email: email,
        user_country: value.label,
        user_age: age,
        user_score: marks,
        user_iq: iqScore,
      };

      // Send email using EmailJS
      await emailjs.send(
        "service_a6ysh0l", // Replace with your EmailJS service ID
        "template_f921ism", // Replace with your EmailJS template ID
        emailData,
        "EuRQ0kgYylG3KHrjK" // Replace with your EmailJS user ID
      );

      // console.log("Email sent successfully!");
      console.log("loged data", emailData);

      toast.success("Email sent successfully!");
      setPaymentCompolete(false);
    } catch (error) {
      console.error("Error:", error);
    }
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
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Email"
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="given-email"
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900  ring-gray-500 shadow-md  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                      <Select
                        options={options}
                        value={value}
                        onChange={changeHandler}
                        className="border-0"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="age"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Age
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="18 Years"
                        type="number"
                        min={0}
                        name="age"
                        id="age"
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900  ring-blue-300 shadow-md  placeholder:text-gray-400 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="study_duration"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Study Duration
                    </label>
                    <div className="mt-2">
                      <Select
                        options={diplomaOptions}
                        value={diplomaValue}
                        onChange={diplomaHandler}
                        className="border-0"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="study_field"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Study Field
                    </label>
                    <div className="mt-2">
                      <Select
                        options={fieldOptions}
                        value={fieldValue}
                        onChange={fieldHandler}
                        className="border-0"
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
                      onClick={() => {
                        handleSubmit();
                      }}
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
                          IQ: {iqScore}
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
