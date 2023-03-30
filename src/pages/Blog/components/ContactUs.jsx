import React from 'react';
import styles from './MainBody/MainBody.module.css';
const ContactUs = () => {
  return (
    <div className={`${styles.contactus}`}>
      <h2>
        Do you want a <span>smart contract?</span>
      </h2>
      <p>
        We are a team of blockchain experts. Contact us now and get your smart
        contract built.
      </p>
      <div>
        <input type="text" placeholder="Your email" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
