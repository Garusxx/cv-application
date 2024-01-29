import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Projects from "./Projects";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Interface = (props) => {

  const { onSectionChange } = props;
  
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection onSectionChange={() => onSectionChange(3)}/>
      <SkillsSection />
      <Projects />
      <ContactSection />
    </div>
  );
};
