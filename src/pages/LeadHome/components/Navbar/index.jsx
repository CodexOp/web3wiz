import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assests/images/logo.svg';
import menuIcon from '../assests/images/icon-menu.svg';
import styles from './style.module.css';
import useFacebookPixel from '../../../../hooks/FacebookPixel/useFacebookPixel'

export default function Navbar(props) {
  const navbar_mobile = useRef(false);
  const [show, setShow] = useState(false);
  const [params, setParams] = useState(false);
  const callFacebookPixel = useFacebookPixel();

  const toggleMenu = () => {
    // toggle the current state
    setShow((current) => !current);
  };
  useEffect(() => {
    setParams(window.location.search);

  }, [])

  const scrollToService1 = () => {
    const section1 = document.querySelector('#service1');
    section1.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    const section1 = document.querySelector('#leadForm');
    section1.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={styles.primaryHeader}>
        <div className="container mobile-width">
          <div className={styles.navWrapper} id="nav-wrapper">
            <Link to="/">
              <div className={styles.logo}>
                <img src={Logo} alt="" />
                <p className={styles.headerTitle}>MATRIX LABS</p>
              </div>
            </Link>
            <div className={styles.navbarOptionbtns} style={{ display: show ? 'block' : 'none' }}>
              <div className={styles.highlighted}>
                <a href='/#home'>Home</a>
              </div>
              <a onClick={scrollToService1}>
                <div className={styles.navbarbtn}>Services</div>
              </a>
              <Link to="/projects" target="_blank" rel="noopener noreferrer">
                {' '}
                <div className={styles.navbarbtn}>Projects</div>
              </Link>
              <Link onClick={scrollToForm}>
                <div className={styles.getaquotaBtn} onClick={() => callFacebookPixel('ClickedGetQuote', 10)}>
                  Get a Quote
                </div>
              </Link>
            </div>
            <img className={styles.menuIcon} src={menuIcon} alt="menu-icon" onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
}
