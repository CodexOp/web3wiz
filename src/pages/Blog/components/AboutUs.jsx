import React from 'react';
import styles from './MainBody/MainBody.module.css';
import { ReactComponent as Logo } from '../assets/matrix_labs.svg';

const AboutUs = () => {
  return (
    <div className={styles.aboutus}>
      <div>
        <Logo />
      </div>
      <div>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi
          ante, malesuada non sagittis id, pulvinar et purus. Integer sed nibh
          eget quam eleifend varius feugiat eu lorem. Vestibulum dictum eu nisl
          sit amet vulputate.{' '}
        </p>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default AboutUs;
