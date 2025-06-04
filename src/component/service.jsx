import { motion } from "framer-motion";

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
          workmanship and attention to detail. Whether you're building from
          scratch or transforming your current home, we're here to bring your
          vision to life with our skilled and dedicated workforce.
        </p>
      </div>
      <motion.div variants={gridVarients} initial="hidden" animate="show">
        <div className=" grid md:grid-cols-2  lg:grid-cols-3 gap-6 my-16 ">
          <motion.div
            className="flex flex-col items-center border-solid border-inherit shadow-lg rounded-md bg-[#F8F4E1] p-1"
            variants={{ gridSquare }}
          >
            <img
              className="object-cover  h-[300px]"
              src="/baseplan.jpeg"
              alt=""
              loading="lazy"
            />

            <p className="my-6 text-lg font-semibold">Architecturing</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center border-solid border-inherit shadow-lg rounded-md bg-[#F8F4E1] p-1"
            variants={{ gridSquare }}
          >
            <img
              className="object-cover  h-[300px]"
              src="/keralahouse.jpeg"
              alt=""
              loading="lazy"
            />

            <p className="my-6 text-lg font-semibold">House Construction</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center border-solid border-inherit shadow-lg rounded-md bg-[#F8F4E1] p-1"
            variants={{ gridSquare }}
          >
            <img
              className="object-cover  h-[300px]"
              src="/Modern home.jpeg"
              alt=""
              loading="lazy"
            />

            <p className="my-6 text-lg font-semibold">House Renovation</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center border-solid border-inherit shadow-sm rounded-md bg-[#F8F4E1] p-1"
            variants={{ gridSquare }}
          >
            <img
              className="object-cover  h-[300px]"
              src="/modularkitchen.jpeg"
              alt=""
              loading="lazy"
            />

            <p className="my-6 text-lg font-semibold">Kitchen ReWorks</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center border-solid border-inherit shadow-sm rounded-md bg-[#F8F4E1] p-1"
            variants={{ gridSquare }}
          >
            <img
              className="object-cover  h-[300px]"
              src="/Interior Designe.jpeg"
              alt=""
              loading="lazy"
            />

            <p className="my-6 text-lg font-semibold">Interior Construction</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
