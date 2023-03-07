import React from "react";
import LandingProjects from "./Components/LandingProjects";
import Navbar from "../../components/Navbar/Navbar";
import ProjectItem from "./Components/ProjectItem";
import { contents } from "./constants";
export default function Projects() {
  return (
  <>
    <div>
      <Navbar />
      <LandingProjects />
      {contents.websites.map((content, index) => {
        return (
          <>
          <ProjectItem
            key={index}
            index={content.index}
            projectName={content.projectName}
            projectDescription={content.projectDescription}
            projectWebsite={content.projectWebsite}
            projectTelegram={content.projectTelegram}
            projectImage={content.projectImage}
            connectText={content.connectText}
            backgroundColor={content.backgroundColor}
            textColor={content.textColor}
            headerColor={content.headerColor}
          />
          </>
        );
      })}
    </div>
  </>);
}
