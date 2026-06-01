import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
   <section className="relative w-full min-h-screen mx-auto overflow-hidden bg-primary">

      {/* DESKTOP 3D MODEL */}
      <div className="hidden md:block absolute inset-0">
        <ComputersCanvas />
      </div>

{/* MOBILE HERO */}
<div className="md:hidden flex flex-col items-center px-6 pt-4 pb-2 text-center relative z-10">

  <img
    src={`${import.meta.env.BASE_URL}profile.png`}
    alt="profile"
    className="
      w-[130px]
      h-[130px]
      rounded-full
      object-cover
      border-4
      border-[#915EFF]
      shadow-[0_0_30px_rgba(145,94,255,0.8)]
      mb-2
    "
  />

  <h1 className="text-white font-black text-[36px] leading-tight">
    Hi, I'm{" "}
    <span className="text-[#915EFF]">
      {config.hero.name}
    </span>
  </h1>

  <p className="text-white-100 text-[16px] mt-1 leading-[28px]">
    {config.hero.p[0]}
    <br />
    {config.hero.p[1]}
  </p>

  <div className="flex flex-col gap-2 mt-4 mb-2 w-full max-w-[260px]">

    <a
      href={`${import.meta.env.BASE_URL}resume.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-[#915EFF]
        text-white
        font-semibold
        py-3
        rounded-xl
        text-center
      "
    >
      👁 View Resume
    </a>

    <a
      href={`${import.meta.env.BASE_URL}resume.pdf`}
      download
      className="
        border-2
        border-[#915EFF]
        text-white
        font-semibold
        py-3
        rounded-xl
        text-center
      "
    >
      ⬇ Download Resume
    </a>

  </div>

</div>


      {/* DESKTOP HERO */}
<div
  className={`${styles.paddingX} hidden md:flex absolute inset-0 top-[120px] max-w-7xl mx-auto flex-row items-start gap-5 z-10`}
>
  <div className="flex flex-col justify-center items-center mt-5">
    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
    <div className="w-1 sm:h-80 h-40 violet-gradient" />
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
      <br className="sm:block hidden" />
      {config.hero.p[1]}
    </p>

    {/* RESUME BUTTONS */}
    <div className="mt-8 flex flex-col gap-4 w-[250px]">

      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-[#915EFF]
          text-white
          font-semibold
          py-4
          rounded-xl
          text-center
          hover:scale-105
          transition-all
        "
      >
        👁 View Resume
      </a>

      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download
        className="
          border-2
          border-[#915EFF]
          text-white
          font-semibold
          py-4
          rounded-xl
          text-center
          hover:bg-[#915EFF]
          transition-all
        "
      >
        ⬇ Download Resume
      </a>

    </div>
  </div>
</div>

      {/* DESKTOP PROFILE IMAGE */}
      <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 z-20">
        <img
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="profile"
          className="
            w-[280px]
            h-[280px]
            rounded-full
            object-cover
            border-4
            border-[#915EFF]
            shadow-[0_0_40px_rgba(145,94,255,0.8)]
          "
        />
      </div>

      {/* SCROLL ICON */}
      <div className="hidden md:flex absolute xs:bottom-10 bottom-5 w-full justify-center items-center">
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