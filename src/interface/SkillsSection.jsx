import Section from "./Section";
import { motion } from "framer-motion";


import "nes.css/css/nes.min.css";
import "../index.css";
import Glitch from "../UI/Glitch";
import LuminousBorder from "../UI/LuminousBorder";

const SkillsSection = (props) => {

  const { skillData, languagesData } = props;


  return (
    <Section>
      <LuminousBorder>
        <motion.div whileInView={"visible"}>
          <h2 className="text-5xl font-bold text-white">
            <Glitch
              text="Skills"
              largeFontSize={"3rem"}
              midFontSize={"2.1rem"}
              smallFontSize={"1.5rem"}
            />
          </h2>

          <div className=" mt-8 space-y-4">
            {skillData.map((skillData, index) => (
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
                  {skillData.title}
                </motion.h3>
                <div className="nes-progress is-primary h-3">
                  <motion.div
                    className="h-full bg-indigo-500 "
                    style={{ width: `${skillData.level}%` }}
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
              {languagesData.map((languagesData, index) => (
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
                    {languagesData.title}
                  </motion.h3>
                  <div className=" nes-progress is-primary h-3">
                    <motion.div
                      className=" h-full bg-indigo-500 rounded-full "
                      style={{ width: `${languagesData.level}%` }}
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
