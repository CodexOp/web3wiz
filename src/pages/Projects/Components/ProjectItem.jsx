import React from 'react'
import styles from "../styles.module.css";
import telegram from "../../../assets/telegram.svg";
import useFacebookPixel from '../../../hooks/FacebookPixel/useFacebookPixel'
import linkImg from "../../../assets/link-outline.svg";
import { ReactComponent as LinkImg } from "../../../assets/link-outline.svg";

export default function ProjectItem({index, projectName, projectDescription, projectWebsite, projectTelegram, projectImage, connectText, textColor, headerColor, techUsed}) {
  const callFacebookPixel = useFacebookPixel();
  return (
    <>
      <div className={styles.projectItem1} style={{"--headerColor": headerColor, "--textColor": textColor}}>
        <div><p>{techUsed}</p></div> 
        <div className={styles.projectHeader}><span className={styles.index}>{index}.  </span><span className={styles.projectName}>{projectName} </span> 
        </div>
        <p>{projectDescription} <span><button onClick={()=>{
          navigator.clipboard.writeText("https://thematrixlabs.com/projects/" + `#id${index.toString()}`)
        }}><LinkImg stroke={textColor} width={"20px"}/></button></span> </p>
        <div className={styles.connectToProject} style={{ "--textColor": textColor }}>
          <a href={projectWebsite} onClick={() => callFacebookPixel(`Clicked${projectName}`, 3)}  target='_blank' rel="noopener noreferrer">{connectText}</a>
          <a href={projectWebsite} target='_blank' rel="noopener noreferrer"><img src={telegram} alt="" onClick={() => callFacebookPixel(`Clicked${projectName}Telegram`, 3)}/></a>
        </div>
      </div>
    </>
  )
}
