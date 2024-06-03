const Footer = () => {
  return (
    <section className="bg-[#E5F4FF]">
      <footer className="max-w-screen-xl flex flex-wrap items-center justify-between p-3 m-auto border-gray-200 border-t md:flex md:items-center md:justify-between md:p-6  ">
        <span className="text-sm text-gray-500 sm:text-center ">
          @ 2024 © international-IQ-test.com
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a className="hover:underline">Terms of Use</a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
