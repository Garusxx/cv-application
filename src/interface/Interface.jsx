import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Projects from "./Projects";
import axios from "axios";
import { useEffect, useState } from "react";
import Glitch from "../UI/Glitch";
import Section from "./Section";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Interface = (props) => {
  const { onSectionChange } = props;
  const [skillData, setSkillData] = useState([]);
  const [languagesData, setLanguagesData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [visitorsData, setVisitorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const backend = "https://cv-back-mxac.onrender.com";

  const fetchData = async () => {
    try {
      setIsLoading(true);
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

  const fetchDataVisitors = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://cv-back-mxac.onrender.com/get-visitor");
      const data = response.data;
      if (data) {
        setVisitorsData(data); // assuming data is an array of visitors
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const incrementVisitors = async () => {
    try {
      const response = await axios.patch(
        "https://cv-back-mxac.onrender.com/increment-visitor"
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("incrementVisitorsCalled")) {
      incrementVisitors();
      localStorage.setItem("incrementVisitorsCalled", "true");
    }
    fetchDataVisitors();
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection
        onSectionChange={() => onSectionChange(3)}
        visitorsData={visitorsData}
      />
      {isLoading ? (
        <Section>
          <div>
            <Glitch
              text={"Loading..."}
              largeFontSize={"2.5rem"}
              midFontSize={"1.5rem"}
              smallFontSize={"1rem"}
            />
            <p className="text-white">Plase refresh after 50 sec...</p>
          </div>
        </Section>
      ) : (
        <SkillsSection skillData={skillData} languagesData={languagesData} />
      )}

      {isLoading ? (
        <Section>
          <div>
            <Glitch
              text={"Loading..."}
              largeFontSize={"2.5rem"}
              midFontSize={"1.5rem"}
              smallFontSize={"1rem"}
            />{" "}
            <p className="text-white">Plase refresh after 50 sec...</p>
          </div>
        </Section>
      ) : (
        <Projects projectsData={projectsData} />
      )}
      <ContactSection />
    </div>
  );
};
