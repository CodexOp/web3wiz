import React from 'react'
import styles from "../styles.module.css";
import arrowDown from "../../../assets/arrow-down.png"
import landingImg from "../../../assets/projectLandingImg.png"
import { Link } from 'react-router-dom';
export default function LandingProjects({setIsLanding}) {
  return (
    <div className={styles.background}>
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.flexItem1}>
                    <h1>Our <span>Projects</span></h1>
                    <p>Securely build and launch your DApp with our expert development services.</p>
                    <Link to="/form"  target="_blank" rel="noopener noreferrer"><button className={styles.button}>Contact Us</button></Link>
                </div>
                <div className={styles.flexItem2}>
                    <img src={landingImg} alt="" />
                </div>
            </div>
        </div>
        <div className={styles.arrowDown}>
            <a href="#projects">
            <button className={styles.noStyle}>
                <img src={arrowDown} alt="" />
            </button>
            </a>
        </div>
    </div>
  )
}
