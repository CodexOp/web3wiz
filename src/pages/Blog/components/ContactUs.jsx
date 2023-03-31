import React from 'react';
import styles from './MainBody/MainBody.module.css';
const ContactUs = ({ sticky }) => {
  const stickyStyle = {
    position: 'sticky',
    top: '100px',
  };

  console.log(sticky);

  return (
    <div className={`${styles.contactus}`} style={sticky ? stickyStyle : null}>
      <h2>
        Do you want a <span>smart contract?</span>
      </h2>
      <p>We are a team of blockchain experts. Contact us now and get your smart contract built.</p>
      <div>
        <input type="text" placeholder="Your email" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
