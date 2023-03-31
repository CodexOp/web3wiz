import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styles from './Lottie.module.css';
import lottie from 'lottie-web';
import animation from '../../assets/success_animation.json';
let triggerLottie;

const Lottie = ({ text }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const trigger = () => {
    if (active === false) {
      setActive(true);
      const instance = lottie.loadAnimation({
        animationData: animation,
        container: ref.current,
        loop: false,
      });
      instance.addEventListener('complete', () => {
        instance.removeEventListener('complete');
        instance.destroy();
        setActive(false);
      });
    }
  };

  triggerLottie = trigger;

  return (
    <div className={styles.lottie} style={{ display: `${active ? 'block' : 'none'}` }}>
      <p>{text}</p>
      <div ref={ref}></div>
    </div>
  );
};

export { Lottie, triggerLottie };
