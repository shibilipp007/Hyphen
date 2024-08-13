import { motion } from "framer-motion";

export default function Projects() {
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
    <div id="projects" className="mt-16">
      <h1 className="text-center text-4xl font-bold font-serif">My Projects</h1>
      <div></div>
      <motion.div
        className="mt-16 mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={gridVarients}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={{ gridSquare }}>
          <img
            className="object-cover w-full h-full rounded-md"
            src="/project-1.jpg"
            alt=""
          />
        </motion.div>
        <motion.div variants={{ gridSquare }} className="flex items-center">
          {" "}
          <img
            className="object-cover w-full h-[80%] justify-center rounded-md"
            src="/project-2.jpg"
            alt=""
          />
        </motion.div>
        <motion.div>
          <img
            className="object-cover w-full h-full rounded-md"
            src="/project-3.jpg"
            alt=""
          />
        </motion.div>
        <motion.div className="flex items-center">
          <img
            className="object-cover w-full h-[70%] rounded-md"
            src="/project-4.jpg"
            alt=""
          />
        </motion.div>
        <motion.div className="flex items-end">
          <img
            className="object-cover w-full h-[85%] items-baseline rounded-md"
            src="/project-5.jpg"
            alt=""
          />
        </motion.div>
        <motion.div>
          <img
            className="object-cover w-full h-full rounded-md"
            src="/project-6.jpg"
            alt=""
          />
        </motion.div>
        <motion.div className="flex items-start">
          <img
            className="object-cover w-full h-[60%] rounded-md"
            src="/project-7.jpg"
            alt=""
          />{" "}
        </motion.div>
        <motion.div>
          <img
            className="object-cover w-full h-full rounded-md"
            src="/project-8.jpg"
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
