import Desing from "../component/desing";
import Projects from "../component/projects";
import Service from "../component/service";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  return (
    <div className="lg:w-[1200px] mx-auto px-4 mt-4">
      <div className="h-screen relative">
        <img
          className="object-cover h-full w-full relative"
          src="/main.jpg"
          alt=""
        />
        <div className="absolute inset-0 justify-center flex flex-col items-center">
          <h1 className="text-white text-6xl lg:text-6xl md:text-4xl sm:text-3xl font-bold">
            Home Styling
          </h1>
          <h5 className="text-black text-2xl lg:text-2xl md:text-xl sm:text-lg mt-10 font-serif">
            We Design Your Lifestyle
          </h5>
        </div>
      </div>

      <About />
      <Projects />
      <Desing />
      <Service />
      <Contact />
    </div>
  );
}
