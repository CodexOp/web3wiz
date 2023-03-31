import React, { useEffect } from "react";
import LandingProjects from "./Components/LandingProjects";
import Navbar from "../../components/Navbar/Navbar";
import ProjectItem from "./Components/ProjectItem";
import { contents } from "./constants";
import styles from "./styles.module.css";
import ProjectNav from "./Components/ProjectNav";
import { Link } from 'react-router-dom';
export default function Projects() {
  const [backgroundColor, setBackgroundColor] = React.useState("#adf6ff");
  const [imgDiv, setImgDiv] = React.useState(<div></div>);
  const colors = ["#86EBF8", "#64A4FF", "#5483E2", "#0F41A8", "#21C677", "#FFB47D", "#C7AB64", "#BBAA8F", "#FF7DB6", "#21C677", "#58C1EF", "#4792E4", "#3F84E5", "#FFD66B", "#86EBF8", "#64A4FF", "#FFAAD4",  "#BCBBFF", "#64A4FF", "#21C677", "#86EBF8", "#5483E2", "#FF7DB6", "#BBAA8F", "#21C677","3F8EF7", "#B5FFB1", "#51ADE5", "#CFB8FF", "#FFC48D", "#97ADFF"]
  const ref = React.useRef(null);
  const [projectImage, setProjectImage] = React.useState(contents.websites[0].projectImage);
  const [isLanding, setIsLanding] = React.useState(true);
  useEffect(() => {
    const options = {
      threshold: 0.6,
      rootMargin: "0px 0px -50px 0px"
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          for(let i=0; i<31; i++){
            if(entry.target.className.includes(`c${i}`)){
              setProjectImage(contents.websites[i].projectImage)
              if(i==31){
                setImgDiv(<div key={`c${i}`} className={styles.image30}>  
                <img src={contents.websites[i].projectImage} alt="" />
            </div>)
              }
              else if(i==0){
                setImgDiv(<div key={`c${i}`} className={styles.image0}>  
                <img src={contents.websites[i].projectImage} alt="" />
            </div>)
              }
              else{
                setImgDiv(<div key={`c${i}`} className={styles.image}>  
                  <img src={contents.websites[i].projectImage} alt="" />
              </div>)
              }
              setBackgroundColor(colors[i])
            }
          }
        } 
      });
    }, options);
    for(let i=0; i<31; i++){
      observer.observe(document.querySelector(`.c${i}`));
    }
    return () => {
      for(let i=0; i<31; i++){
        observer.unobserve(document.querySelector(`.c${i}`));
      }
    }
  }, [])
  return (
  <>
    <div>
      <LandingProjects setIsLanding={setIsLanding}/>
      <div className={styles.inner} id="projects"> 
        <div className={styles.animateBackground + " " + styles.desktopView} style={{backgroundColor: backgroundColor}}>
          <div className={styles.container}>
          <div className={styles.projectContent}>
              <div>
                <ProjectNav />
                {contents.websites.map((content, index) => {
                  // setBackgroundColor(content.backgroundColor)
                  return (
                    <>
                    <div className={`c${index.toString()}`} id={`id${index.toString()}`}>
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
                        techUsed={content.techUsed}
                      />
                    </div>
                
                    </>
                  );
                })}
                  {imgDiv}
                </div>  
              </div>
          </div>
        </div>
        
        {contents.websites.map((content, index) => {
          return (
            <>
              <div>
                <div 
                  className={styles.animateBackground + " " + styles.mobileView} 
                  style={{background: content.backgroundColor}}
                >
                  <div className={styles.container}>
                    <div className={styles.flexContainer1}>
                      {index === 0 && <ProjectNav />}
                      <div className={`c${index.toString()}`}  id={`id${index.toString()}`}>
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
                          techUsed={content.techUsed}

                        />
                      </div>
                      <div className={styles.image1} ref={ref}>  
                        <img src={content.projectImage} alt="" />
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.container}>
        <div className={styles.centerElements}>
          <h1>If you like what you see, imagine what we can do for you!
Get in touch with us and let's turn your ideas into reality.</h1>
          <button className={styles.getaquotaBtn}>Contact Us</button>

        </div>
      </div>
           
  </div>
  </>);
}
