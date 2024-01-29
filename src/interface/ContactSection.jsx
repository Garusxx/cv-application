import Section from "./Section";

import { Border } from "../UI/UIelements";
import LuminousBorder from "../UI/LuminousBorder";
import Glitch from "../UI/Glitch";

const ContactSection = () => {
  return (
    <Section>
      <LuminousBorder>
        <h2 className="text-5xl font-bold">
          <Glitch
            text="Contact me"
            largeFontSize={"3rem"}
            midFontSize={"2rem"}
            smallFontSize={"1.5rem"}
          />
        </h2>

        <div className="mt-1 md:mt-8 p-8 rounded-mde w-auto max-w-full">
        <Glitch
            text="(+44) 7954 825582"
            h1="Phone Number"
            largeFontSize={"2rem"}
            midFontSize={"1rem"}
            smallFontSize={"0.7rem"}
          />
           <Glitch
            text="rafal.gaarus@gmail.com"
            h1="Email "
            largeFontSize={"2rem"}
            midFontSize={"1rem"}
            smallFontSize={"0.7rem"}
          />

         
        </div>
      </LuminousBorder>
    </Section>
  );
};

export default ContactSection;
