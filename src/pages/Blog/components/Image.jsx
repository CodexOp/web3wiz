import React from 'react';
import styles from './MainBody/MainBody.module.css';

const Image = ({ src1, src2 }) => {
  return (
    <div className={`${src1 && src2 ? `${styles.twoImage}` : null}`}>
      <img src={src1} alt="" />
      <img src={src2} alt="" />
    </div>
  );
};

export default Image;
