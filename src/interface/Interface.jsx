import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Projects from "./Projects";
import axios from "axios";
import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Interface = (props) => {
  const { onSectionChange } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        const data = response.data;
        if (data) {
          setData(data.skills);
          console.log(data);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection onSectionChange={() => onSectionChange(3)} />
      <SkillsSection skillData={data}/>
      <Projects />
      <ContactSection />
    </div>
  );
};
