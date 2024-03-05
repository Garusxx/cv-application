import { motion } from "framer-motion";
import React, { useState, useEffect, use } from "react";
import Glitch from "../UI/Glitch";
import LuminousBorder from "../UI/LuminousBorder";
import "nes.css/css/nes.min.css";
import { set } from "countapi-js";

const AboutSection = (props) => {
  const { onSectionChange, visitorsData } = props;
  const [visitors, setVisitors] = useState('0');

useEffect(() => {
  if (visitorsData[0]) {
    setVisitors(visitorsData[0].visitors);
  }
}, [visitorsData]);
 
 

  return (
    <section
      className=" h-screen w-[70%]  md:p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center"
    >
      <div className="w-[100%] md:w-[60%]">
        <LuminousBorder>
          <h1 className="text-sm md:text-base lg:text-5xl leading-snug">
            <Glitch
              text="Rafal Zakzrewski"
              h1="Hi, I'm"
              largeFontSize={"3.5rem"}
              midFontSize={"1.5rem"}
              smallFontSize={"1.2rem"}
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
            learning and infusing enthusiasm into my code. A genuine aficionado
            of 90s movies and music, captivated by the nostalgic charm they
            hold.
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
          <p className="fixed right-4 bottom-4">V: {visitors}</p>
        </LuminousBorder>
      </div>
    </section>
  );
};

export default AboutSection;
