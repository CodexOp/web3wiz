import React from 'react';
import styles from './BlogHeading.module.css';

const BlogHeading = ({ read, heading }) => {
  return (
    <div className={styles.container}>
      <p>{read}</p>
      <h1>{heading}</h1>
    </div>
  );
};

export default BlogHeading;
