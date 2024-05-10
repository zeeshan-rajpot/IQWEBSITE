import React from 'react'
import Navbar from '../../Compunents/Navbar'
import Footer from '../../Compunents/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar/>
{/* hero section */}
      <div className=" w-11/12 md:5/6 lg:5/6 2xl:w-4/6  py-10 lg:pt-16 2xl:py-[105px]  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 ">
          <div className="flex flex-col gap-y-7 pb-5 bg-bghero bg-no-repeat">
            <h2 className="text-themeDarkBlue text-3xl md:text-4xl lg:text-5xl font-semibold">
            Welcome to the <span className="text-theme">International</span>  IQ test. {" "}
              
            </h2>
            <p className="lg:text-xl font-normal text-ptheme ">
            We will evaluate, through 40 questions, your ability to learn, to understand, to form concepts, to process information, and to apply logic and reason.
            Your results at the end of this test will inform you of your IQ as well as your position in comparison to the population using several statistics.
            </p>

            <div>
              <Link to="/schedule-service" className="px-[100px] bg-theme text-white px-8 py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200">
              Start the test
              </Link>
            </div>
            <div className='flex justify-center text-center' >
              <img src="/Ellipse158.svg" alt="" srcset="" />
            </div>
          </div>

          <div className=" hidden md:block">
            <div className="mt-5">
              <img
                src="/91685272.svg"
                alt="hero-one"
                className="w-[500px] mx-auto"
              />
            </div>
          
          </div>
        </div>
      </div>
      {/* hero section end */}




<section className='bg-[#F9FCFF] '>
<div className=" w-11/12 md:5/6 lg:5/6 2xl:w-4/6  py-5 md:py-10 lg:pt-16 2xl:py-[105px]  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4  ">
        <div className=" block md:block col-span-1">
            <div className="w-64 md:w-[80%]  m-auto text-center">
              <img
                src="/Rectangle 329.png"
                alt="hero-one"
                className="w-[500px] mx-auto"
              />
            </div>
          
          </div>
          <div className="flex flex-col gap-y-7  align-center bg-no-repeat col-span-3 mt-[94px]">
            <h2 className="text-themeDarkBlue text-3xl md:text-3xl lg:text-4xl font-semibold">
            The purpose of the IQ test
              
            </h2>
            <p className="lg:text-xl font-normal text-ptheme text-justify md:text-start">
            We will evaluate, through 40 questions, your ability to learn, to understand, to form concepts, to process information, and to apply logic and reason.
            Your results at the end of this test will inform you of your IQ as well as your position in comparison to the population using several statistics.
            </p>

            <div className='flex justify-center text-center' >
              <img src="/Ellipse158.svg" alt="" srcset="" />
            </div>
            
          </div>

        
        </div>
      </div>
</section>




<section className='bg-none md:bg-bgellipse bg-no-repeat bg-contain bg-opacity-90'>
<div className=" w-11/12 md:5/6 lg:5/6 2xl:w-4/6  py-10 lg:pt-16 2xl:py-[105px]  mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 ">
        <div className=" block ">
            <div className="mt-5 text-center">
            <h3 className='text-3xl   lg:text-4xl 2xl:text-5xl font-bold mb-5'>
            The purpose of the IQ test
            </h3>
            <div className='md:w-[90%] m-auto'>
            <p className="lg:text-lg 2xl:text-xl font-normal text-ptheme ">
            The IQ test can be used for many reasons. It allows determining one's level of being able to learn, to understand, to form concepts, to process information, to apply logic and reason, in comparison to the population. It is indicative and can represent an influence on non-common characters that can be encountered in society, whether relational such as isolation, rejection or distance, or intellectual such as ease or difficulties encountered in intellectual activities. In another way, it can also explain successes acquired in ways easier than others by individuals.
            </p>
            </div>
      
            </div>
          
          </div>

          <div className=" block ">
            <div className="mt-5 text-center">
            <h3 className='text-3xl   lg:text-4xl 2xl:text-5xl font-bold mb-5'>
            The mental handicap
            </h3>
            <div className='md:w-[90%] m-auto'>
            <p className=" lg:text-lg 2xl:text-xl font-normal text-ptheme">
            People with very low intellectual quotients 70 are defined as holders of a mental disability disorder and may experience, despite the intensity of work, more difficulty than others in intellectual activities and may also maintain, in spite of themselves, difficulties in social behaviors despite the strength of their will. The main causes that may explain the development of this disability would be nutritional problems during pregnancy or birth problems, such as a lack of oxygen. Exposure to certain diseases, such as whooping cough or measles, with delayed care could also explain the mental disability.
            </p>
            </div>
      
            </div>
          
          </div>
        </div>
      </div>
</section>




  <section className='bg-[#F9FCFF] '>
<div className=" w-11/12 md:5/6 lg:5/6 2xl:w-4/6 py-2 md:py-10 lg:pt-16 2xl:py-[105px]  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4  ">
   
          <div className="flex flex-col gap-y-3  align-center bg-no-repeat col-span-3 md:mt-[94px]">
            <h2 className="text-themeDarkBlue text-3xl md:text-3xl lg:text-4xl font-semibold">
            The gifted
              
            </h2>
            <p className="lg:text-xl font-normal text-ptheme text-justify md:text-start">
            People with much higher than average intellectual quotients (> 130), also called ‘gifted’, tend to be more at ease than others during intellectual activities. The most well-known characteristics of the gifted are:
            </p>
{/* <ul> */}
  <li className='lg:text-xl font-normal text-ptheme text-justify md:text-start'>Curiosity and a thirst for learning: they ask themselves a lot of questions and are able to acquire knowledge on their own</li>
  <li className='lg:text-xl font-normal text-ptheme text-justify md:text-start'>Perfectionism, the need to do things accurately and excellently.</li>
  <li className='lg:text-xl font-normal text-ptheme text-justify md:text-start'>The fear of oneself, of who one is, of the consequences of their overflowing thoughts and emotions.</li>
  <li className='lg:text-xl font-normal text-ptheme text-justify md:text-start'>Interest that sometimes reaches an obsessive level in certain themes.</li>
  <li className='lg:text-xl font-normal text-ptheme text-justify md:text-start'>Hypersensitivity that is often invisible from the outside.</li>
  <li className='lg:text-xl font-normal text-ptheme text-justify md:text-start'>A great ability to pay attention and concentrate.</li>
  <li className='lg:text-xl font-normal text-ptheme text-justify md:text-start'>Meta-cognitive awareness: they know how to identify and reuse plans, concepts and strategies that they can employ to solve problems.</li>
{/* </ul> */}
            <div>
           
            </div>
            <div className='flex justify-center text-center' >
              <img src="/Ellipse158.svg" alt="" srcset="" />
            </div>
          </div>
          <div className=" block md:block col-span-1">
            <div className="w-64 md:w-[90%] m-auto flex items-center mt-24 text-center">
              <img
                src="/Rectangle 320.png"
                alt="hero-one"
                className="w-[500px] mx-auto"
              />
            </div>
          
          </div>
        
        </div>
      </div>
</section>    


      

   

      <Footer/>
    </div>
  )
}

export default Home
