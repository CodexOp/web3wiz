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
                    <p className={styles.titleDesc}>Over time, blockchain, especially the crypto space, has been creating a bridge between traditional financial models</p>
                </div>
                <div className={styles.socials1}>
                    <h4>Reach out to us:</h4>
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
                <h3 className={styles.highlighted}>
                    SITEMAP </h3>
                {/* <Link to="/aboutUs"><div>About</div></Link> */}
                <a href="/form">Form</a>
                <a href="/projects">Project</a>
                {/* <Link to="/form"><div>Contact us</div></Link> */}
                {/* <a href="#faqs"><div>FAQs</div></a> */}
            </div>
            <div className={styles.webpageLinks}>
                <h3 className={styles.highlighted}>
                    Services Info </h3>
                <h4>Dapp</h4>
                <h4><Link to="projects">Websites</Link></h4>
                <h4><Link to="projects">Smart Contract</Link></h4>
                <h4><Link to="projects">Marketplaces</Link></h4>
            </div>
            <div className={styles.webpageLinks}>
                <h3 className={styles.highlighted}>
                    Policies </h3>
                <h4><Link to="/privacy-policy">Privacy Policy</Link></h4>
                <h4><Link to='/terms-and-conditions'>Terms And Condition</Link></h4>
                <h4><Link to='/contact-us'>Contact Us</Link></h4>
                <h4><Link to='/our-company'>Our Company</Link></h4>
            </div>
            </div>
            <div className={styles.socials2}>
                    <p>
                        Reach out to us: </p>
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