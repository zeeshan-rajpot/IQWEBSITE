import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-8" alt="iq Logo" />
            <span className="self-center text-black text-2xl font-semibold whitespace-nowrap ">
              IQ-Test
            </span>
          </Link>
          <div className="flex md:order-2">
            <div className="relative hidden md:block">
              <div>
                <select
                  id="languageSelect"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#1a9aff] border sm:text-sm rounded-md"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
            </div>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-search"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block w-full  md:w-auto md:order-1`}
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <NavLink
                  to="/takeTest"
                  className="block py-2 px-3 md:p-0 text-sm	"
                  aria-current="page"
                >
                  Take the test
                </NavLink>
              </li>
              <li>
                <a className="block py-2 px-3 md:p-0 text-sm	">
                  Recover my results
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-sm	">
                  Reliability of the test
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-sm	">
                  Average IQ per country{" "}
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-sm	">
                  Contact{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
