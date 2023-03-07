import React from 'react'
import styles from "../styles.module.css";
import arrowDown from "../../../assets/arrow-down.png"
import landingImg from "../../../assets/projectLandingImg.png"
export default function LandingProjects() {
  return (
    <div className={styles.background}>
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.flexItem1}>
                    <h1>Our <span>Projects</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa efficitur, lacinia ex sed, porta metus. Aenean lorem enim, semper at varius sed, ornare et diam.</p>
                    <button className={styles.button}>Contact Us</button>
                </div>
                <div className={styles.flexItem2}>
                    <img src={landingImg} alt="" />
                </div>
            </div>
        </div>
        <div className={styles.arrowDown}>
            <img src={arrowDown} alt="" />
        </div>
    </div>
  )
}
