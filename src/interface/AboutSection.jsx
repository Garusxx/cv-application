import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Border } from "../UI/UIelements";
import Glitch from "../UI/Glitch";
import LuminousBorder from "../UI/LuminousBorder";

import "nes.css/css/nes.min.css";

const AboutSection = (props) => {
  const { onSectionChange } = props;

  return (
    <section
      className=" h-screen w-[70%] p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center"
    >
      <LuminousBorder>
        <h1 className="text-sm md:text-base lg:text-5xl  leading-snug">
          <Glitch
            text="Rafal Zakzrewski"
            h1="Hi, I'm"
            largeFontSize={"4rem"}
            midFontSize={"3rem"}
            smallFontSize={"1.7rem"}
          />
        </h1>
        <motion.p
          className="text-sm md:text-base lg:text-lg text-black mt-4"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          I aspire to become a React engineer, driven by a passion for quick
          learning and infusing enthusiasm into my code. A genuine aficionado of
          90s movies and music, captivated by the nostalgic charm they hold.
        </motion.p>
        <motion.button
          onClick={() => onSectionChange(3)}
          className={`nes-btn is-primary text-white py-2 px-4 mid:py-3 mid:px-7 lg:py-4 lg:px-8 
       font-bold text-sm lg:text-lg mt-3 mid:mt-10 lg:mt-14`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          Contact me
        </motion.button>
      </LuminousBorder>
    </section>
  );
};

export default AboutSection;
