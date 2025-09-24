import { motion } from "framer-motion";
import useMatchViewport from "./useMatchMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const services = [
  {
    url: "/baseplan.jpeg",
    title: "Architecture",
  },
  {
    url: "/keralahouse.jpeg",
    title: "House Construction",
  },
  {
    url: "/Modern home.jpeg",
    title: "Home Renovation",
  },
  {
    url: "/modularkitchen.jpeg",
    title: "Modular Kitchen",
  },
  {
    url: "/Interior Designe.jpeg",
    title: "Interior Design",
  },
];

export default function Service() {
  const gridVarients = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const gridSquare = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const isMobile = useMatchViewport("(max-width: 640px)");

  return (
    <section id="service" className="mt-11">
      <div className="text-center">
        <h1 className=" text-4xl font-bold ">Our Services</h1>
      </div>
      <div className="flex items-center justify-center my-8">
        <p className="text-lg text-center">
          We HYPHEN BUILDERS, we offer a full range of construction services
          tailored to meet your needs. From custom planning and designing to
          constructing new homes and renovating existing spaces, we handle every
          aspect of building with precision and care. Our experienced team
          specializes in all types of construction projects, ensuring quality
          workmanship and attention to detail. Whether you&apos;re building from
          scratch or transforming your current home, we&apos;re here to bring
          your vision to life with our skilled and dedicated workforce.
        </p>
      </div>
      {isMobile ? (
        <Carousel
          responsive={{
            mobile: { breakpoint: { min: 0, max: 640 }, items: 1 },
          }}
          className="mb-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center border-solid border-inherit shadow-lg rounded-md bg-[#F8F4E1] p-1"
              variants={gridSquare}
            >
              <img
                className="object-cover h-[300px]"
                src={service.url}
                alt={service.title}
                loading="lazy"
              />
              <p className="my-6 text-lg font-semibold">{service.title}</p>
            </motion.div>
          ))}
        </Carousel>
      ) : (
        <motion.div variants={gridVarients} initial="hidden" animate="show">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center border-solid border-inherit shadow-lg rounded-md bg-[#F8F4E1] p-1"
                variants={gridSquare}
              >
                <img
                  className="object-cover h-[300px]"
                  src={service.url}
                  alt={service.title}
                  loading="lazy"
                />
                <p className="my-6 text-lg font-semibold">{service.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
