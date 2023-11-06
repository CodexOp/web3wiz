import React from 'react'

import styles from "./howItwork.module.css";
import howItwork from "../../images/howItWork.svg"
import icon from '../../iconFounder';
import { motion } from "framer-motion"

const HowWork = () => {


    return (
        <section className={`${styles.howWork}`}>
            <motion.h1 initial="hidden"
                whileInView="visible" viewport={{ once: true }} transition={{ duration: 10 }} className={`${styles.howWorkHeading}`} >How it Works</motion.h1>
            <div className={styles.workWrapper}>
                <div className={styles.workContainer}>
                    <div className={styles.workItem}>
                        <div className={styles.workIcon}>
                            {icon.handIcon}
                        </div>
                        <div className={styles.workContent}>
                            <p className={styles.workContentHeading}>Join Up</p>
                            <p className={styles.workConentDesc}>Apologies, but merely filling out a form won't suffice. Qualification is the key to unlocking the inner circle.</p>
                        </div>
                    </div>

                    <div className={styles.workItem} >
                        <div className={styles.workIcon}>
                            {icon.loveHand}
                        </div>
                        <div className={styles.workContent}>
                            <p className={styles.workContentHeading}>Engage</p>
                            <div className={styles.workConentDesc}>From AMAs with industry pioneers to candid founder to founder chats.</div>
                        </div>
                    </div>

                    <div className={styles.workItem}>
                        <div className={styles.workIcon}>
                            {icon.people}
                        </div>
                        <div className={styles.workContent}>
                            <p className={styles.workContentHeading}>Evolve</p>
                            <p className={styles.workConentDesc}>Take away practical strategies, tried and tested by peers who've been in the trenches.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.workImageContainer}>
                    <div className={styles.workImage} >
                        <img src={howItwork} alt="howItwork" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWork