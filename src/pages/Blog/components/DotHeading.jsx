import React from 'react';
import styles from './MainBody/MainBody.module.css';

const DotHeading = ({ text, dot }) => {
  return (
    <div className={styles.dotHeading}>
      <h1>{text}</h1>
      {dot ? <div></div> : null}
    </div>
  );
};

export default DotHeading;
