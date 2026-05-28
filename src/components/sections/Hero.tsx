import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative mx-auto w-full h-screen overflow-hidden">

      {/* LEFT CONTENT */}
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF]">
              {config.hero.name}
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {config.hero.p[0]}
            <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>

      {/* PROFILE IMAGE */}
      <div className="absolute right-4 top-[70%] md:top-1/2 -translate-y-1/2 z-20">
        <img
          src="profile.png"
          alt="profile"
          className="
            w-[110px]
            h-[110px]
            md:w-[280px]
            md:h-[280px]
            rounded-full
            object-cover
            border-4
            border-[#915EFF]
            shadow-[0_0_40px_rgba(145,94,255,0.8)]
          "
        />
      </div>

      {/* 3D COMPUTER */}
      <div className="absolute inset-0 top-[180px] md:top-0">
        <ComputersCanvas />
      </div>

      {/* SCROLL ICON */}
      <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
