import { MISSION } from "../constants";
import missionimg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="mx-auto container mb-8" id="mission">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Mission
      </h2>
      <div className="relative flex items-center justify-center">
        <motion.video
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          src={mission}
          className="w-full rounded-3xl "
          autoPlay
          muted
          loop
          playsInline
          poster={missionimg}
        ></motion.video>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="absolute h-full w-full rounded-3xl bg-black/40"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y:10 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="absolute max-w-lg tracking-tighter lg:text-3xl"
        >
          {MISSION}
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;
