import React from 'react';
import Logo from "./components/assests/images/logo.svg";
import whatsappIcon from "./components/assests/images/icon-whatsapp.svg";
import telegramIcon from "./components/assests/images/icon-telegram.svg";
import igIcon from "./components/assests/images/icon-ig.svg"
import linkedInIcon from "./components/assests/images/icon-linkedIn.svg"
import twitterIcon from "./components/assests/images/icon-twitter.svg"
import telegramVectorIcon from "./components/assests/images/icon-telegram-vector.svg"
import emailIcon from "./components/assests/images/icon-email.svg"
import thumbsUpIcon from "./components/assests/images/icon-thumbsUp.svg";
import styles from "./style.module.css";

function Thankyou() {
  return (
    <div className={styles.App}>
      <div className={styles.AppHeader}>
        <div className={styles.logo} >
          <img src={Logo} alt =""/>
          <p className={styles.headerTitle}>MATRIX LABS</p>
        </div>
      </div>
          <img className={styles.thumbsupIcon} src={thumbsUpIcon} alt = "thumbsup-icon"/>
      <div className={styles.contentWrapper}>
        <div className={styles.thankuWrapper}>
          <div className={styles.thankuTxt}>
              <span className={styles.highlighted}>
                  Thank you 
              </span>
              {" "}for signing up
          </div>
          <p>We have received your details, our team will contact you shortly</p>
        </div>
        <div className={styles.contactUsTxt}>Can’t wait? Contact us 
          <span className={styles.highlighted}>
           {" "}NOW
          </span>
        </div>
        <div className={styles.contactsDiv}>
          <a href="https://wa.me/+917999378952">
            <img src={whatsappIcon} alt="whatsapp-icon"/>
          </a>
          <a href="https://t.me/brickMatrix">
            <img src={telegramIcon} alt="telegram-icon"/>
          </a>
        </div>
      </div>
      <div className={styles.mainFooter}>
            <div className={styles.footerLogoDiv}>
                <div className={styles.footerLogoWrapper}>
                    <div className={styles.title}>
                        <img src={Logo} alt =""/>
                        <p>MATRIX LABS</p>
                    </div>
                    <div className="title-desc">One stop for all Blockchain solutions</div>
                </div>
                <div className={styles.socials}>
                    <div>Reach out to us:</div>
                    <div className={styles.socialIconDiv}>
                        <a href='https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ='>
                          <img src={igIcon} className={styles.socialIcons} alt="ig-icon" />
                        </a>
                        <a href='https://www.linkedin.com/company/thematrixlabs/'>
                          <img src={linkedInIcon} className={styles.socialIcons} alt="linkedIn-icon"/>
                        </a>
                        <a href='https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09'>
                          <img src={twitterIcon} className={styles.socialIcons} alt="twitter-icon"/>
                        </a>
                        <a href="https://t.me/brickMatrix">
                          <img src={telegramVectorIcon} className={styles.socialIcons} alt="telegram-icon"/>
                        </a>
                        <a href="mailto:contact@thematrixlabs.com">
                          <img src={emailIcon} className={styles.socialIcons} alt="email-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Thankyou;
