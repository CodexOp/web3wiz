import React from 'react'
import styles from "../styles.module.css";
import arrowDown from "../../../assets/arrow-down.png"
import landingImg from "../../../assets/projectLandingImg.png"
export default function LandingProjects({setIsLanding}) {
  return (
    <div className={styles.background}>
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.flexItem1}>
                    <h1>Our <span>Projects</span></h1>
                    <p>Securely build and launch your DApp with our expert development services.</p>
                    <button className={styles.button}>Contact Us</button>
                </div>
                <div className={styles.flexItem2}>
                    <img src={landingImg} alt="" />
                </div>
            </div>
        </div>
        <div className={styles.arrowDown}>
            <button className={styles.noStyle} onClick={()=>{
                setIsLanding(false)
            }}>
                <img src={arrowDown} alt="" />
            </button>
        </div>
    </div>
  )
}
