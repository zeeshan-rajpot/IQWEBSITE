import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='bg-[#E5F4FF]'>
      <footer className='max-w-screen-xl flex flex-wrap items-center justify-between p-3 m-auto border-gray-200 border-t md:flex md:items-center md:justify-between md:p-6  '>
        <span className='text-sm text-gray-500 sm:text-center '>
          @ 2024 © international-IQ-test.com
        </span>

        <div className='flex justify-center items-center'>
          <a
            href='https://x.com/iqdemie?s=21'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/public/x.svg' alt='X' className='w-8 ms-2' />
          </a>
          <a
            href='https://www.instagram.com/iqdemie?igsh=MW1uMjhlMzVyMTdhOQ=='
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/public/instagram.svg'
              alt='Instagram'
              className='w-8 ms-2'
            />
          </a>
          <a
            href='https://www.tiktok.com/@iqdemie?_t=8qXK2p88U0j&_r=1'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/public/tiktok.svg' alt='TikTok' className='w-8 ms-2' />
          </a>
        </div>

        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0'>
          <Link to='/TermsPage'>
            <li>
              <a className='hover:underline'>Terms of Use</a>
            </li>
          </Link>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
