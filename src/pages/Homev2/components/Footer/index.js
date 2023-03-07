import React from "react";
import styles from "./style.module.css";
import Logo from "../assests/images/logo.svg"
import igIcon from "../assests/images/icon-ig.svg"
import linkedInIcon from "../assests/images/icon-linkedIn.svg"
import telegramIcon from "../assests/images/icon-telegram.svg"
import twitterIcon from "../assests/images/icon-twitter.svg"
import emailIcon from "../assests/images/icon-email.svg"
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
                    <div className={styles.titleDesc}>Over time, blockchain, especially the crypto space, has been creating a bridge between traditional financial models</div>
                </div>
                <div className={styles.socials1}>
                    <div>Reach out to us:</div>
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
                <div className={styles.highlighted}>SITEMAP</div>
                <div>About</div>
                <div>Forms</div>
                <div>Projects</div>
                <div>Contact us</div>
                <div>FAQs</div>
            </div>
            <div className={styles.webpageLinks}>
                <div className={styles.highlighted}>Services Info</div>
                <div>Dapp</div>
                <div>Websites</div>
                <div>Smart Contract</div>
                <div>Marketplaces</div>
            </div>
            <div className={styles.webpageLinks}>
                <div className={styles.highlighted}>Policies</div>
                <div>Privacy Policy</div>
                <div>Terms And Condition</div>
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