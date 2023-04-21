import React from 'react';
import styles from './Newsletter.module.css';
import Footer from './components/Footer/index';
import { ReactComponent as Logo } from './assets/logo.svg';

const Newsletter = () => {
  return (
    <>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <div className={styles.box}>
          <p>Don’t miss updates on important events</p>
          <input type="email" placeholder="email address" />
          <button> Sign Up</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Newsletter;
