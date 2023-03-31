import React from 'react';
import styles from './MainBody.module.css';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import More from '../More';
import DotHeading from '../DotHeading';
import Para from '../Para';
import Image from '../Image';
import Expand from '../Expand';
import content from '../data/data';
import BlogHeading from '../BlogHeading/BlogHeading';

const MainBody = ({ id }) => {
  var num = 0;
  if(id === "Which-platforms-should-you-use-to-buy-NFTs-in-2023") num = 1;
  else if(id === "Top-5-real-world-use-cases-of-blockchain-technology") num = 2;
  return (
    <>
      <BlogHeading read={content[id].heading.read} heading={content[id].heading.text} />
      <div className={styles.container}>
        <div className={styles.leftBox}>
          {content[id].body.map((elm, id) => {
            const { type, text, dot, src1, src2, weight, line, size } = elm;

            if (type === 'heading') {
              return <DotHeading text={text} dot={dot} key={id} />;
            } else if (type === 'image') {
              return <Image src1={src1} src2={src2} key={id} />;
            } else if (type === 'para') {
              return <Para text={text} weight={weight} line={line} size={size} key={id} />;
            } else if (type === 'expand') {
              return <Expand key={id} />;
            } else if (type === 'contactus') {
              return <ContactUs key={id} />;
            } else if (type === 'aboutus') {
              return <AboutUs key={id} />;
            } else if (type === 'more') {
              return <More key={id} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className={styles.rightBox}>
          <ContactUs />
          <AboutUs />
          <More num={num}/>
          <ContactUs sticky={true} />
        </div>
      </div>
    </>
  );
};

export default MainBody;
