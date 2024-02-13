import Section from "./Section";

import { useState } from "react";
import { motion } from "framer-motion";
import Glitch from "../UI/Glitch";
import LuminousBorder from "../UI/LuminousBorder";

import NextIcont from "../../public/ikons/next.png";

const Project = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isFirstSlide = currentIndex === projects.length - 1;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full md:m-10 text-white">
      <motion.div
        className="absolute w-10 h-10 z-10 left-8  "
        onClick={goToPrevSlide}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 2 }}
      >
        <img
          src={NextIcont}
          alt="Previous slide"
          style={{
            transform: "scaleX(-1)",
            filter: "invert(1) sepia(1) saturate(5) hue-rotate(90deg)",
          }}
        />
      </motion.div>
      <LuminousBorder>
        <div className="flex items-center justify-center h-full">
          <motion.img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="object-cover object-center rounded-lg w-[100%] h-[100%] md:w-4/5 md:h-4/5"
          />
        </div>
      </LuminousBorder>

      <motion.div
        key={currentIndex}
        className="absolute px-6 lg:mt-30 w-[100%] lg:w-1/3 bottom-2 md:right-8 lg:bottom-20 animate-slide-in-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <LuminousBorder>
          <h4 className="mt-1 font-semibold uppercase leading-tight truncate">
            <Glitch
              text={projects[currentIndex].title}
              largeFontSize={"1.5rem"}
              midFontSize={"1rem"}
              smallFontSize={"0.7rem"}
            />
          </h4>

          <div className="mt-1 text-xs md:text-sm">
            {projects[currentIndex].description}
          </div>
          <div className="mt-4">
            <a
              href={projects[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className=" nes-btn px-4 py-1 md:px-4 md:py-2 bg-blue-500 text-white text-sm rounded md:mt-4"
            >
              View Project
            </a>
          </div>
        </LuminousBorder>
      </motion.div>
      <motion.div
        className="absolute w-10 h-10 z-10 right-8"
        onClick={goToNext}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 2 }}
      >
        <img
          src={NextIcont}
          alt="Previous slide"
          style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(90deg)" }}
        />
      </motion.div>
    </div>
  );
};

const Projects = ({ projectsData }) => {
  return (
    <Section>
      <div className="w-[100%] h-[100%] mt-30 flex items-center justify-center">
        <Project projects={projectsData} />
      </div>
    </Section>
  );
};

export default Projects;
