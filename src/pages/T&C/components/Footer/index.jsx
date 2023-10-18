import React from "react";
import styles from "./style.module.css";
import Logo from "../assests/images/logo.svg"
import igIcon from "../assests/images/icon-ig.svg"
import linkedInIcon from "../assests/images/icon-linkedIn.svg"
import telegramIcon from "../assests/images/icon-telegram.svg"
import twitterIcon from "../assests/images/icon-twitter.svg"
import emailIcon from "../assests/images/icon-email.svg"
import sendIcon from "../assests/images/icon-send.svg"
import { Link } from "react-router-dom";

export default function Footer()
{
    return (
        <div className={styles.mainFooter}>
            <div className={styles.footerLogoDiv}>
                <div>
                    <Link to="/">
                        <div className={styles.title}>
                            <img src={Logo} alt =""/>
                            <p>MATRIX LABS</p>
                        </div>
                    </Link>
                    <div className={styles.titleDesc}>
                        <p>One stop for all Blockchain solutions </p></div>
                </div>
                <div className={styles.socials1}>
                    <div>
                        <h3>Reach out to us: </h3></div>
                    <div className={styles.socialIconDiv}>
                        <a href="https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ=">
                            <img src={igIcon} className={styles.socialIcons} alt="ig-icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/thematrixlabs/">
                            <img src={linkedInIcon}className={styles.socialIcons} alt="linkedIn-icon"/>
                        </a>
                        <a href="https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09">
                            <img src={twitterIcon} className={styles.socialIcons} alt="twitter-icon"/>
                        </a>
                        <a href="https://t.me/brickMatrix">
                            <img src={telegramIcon} className={styles.socialIcons} alt="telegram-icon"/>
                        </a>
                        <a href="mailto:contact@thematrixlabs.com">
                            <img src={emailIcon} className={styles.socialIcons} alt="email-icon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.webpageLinksWrapper}>
            <div className={styles.webpageLinks}>
                <Link to="/">
                    <div className={styles.highlighted}>
                        <h3>Home </h3></div>
                </Link>
                <div>
                   <p>About </p> </div>
                <div> <p>Services </p></div>
                <a href="/projects"><div>
                    <p>Projects </p></div></a>
            </div>
            <div className={styles.webpageLinks}>
                <a href="/contact-us"><div>
                    <p>Contact us </p></div></a>
                <div>
                    <p>FAQs </p></div>
            </div>
            </div>
            <div className={styles.signupWrapper}>
                <div className={styles.signupTxt}>
                    <p>Sign up for updates</p></div>
                <div  className={styles.signupInput}>
                    <input placeholder="email@address.com" />
                    <button style={{cursor:"pointer"}}>
                        <img src={sendIcon} className={styles.sendIcon} alt="send-icon" />
                    </button>
                </div>
            </div>
            <div className={styles.socials2}>
                    <div>Reach out to us:</div>
                    <div className={styles.socialIconDiv}>
                        <a href="https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ=">
                            <img src={igIcon} className={styles.socialIcons} alt="ig-icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/thematrixlabs/">
                            <img src={linkedInIcon} className={styles.socialIcons} alt="linkedIn-icon"/>
                        </a>
                        <a href="https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09">
                            <img src={twitterIcon} className={styles.socialIcons} alt="twitter-icon"/>
                        </a>
                        <a href="https://t.me/brickMatrix">
                            <img src={telegramIcon} className={styles.socialIcons} alt="telegram-icon"/>
                        </a>
                        <a href="mailto:contact@thematrixlabs.com">
                            <img src={emailIcon} className={styles.socialIcons} alt="email-icon"/>
                        </a>
                    </div>
            </div>
        </div>
    );
};