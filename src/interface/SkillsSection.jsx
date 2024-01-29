import Section from "./Section";
import { motion } from "framer-motion";
import { Border } from "../UI/UIelements";

import "nes.css/css/nes.min.css";
import "../index.css";
import Glitch from "../UI/Glitch";
import LuminousBorder from "../UI/LuminousBorder";

const skills = [
  {
    title: "JacaScript",
    level: 90,
  },
  {
    title: "React",
    level: 80,
  },
  {
    title: "Nodejs",
    level: 80,
  },
  {
    title: "CSS",
    level: 60,
  },
  {
    title: "Threejs",
    level: 20,
  },
];
const languages = [
  {
    title: "🇵🇱 Polski",
    level: 100,
  },
  {
    title: "🇬🇧 English",
    level: 60,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <LuminousBorder>
        <motion.div whileInView={"visible"}>
          <h2 className="text-5xl font-bold text-white">
            <Glitch
              text="Skills"
              largeFontSize={"3rem"}
              midFontSize={"2rem"}
              smallFontSize={"1.5rem"}
            />
          </h2>

          <div className=" mt-8 space-y-4">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-white"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="nes-progress is-primary h-3">
                  <motion.div
                    className="h-full bg-indigo-500 "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-5xl font-bold mt-10">
              <Glitch
                text="Languages"
                largeFontSize={"3rem"}
                midFontSize={"2rem"}
                smallFontSize={"1.5rem"}
              />
            </h2>
            <div className=" mt-8 space-y-4">
              {languages.map((lng, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="text-xl font-bold text-white"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className=" nes-progress is-primary h-3">
                    <motion.div
                      className=" h-full bg-indigo-500 rounded-full "
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </LuminousBorder>
    </Section>
  );
};

export default SkillsSection;
