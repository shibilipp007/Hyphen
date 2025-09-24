import "boxicons/css/boxicons.min.css";
import { useState } from "react";

export default function Root({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#FBF8EF]">
      <header className="h-20 shadow-md z-50 ">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/ChatGPTI.png" alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              About
            </a>
            <a
              href="#service"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white shadow-md absolute top-16 left-0 w-full z-50`}
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              About
            </a>
            <a
              href="#service"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-600 font-medium transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {children}
      <footer>
        <div className="w-full lg:w-[1200px] mx-auto grid  md:grid-cols-2 justify-center items-center my-9 px-10 py-5 border-t-2 border-gray-200">
          <div className="flex flex-col items-center justify-center  lg:ml-5">
            <img className="w-[200px] " src="/ChatGPTI.png" alt="" />
            <div className="flex flex-row mt-2 ">
              {/* <img src="/map.png " alt="" className="w-8 h-8" /> */}
              <span className="text-center">
                opposite Juma masjid pokkund <br />
                Kurumathur,Taliparamba,Kannur,Kerala
              </span>
            </div>
            <h6 className="lg:ml-6">Follow Us On</h6>
            <div className=" flex flex-row mt-2 lg:ml-6  gap-2">
              <a
                href="https://www.instagram.com/hyphen_builders"
                target="_blank"
              >
                <img
                  src="/instagram.png"
                  alt="instagram"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.facebook.com/hyphenbuilders" target="_blank">
                <img
                  src="/communication.png"
                  alt="facebook"
                  className="w-9 h-9"
                />
              </a>
              {/* <img src="/twitter.png" alt="" /> */}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <h5 className="font-bold text-lg ">Services </h5>

            <p className="mt-4 sm:text-center">
              Architectural Design | Construction | Permit acquisition and
              Regulatory compliance | Custom Home Building | House Renovation |
              Interior Desing | Modular Kitchen | Land clearing and grading |
              Commercial construction
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center text-sm text-black pb-5">
          Copyright &copy; . Hyphen . All rights reserved
        </div>
      </footer>
    </div>
  );
}
