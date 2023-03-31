import React, {useEffect, useState} from 'react'
import styles from "../styles.module.css";
import arrowDown from "../../../assets/arrow-down.png"
import landingImg from "../../../assets/projectLandingImg.png"
import { Link } from 'react-router-dom';
import useFacebookPixel from '../../../hooks/FacebookPixel/useFacebookPixel';
import Navbar from '../../Homev2/components/Navbar';
import ReactPixel from 'react-facebook-pixel';
export default function LandingProjects({ setIsLanding }) {
    const callFacebookPixel = useFacebookPixel();

    // const [ipAd,setIP] = useState('');
    
    //creating function to load ip address from the API
    // const getData = async ()=>{
    //     await fetch('https://geolocation-db.com/json/').then((res)=>res.json()).then((ress)=>{
    //     console.log(ress.IPv4)
    //         setIP(ress.IPv4)

    //     })
       
    // }


    const sendDataToPably = async (data) => {
        await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY5MDYzZTA0MzU1MjY1NTUzMyI_3D_pc", {  // Enter your IP address here
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      
      })
    }

    const tessst = async () => {
        // await getData();
       
    }

    useEffect(() => {
        ReactPixel.trackCustom('projectPageView', {value: 1, currency: 'USD'});
        sendDataToPably({event: "projectPageView", value: 1, currency: "USD", userAgent: navigator.userAgent, href: window.location.href, timestamp: Math.floor(Date.now() / 1000)});
    }, [])


    
  return (
    <div className={styles.background}>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <div className={styles.flexItem1}>
                    <h1>Our <span>Projects</span></h1>
                    <p>If you're looking for top-quality work that meets your unique needs, you've come to the right place.</p>
                    <Link to="/form"  target="_blank" rel="noopener noreferrer"><button className={styles.button}onClick={() => callFacebookPixel('ClickedContactUs', 10)}>Contact Experts</button></Link>
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
