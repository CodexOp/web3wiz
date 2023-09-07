import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assests/images/logo.svg';
import menuIcon from "../assests/images/icon-menu.svg";
import styles from "./style.module.css";
// import ReactPixel from 'react-facebook-pixel';
import useFacebookPixel from '../../../../hooks/FacebookPixel/useFacebookPixel';

export default function Navbar(props) {
  const callFacebookPixel = useFacebookPixel();

  return (
    <>
      <header className={styles.primaryHeader}>
        <div className="container mobile-width">
          <div className={styles.navWrapper} id='nav-wrapper' >
            <Link to="/">
              <div className={styles.logo} >
                <img src={Logo} alt =""/>
                <p className={styles.headerTitle}>MATRIX LABS</p>
              </div>
            </Link>
            <div className={styles.navbarOptionbtns}>
                <Link to="/"> 
                  <button className={styles.highlighted}>
                    Home
                  </button>
                </Link>
                <button>Services</button>
                <button>Projects</button>
            </div>
            <div  className={styles.QuotaBtn} onClick={() => callFacebookPixel('ClickedGetQuote', 10)}>Get a Quote</div>
            <img className={styles.menuIcon} src={menuIcon} alt="menu-icon"/>
          </div>
        </div>
      </header>
    </>
  )
}
