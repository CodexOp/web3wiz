import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import Footer from './components/Footer/index';
import { ReactComponent as Logo } from './assets/logo.svg';
import { Lottie, triggerLottie } from '../../components/Lottie/Lottie';
import validator from 'validator';
import ReactPixel from 'react-facebook-pixel';

const Newsletter = () => {
  const [userEmail, setUserEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const sendDataToPably = (data) => {
    fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY5MDYzZTA0MzU1MjY1NTUzMyI_3D_pc', {
      // Enter your IP address here

      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  };

  const handleOnClickSubscribe = () => {
    if (userEmail != '') {
      fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY0MDYzNTA0MzA1MjY1NTUzMCI_3D_pc', {
        // Enter your IP address here

        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ email: userEmail }), // body data type must match "Content-Type" header
      });
    }
  };

  return (
    <>
      <Lottie text={'Thank you for sign up! Stay tuned for updates on important events.'} />
      <div className={styles.newsletter}>
        <div className={styles.container}>
          <Logo className={styles.logo} />
          <div className={styles.box}>
            <p>
              Don’t miss updates on <span>important events</span>
            </p>
            <div>
              <input
                type="email"
                placeholder="email address"
                onChange={(event) => {
                  setUserEmail(event.target.value);
                  setValidEmail(true);
                }}
                value={userEmail}
              />
              <button
                onClick={() => {
                  if (validator.isEmail(userEmail)) {
                    handleOnClickSubscribe();
                    triggerLottie();
                    setUserEmail('');
                    ReactPixel.trackCustom('newsletterSubscribed', { value: 7500, currency: 'USD' });
                    sendDataToPably({
                      event: 'newsletterSubscribed',
                      value: 7500,
                      currency: 'USD',
                      email: userEmail,
                      userAgent: navigator.userAgent,
                      href: window.location.href,
                      timestamp: Math.floor(Date.now() / 1000),
                    });
                  } else {
                    setValidEmail(false);
                  }
                }}
              >
                {' '}
                Sign Up
              </button>
            </div>
            {validEmail ? null : <p className={styles.emailError}>Please enter valid Email</p>}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Newsletter;
