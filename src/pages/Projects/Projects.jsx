import React, { useEffect } from "react";
import LandingProjects from "./Components/LandingProjects";
import Navbar from "../../components/Navbar/Navbar";
import ProjectItem from "./Components/ProjectItem";
import { contents } from "./constants";
import styles from "./styles.module.css";
import ProjectNav from "./Components/ProjectNav";
export default function Projects() {
  const [backgroundColor, setBackgroundColor] = React.useState("#adf6ff");
  const colors = ["#c0f8ff", "#83f0fe", "#3760b2", "#0e3170", "#2d6470", "#5291c2", "#9f7bce", "#fb8a92", "#fbbb6a", "#a1bda7", "#6896d6", "#5f95e1", "#77dad7", "#568dab", "#4d3ac8", "#243491", "#b5349e"]
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
          for(let i=0; i<17; i++){
            if(entry.target.className.includes(`c${i}`)){
              setProjectImage(contents.websites[i].projectImage)
              setBackgroundColor(colors[i])
            }
          }
        } 
      });
    }, options);
    if(!isLanding)
    for(let i=0; i<17; i++){
      observer.observe(document.querySelector(`.c${i}`));
    }
    return () => {
      if(!isLanding)
      for(let i=0; i<17; i++){
        observer.unobserve(document.querySelector(`.c${i}`));
      }
    }
  }, [isLanding])
  return (
  <>
    <div>
      {isLanding ? <div> 
        <Navbar />
      <LandingProjects setIsLanding={setIsLanding}/>
      </div>
      : <div> 
        <div className={styles.animateBackground + " " + styles.desktopView} style={{backgroundColor: backgroundColor}}>
          <div className={styles.container}>
          <div className={styles.projectContent}>
              <div>
                <ProjectNav />
                {contents.websites.map((content, index) => {
                  // setBackgroundColor(content.backgroundColor)
                  return (
                    <>
                    <div className={`c${index.toString()}`}>
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
                    </div>
                
                    </>
                  );
                })}
                <div className={styles.image} ref={ref}>  
                    <img src={projectImage} alt="" />
                </div>
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
                      <div className={`c${index.toString()}`}>
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
    }
              
  </div>
  </>);
}
