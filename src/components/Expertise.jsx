import { motion, transform } from "framer-motion";
import { CUSINES } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Expertise = () => {
  return (
    <section className="mx-auto container mb-8" id="expertise">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="my-8 text-center text-3xl tracking-tighter lg:text-4xl"
      >
        Our Expertise
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        {CUSINES.map((cusine, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
          >
            <div className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</div>
            <div className="w-1/3 flex-shrink-0">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="h-auto rounded-3xl"
              />
            </div>
            <div className="pl-8">
              <h3 className="uppercase tracking-tighter text-rose-300 text-2xl ">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">
                {cusine.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;
