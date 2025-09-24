import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const gallry = [
  { imgUrl: "/project-1.jpg" },
  { imgUrl: "/project-2.jpg" },
  { imgUrl: "/project-3.jpg" },
  { imgUrl: "/project-4.jpg" },
  { imgUrl: "/project-5.jpg" },
  { imgUrl: "/project-6.jpg" },
  { imgUrl: "/project-7.jpg" },
  { imgUrl: "/project-8.jpg" },
];

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
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="mt-16">
      <h1 className="text-center text-4xl font-bold">Our Contributions</h1>

      <motion.div
        className="mt-16 mb-8"
        variants={gridVarients}
        initial="hidden"
        animate="show"
      >
        <Masonry
          className="flex gap-4"
          breakpointCols={{
            default: 4,
            640: 2,
          }}
        >
          {gallry.map(({ imgUrl }, i) => (
            <motion.div key={i} variants={gridSquare} className="mb-4">
              <img
                className="object-cover w-full h-full rounded-md shadow-md hover:scale-[1.02] transition-transform duration-300"
                src={imgUrl}
                alt={`Project ${i + 1}`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </Masonry>
      </motion.div>
    </section>
  );
}
