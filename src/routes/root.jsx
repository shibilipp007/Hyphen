import "boxicons/css/boxicons.min.css";
import { useState } from "react";

export default function Root({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="h-16 shadow-md z-50 relative">
        <div className=" lg:w-[1200px] mx-auto px-5 flex flex-row items-center justify-between ">
          <img className="h-16  " src="/kl2.png" alt="Logo" />
          <nav>
            <ul className="hidden md:flex flex-row justify-between items-center gap-4">
              <li>
                <a
                  className="hover:bg-slate-200 my-[5px] py-5 px-[10px] rounded-lg"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-slate-200 my-[5px] py-5 px-[10px] rounded-lg"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-slate-200 my-[5px] py-5 px-[10px] rounded-lg"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-slate-200 my-[5px] py-5 px-[10px] rounded-lg"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-slate-200 my-[5px] py-5 px-[10px] rounded-lg"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>{" "}
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-gray-500 focus:outline-none focus:text-gray-700"
                onClick={toggleMenu}
              >
                {/* Icon for Menu Button */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex  flex-col items-center p-4 space-y-2 gap-2 bg-slate-100">
            <li>
              <a className="hover:bg-slate-200  py-4 px-20 rounded-xl" href="#">
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:bg-slate-200  py-4 px-20 rounded-xl"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:bg-slate-200  py-4 px-20 rounded-xl"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="hover:bg-slate-200  py-4 px-20 rounded-xl"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:bg-slate-200  py-4 px-20 rounded-xl"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
      {children}
      <footer>
        <div className=" lg:w-[1200px] mx-auto grid  md:grid-cols-2 justify-center items-center my-9 px-10 py-5 border-t-2 border-gray-200">
          <div className="flex flex-col items-center justify-center  ml-5">
            <img className="w-[200px] " src="/baground.png" alt="" />
            <div className="flex flex-row mt-2 ">
              <img src="/map.png " alt="" />
              <span>Kurumathur,Taliparamba,Kannur,Kerala </span>
            </div>
            <h6 className="ml-6">Follow Us On</h6>
            <div className=" flex flex-row mt-2 ml-6  gap-2">
              <img src="/instagram-logo-24.png" alt="" />
              <img src="/facebook.png" alt="" />
              <img src="/twitter.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h5 className="font-bold text-lg ">Services </h5>

            <p className="mt-4">
              Architectural Design | Construction | Permit acquisition and
              Regulatory compliance | Custom Home Building | House Renovation |
              Interior Desing | Modular Kitchen | Land clearing and grading |
              Commercial construction
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
