import { formatDistanceToNow } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userApi } from '../../api';
import Footer from '../../Compunents/Footer';
import Navbar from '../../Compunents/Navbar';
import HomePageBlog from '../Blogs/HomePageBlog.jsx';
import Statistics from './Statistics';
const Home = () => {
  const [showAdditionalColumns, setShowAdditionalColumns] = useState(false);
  const [topScorers, setTopScorers] = useState([]);
  // State to store para data
  const [paraData, setParaData] = useState({});
  const handleImageClick = () => {
    setShowAdditionalColumns(!showAdditionalColumns);
  };

  const fetchTopScorers = async () => {
    try {
      const response = await userApi.topScores();
      setTopScorers(response);
      console.log(response);
    } catch (error) {
      console.error('Error fetching top scorers:', error);
    }
  };

  useEffect(() => {
    fetchTopScorers();
  }, []);
  // Fetch para data dynamically from the API
  const fetchParaData = async paraNumber => {
    try {
      const response = await fetch(
        `https://lionfish-app-p3lvn.ondigitalocean.app/admin/getdivdata/${paraNumber}`
      );
      const data = await response.json();
      setParaData(prevState => ({
        ...prevState,
        [`para${paraNumber}`]: data,
      }));
    } catch (error) {
      console.error('Error fetching para data:', error);
    }
  };

  useEffect(() => {
    fetchTopScorers();

    // Fetch data for para 1, 2, and 3
    fetchParaData(1);
    fetchParaData(2);
    fetchParaData(3);
  }, []);
  const timestamp =
    topScorers.length > 0
      ? formatDistanceToNow(new Date(topScorers[0].createdAt), {
          addSuffix: true,
        })
      : null;

  return (
    <div>
      <Navbar />
      {/* hero section */}
      <div className=' w-11/12 md:5/6 lg:5/6 2xl:w-4/6  py-10 lg:pt-16 2xl:py-[105px]  mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 '>
          <div className='flex flex-col gap-y-7 pb-5 bg-bghero bg-no-repeat'>
            <h2 className='text-themeDarkBlue text-3xl md:text-4xl lg:text-5xl font-semibold'>
              Welcome to the <span className='text-theme'>International</span>{' '}
              IQ test.{' '}
            </h2>
            <p className='lg:text-xl font-normal text-ptheme '>
              We will evaluate, through 40 questions, your ability to learn, to
              understand, to form concepts, to process information, and to apply
              logic and reason. Your results at the end of this test will inform
              you of your IQ as well as your position in comparison to the
              population using several statistics.
            </p>

            <div>
              <Link
                to='/takeTest'
                className='px-[100px] bg-theme text-white  py-3 border border-theme rounded-full  hover:bg-transparent hover:text-theme duration-200'
              >
                Start the test
              </Link>
            </div>
            <div className='flex justify-center text-center'>
              <img src='/Ellipse158.svg' alt='' srcset='' />
            </div>
          </div>

          <div className=' hidden md:block'>
            <div className='mt-5'>
              <img
                src='/91685272.svg'
                alt='hero-one'
                className='w-[500px] mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
      {/* hero section end */}
      {/* Top 3 */}
      <section>
        <div className='text-center'>
          <h2 className='text-themeDarkBlue text-3xl md:text-4xl lg:text-5xl font-semibold'>
            Top 3 international
          </h2>
          <p className='lg:text-2xl font-normal text-ptheme '>Last hour</p>
        </div>
        <div className=' w-11/12 md:5/6 lg:5/6 2xl:w-4/6  py-10 lg:pt-6 2xl:py-[55px]  mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-12 p-4 gap-7'>
            {topScorers.map((item, index) => (
              <div
                key={index}
                className='col-span-4 shadow rounded-xl p-3 flex items-center justify-start space-y-6'
              >
                <div className='absolute translate-x-[240px] translate-y-[-60px] md:translate-x-[240px]'>
                  <img src='/Group.png' alt='' />
                </div>
                <div>
                  <img src='/China.png' alt='' className='w-32' />
                </div>
                <div className='ms-3'>
                  <p>
                    <b>{item.fullname}</b>
                  </p>
                  <p>IQ: {item.iqScore || 90}%</p>
                  <small>{timestamp || '1 Hour ago'}</small>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center flex flex-col  items-center mt-4'>
            <p className='lg:text-2xl font-normal text-ptheme '>
              Pesents Results
              <br />
              UAE
            </p>
            <img
              src='/Double Alt Arrow Right.png'
              alt=''
              className={`w-[54px] ${
                !showAdditionalColumns ? '' : 'rotate-180'
              }`}
              onClick={handleImageClick}
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-12 p-4 gap-7'>
            {showAdditionalColumns &&
              data.map((item, index) => (
                <div
                  key={index}
                  className='col-span-4 shadow rounded-xl p-3 flex items-center justify-start'
                >
                  <div>
                    <img src='/China.png' alt='' className='w-32' />
                  </div>
                  <div className='ms-3'>
                    <p>
                      <b>{item.name}</b>
                    </p>
                    <p>IQ: {item.iq}%</p>
                    <small>{item.timestamp}</small>
                  </div>
                </div>
              ))}

            {!showAdditionalColumns && <div></div>}
          </div>
        </div>
      </section>
      {/* Top 3 end */}

      {/* Para number 1 */}
      <section className='bg-[#F9FCFF] bg-bgIqTest bg-no-repeat bg-contain bg-right-bottom'>
        <div className='w-11/12 md:5/6 lg:5/6 2xl:w-4/6 py-5 md:py-10 lg:pt-16 2xl:py-[105px] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className='block md:block col-span-1'>
              <div className='w-64 md:w-[80%] m-auto text-center'>
                <img
                  src={paraData?.para1?.image || '/Rectangle 329.png'}
                  alt='hero-one'
                  className='w-[500px] mx-auto'
                />
              </div>
            </div>
            <div className='flex flex-col gap-y-7 align-center bg-no-repeat col-span-3 mt-[94px]'>
              <h2 className='text-themeDarkBlue text-3xl md:text-3xl lg:text-4xl font-semibold'>
                {paraData?.para1?.title || 'The purpose of the IQ test'}
              </h2>
              <p className='lg:text-xl font-normal text-ptheme text-justify md:text-start'>
                {paraData?.para1?.description ||
                  'We will evaluate, through 40 questions, your ability to learn, to understand, to form concepts, to process information, and to apply logic and reason.'}
              </p>

              <div className='flex justify-center text-center'>
                <img src='/Ellipse158.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para number 2 */}
      <section className='bg-none md:bg-bgellipse bg-no-repeat bg-contain bg-opacity-90'>
        <div className='w-11/12 md:5/6 lg:5/6 2xl:w-4/6 py-10 lg:pt-16 2xl:py-[105px] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12'>
            <div className='block'>
              <div className='mt-5 text-center'>
                <h3 className='text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-5'>
                  {paraData?.para2?.title || 'The purpose of the IQ test'}
                </h3>
                <div className='md:w-[90%] m-auto'>
                  <p className='lg:text-lg 2xl:text-xl font-normal text-ptheme'>
                    {paraData?.para2?.description ||
                      "The IQ test can be used for many reasons. It allows determining one's level of being able to learn, to understand, to form concepts, to process information, to apply logic and reason, in comparison to the population."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para number 3 */}
      <section className='bg-[#F9FCFF] '>
        <div className=' w-11/12 md:5/6 lg:5/6 2xl:w-4/6 py-2 md:py-10 lg:pt-16 2xl:py-[105px]  mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4  '>
            <div className='flex flex-col gap-y-3  align-center bg-no-repeat col-span-3 md:mt-[94px]'>
              <h2 className='text-themeDarkBlue text-3xl md:text-3xl lg:text-4xl font-semibold'>
                {paraData?.para3?.title || 'Culture and testing'}
              </h2>
              <p className='lg:text-xl font-normal text-ptheme text-justify md:text-start'>
                {paraData?.para3?.description ||
                  'Cultural factors can play a significant role in IQ testing, with certain biases leading to unfair evaluations.'}
              </p>

              <div></div>
              <div className='flex justify-center text-center'>
                <img src='/Ellipse158.svg' alt='' srcset='' />
              </div>
            </div>
            <div className=' block md:block col-span-1'>
              <div className='w-64 md:w-[90%] m-auto flex items-center mt-24 text-center'>
                <img
                  src={paraData?.para3?.image || '/Rectangle 329.png'}
                  alt='hero-one'
                  className='w-[500px] mx-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Statistics />

      <section>
        <HomePageBlog />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
