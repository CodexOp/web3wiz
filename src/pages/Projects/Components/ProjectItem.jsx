import React from 'react'
import styles from "../styles.module.css";
import telegram from "../../../assets/telegram.svg";
import useFacebookPixel from '../../../hooks/FacebookPixel/useFacebookPixel'

export default function ProjectItem({ index, projectName, projectDescription, projectWebsite, projectTelegram, projectImage, connectText, textColor, headerColor, techUsed }) {

  const callFacebookPixel = useFacebookPixel();
 
  return (
    <>
      <div className={styles.projectItem1} style={{"--headerColor": headerColor, "--textColor": textColor}}>
        <div><p>{techUsed}</p></div> 
        <div className={styles.projectHeader}><span className={styles.index}>{index}.  </span><span className={styles.projectName}>{projectName}</span></div>
        <p>{projectDescription}</p>
        <div className={styles.connectToProject} style={{"--textColor": textColor}}>
          <a href={projectWebsite} onClick={() => callFacebookPixel(`Clicked${projectName}`, 3)}>{connectText}</a>
          <a href={projectWebsite}><img src={telegram} alt=""  onClick={() => callFacebookPixel(`Clicked${projectName}Telegram`, 3)}/></a>
        </div>
      </div>
    </>
  )
}
