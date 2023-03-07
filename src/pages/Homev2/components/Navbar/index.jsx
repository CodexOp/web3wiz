import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assests/images/logo.svg';
import menuIcon from "../assests/images/icon-menu.svg";
import styles from "./style.module.css";

export default function Navbar(props) {
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
                <div className={styles.highlighted}>
                  Home
                </div>
                <div className={styles.navbarbtn}>Services</div>
                <div className={styles.navbarbtn}>Projects</div>
            </div>
            <div  className={styles.QuotaBtn}>Get a Quote</div>
            <img className={styles.menuIcon} src={menuIcon} alt="menu-icon"/>
          </div>
        </div>
      </header>
    </>
  )
}
