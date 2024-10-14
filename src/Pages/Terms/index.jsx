import React from 'react';
import Footer from '../../Compunents/Footer';
import Navbar from '../../Compunents/Navbar';
export const index = () => {
  return (
    <div>
      <Navbar />
      <div className=' w-11/12 md:5/6 lg:5/6 2xl:w-4/6  py-10 lg:pt-16 2xl:py-[105px]  mx-auto '>
        <div className='max-w-5xl mx-auto bg-white shadow-lg p-8 rounded-lg'>
          <h1 className='text-3xl font-bold text-center mb-6 text-[#1a9aff]'>
            Terms of Use
          </h1>
          {/* <p className='text-gray-600 text-center mb-8'>Last updated: [Date]</p> */}

          <p className='text-lg text-gray-700 leading-relaxed mb-6'>
            Welcome to IQdemie.com. By accessing and using our website located
            at
            <a href='https://iqdemie.com' className='text-[#1a9aff] underline'>
              https://iqdemie.com
            </a>
            , you agree to comply with and be bound by the following Terms of
            Use and our Privacy Policy. If you do not agree to these Terms,
            please do not use the Site. IQdemie LLC owns and operates the Site.
            For any questions, you can reach us at contact@iqdemie.com.
          </p>

          <div className='space-y-8'>
            <div>
              <h2 className='text-xl font-semibold text-[#1a9aff]'>
                1. Acceptance of Terms
              </h2>
              <p className='text-gray-700 mt-2'>
                By taking the IQ test on IQdemie.com, you agree to these Terms
                of Use. Your use of the website is also governed by our Privacy
                Policy.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-[#1a9aff]'>
                2. One-Time Payment for Results
              </h2>
              <p className='text-gray-700 mt-2'>
                To view your IQ test results, a one-time payment of $4.99 is
                required. This is a non-recurring payment, and there will be no
                additional fees or subscriptions. Once the payment is made, you
                will have access to your IQ test results.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-[#1a9aff]'>
                3. Accuracy and Use of Test Results
              </h2>
              <p className='text-gray-700 mt-2'>
                Our IQ test has been carefully developed by professionals in the
                field and provides a reliable and accurate assessment of
                cognitive abilities. However, as with any online test, the
                results are intended for informational purposes only.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-[#1a9aff]'>
                4. Disclaimer of Liability
              </h2>
              <p className='text-gray-700 mt-2'>
                The administration of IQdemie.com is not liable for any errors,
                interruptions, or issues that may arise from using third-party
                services or payment platforms.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-[#1a9aff]'>
                5. Privacy Policy
              </h2>
              <p className='text-gray-700 mt-2'>
                At IQdemie.com, we prioritize your privacy. We collect your
                email address solely to send your IQ test results to you.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-[#1a9aff]'>
                6. Data Deletion Rights
              </h2>
              <p className='text-gray-700 mt-2'>
                By the General Data Protection Regulation (GDPR), you have the
                right to request the deletion of your IQ test results and any
                data you submitted to generate them.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-[#1a9aff]'>
                7. Technical Disruptions
              </h2>
              <p className='text-gray-700 mt-2'>
                While we strive to ensure that our Site operates smoothly, we
                cannot guarantee uninterrupted access or operation of our IQ
                test and associated services.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-[#1a9aff]'>
                8. Changes to Terms
              </h2>
              <p className='text-gray-700 mt-2'>
                We reserve the right to make changes to these Terms of Use at
                any time. Any modifications will be posted on this page.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold text-[#1a9aff]'>
                Contact Us
              </h2>
              <p className='text-gray-700 mt-2'>
                If you have any questions or concerns about these Terms of Use,
                feel free to contact us at
                <a
                  href='mailto:contact@iqdemie.com'
                  className='text-[#1a9aff] underline'
                >
                  {' '}
                  contact@iqdemie.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default index;
