import React from 'react';
import styles from './style.module.css';
import Logo from '../../../Homev2/components/assests/images/logo.svg';
import igIcon from '../../../Homev2/components/assests/images/icon-ig.svg';
import linkedInIcon from '../../../Homev2/components/assests/images/icon-linkedIn.svg';
import telegramIcon from '../../../Homev2/components/assests/images/icon-telegram.svg';
import twitterIcon from '../../../Homev2/components/assests/images/icon-twitter.svg';
import emailIcon from '../../../Homev2/components/assests/images/icon-email.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.footerLogoDiv}>
        <div>
          <Link to="/">
            <div className={styles.title}>
              <img src={Logo} alt="" />
              <p>MATRIX LABS</p>
            </div>
          </Link>
          <div className={styles.titleDesc}>One stop for all Blockchain solutions</div>
        </div>
        <div className={styles.socials1}>
          <div>Reach out to us:</div>
          <div className={styles.socialIconDiv}>
            <a href="https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ=">
              <img src={igIcon} className={styles.socialIcons} alt="ig-icon" />
            </a>
            <a href="https://www.linkedin.com/company/thematrixlabs/">
              <img src={linkedInIcon} className={styles.socialIcons} alt="linkedIn-icon" />
            </a>
            <a href="https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09">
              <img src={twitterIcon} className={styles.socialIcons} alt="twitter-icon" />
            </a>
            <a href="https://t.me/brickMatrix">
              <img src={telegramIcon} className={styles.socialIcons} alt="telegram-icon" />
            </a>
            <a href="mailto:contact@thematrixlabs.com">
              <img src={emailIcon} className={styles.socialIcons} alt="email-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.webpageLinksWrapper}>
        <div className={styles.webpageLinks}>
          <Link to="/">
            <div className={styles.highlighted}>HOME</div>
          </Link>
          <div></div>
          <Link to="/about-us">
            <div>About</div>
          </Link>
          <Link to="/contact-us">
            <div>Contact us</div>
          </Link>
          <Link to="/#services">
            <div>Services</div>
          </Link>
          <a href="/#faqs">
            <div>FAQs</div>
          </a>
          <Link to="/projects">
            <div>Projects</div>
          </Link>
          <div></div>
        </div>
      </div>
      <div className={styles.socials2}>
        <div>Reach out to us:</div>
        <div className={styles.socialIconDiv}>
          <a href="https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ=">
            <img src={igIcon} className={styles.socialIcons} alt="ig-icon" />
          </a>
          <a href="https://www.linkedin.com/company/thematrixlabs/">
            <img src={linkedInIcon} className={styles.socialIcons} alt="linkedIn-icon" />
          </a>
          <a href="https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09">
            <img src={twitterIcon} className={styles.socialIcons} alt="twitter-icon" />
          </a>
          <a href="https://t.me/brickMatrix">
            <img src={telegramIcon} className={styles.socialIcons} alt="telegram-icon" />
          </a>
          <a href="mailto:contact@thematrixlabs.com">
            <img src={emailIcon} className={styles.socialIcons} alt="email-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
