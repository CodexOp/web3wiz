import React from 'react';
import styles from './Newsletter.module.css';
import Footer from './components/Footer/index';
import { ReactComponent as Logo } from './assets/logo.svg';

const Newsletter = () => {
  return (
    <>
      <div className={styles.newsletter}>
        <div className={styles.container}>
          <Logo className={styles.logo} />
          <div className={styles.box}>
            <p>
              Don’t miss updates on <span>important events</span>
            </p>
            <div>
              <input type="email" placeholder="email address" />
              <button> Sign Up</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Newsletter;
