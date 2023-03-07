import React from 'react'
import styles from "../styles.module.css";
import telegram from "../../../assets/telegram.svg";
import ProjectNav from './ProjectNav';
export default function ProjectItem({index, projectName, projectDescription, projectWebsite, projectTelegram, projectImage, connectText, backgroundColor, textColor, headerColor}) {
  return (
    <>
      <div style={{background: backgroundColor}}>
        {index === "01" && <ProjectNav />}
        <div className={styles.container}>
          <div className={styles.flexContainer}>
            <div className={styles.projectItem1} style={{"--headerColor": headerColor, "--textColor": textColor}}>
              <div className={styles.projectHeader}><span className={styles.index}>{index}.  </span><span className={styles.projectName}>{projectName}</span></div>
              <p>{projectDescription}</p>
              <div className={styles.connectToProject} style={{"--textColor": textColor}}>
                <a href={projectWebsite}>{connectText}</a>
                <a href={projectTelegram}><img src={telegram} alt="" /></a>
              </div>
            </div>
            <div className={styles.image}>  
            <img src={projectImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
