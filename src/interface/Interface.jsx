import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Projects from "./Projects";
import axios from "axios";
import { useEffect, useState } from "react";
import Glitch from "../UI/Glitch";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Interface = (props) => {
  const { onSectionChange } = props;
  const [skillData, setSkillData] = useState([]);
  const [languagesData, setLanguagesData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // nowy stan

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // ustawienie stanu na true przed rozpoczęciem ładowania danych
        const response = await axios.get("https://cv-back-mxac.onrender.com");
        const data = response.data;
        if (data) {
          setSkillData(data.skills);
          setLanguagesData(data.languages);
          setProjectsData(data.projects);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection onSectionChange={() => onSectionChange(3)} />
      <SkillsSection skillData={skillData} languagesData={languagesData} />
      {isLoading ? (
        <Glitch
        text={"Loading..."}
        largeFontSize={"2.5rem"}
        midFontSize={"1.5rem"}
        smallFontSize={"1rem"}
      />
      ) : (
        <Projects projectsData={projectsData} />
      )}
      <ContactSection />
    </div>
  );
};
