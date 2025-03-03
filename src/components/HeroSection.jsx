import { motion } from "framer-motion";
import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute -z-20 inset-0 h-full w-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          muted
          autoPlay
          src={video}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={logo}
          className="w-full p-4"
          alt=""
        />
        <p className="p-4 tracking-tighter text-lg text-white ">Paris</p>
      </div>
    </section>
  );
};

export default HeroSection;
