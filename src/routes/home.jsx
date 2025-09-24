import Desing from "../component/desing";
import Projects from "../component/projects";
import Service from "../component/service";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  return (
    <div className="lg:w-[1200px] mx-auto px-4 mt-4 bg-[#fbf8ef]">
      <div className="relative bg-gray-50 flex flex-col lg:flex-row">
        {/* Image */}
        <div>
          <img
            className="object-cover w-full lg:w-[80%] lg:ml-auto"
            src="/modern-residential.jpg"
            alt=""
          />
        </div>

        {/* Text Content */}
        <div
          className={`
        flex flex-col justify-center text-left px-4 py-6
        sm:px-6 md:px-12
        lg:absolute lg:inset-0 lg:ml-16
      `}
        >
          <h1 className="text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            Build Your
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FEBA17]">
            Dream Home
          </h3>
          <h6 className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg font-bold text-gray-700">
            We craft homes that reflect your vision <br />
            From your ideas to your keys <br />
            Homes built with purpose and precision
          </h6>
          <div className="bg-yellow-600 text-white px-4 py-2 rounded-lg mt-4 sm:mt-6 w-fit">
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>

      <About />
      <Desing />
      <Projects />
      <Service />
      <Contact />
    </div>
  );
}
