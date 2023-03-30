import React from 'react';
import styles from './MainBody/MainBody.module.css';

/*
weight -> fontWeight
size -> fontSize
line -> lineHeight
*/
const Para = ({ text, weight, size, line }) => {
  let classes = ``;
  size = Number(size);
  line = Number(line);

  if (size === 32) {
    classes += `${styles.size_32}`;
  } else if (size === 28) {
    classes += `${styles.size_28}`;
  } else if (size === 24) {
    classes += `${styles.size_24}`;
  } else {
    classes += `${styles.size_20}`;
  }

  if (line === 40) {
    classes += ` ${styles.line_40}`;
  } else if (line === 36) {
    classes += ` ${styles.line_36}`;
  } else {
    classes += ` ${styles.line_30}`;
  }

  return (
    <p
      style={{
        fontWeight: `${weight}`,
      }}
      className={`${classes} ${styles.para}`}
      dangerouslySetInnerHTML={{ __html: text }}
    ></p>
  );
};

export default Para;
