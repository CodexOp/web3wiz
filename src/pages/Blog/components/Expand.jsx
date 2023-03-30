import React from 'react';
import styles from './MainBody/MainBody.module.css';

const Expand = () => {
  return (
    <div className={`${styles.expand}`}>
      <h1>See How Our Agency Can Help You Expand Your Business</h1>
      <p>SEO - unlock more SEO traffic. See real results.</p>
      <p>
        Content Marketing - our team creates epic content that will get shared,
        get links, and attract traffic.
      </p>
      <p>Paid Media - effective paid strategies with clear ROI.</p>
      <button>Book a call</button>
    </div>
  );
};

export default Expand;
