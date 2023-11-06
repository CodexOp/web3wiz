import React from 'react'
import { useInView } from "react-intersection-observer";

import styles from "./howItwork.module.css";
import howItwork from "../../images/howItWork.svg"
import icon from '../../iconFounder';
import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight, fadeInUp } from '../../animationValue';

const HowWork = () => {

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust the threshold as needed
    });

    const [secondRef, secInView] = useInView({
        triggerOnce: false,
        threshold: 0.2, // Adjust the threshold as needed
    });

    const [thirdRef, thirdInView] = useInView({
        triggerOnce: false,
        threshold: 0.2, // Adjust the threshold as needed
    });
    const [fourthRef, fourthInView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust the threshold as needed
    });

    const [fifthRef, fifthInView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust the threshold as needed
    })
    return (
        <section className={`${styles.howWork}`}>
            <motion.h1
                ref={ref}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 1 }}
                className={`${styles.howWorkHeading}`} >How it Works</motion.h1>
            <div className={styles.workWrapper}>
                <div className={styles.workContainer}>
                    <motion.div className={styles.workItem}
                        ref={secondRef}
                        variants={fadeInLeft}
                        initial="initial"
                        animate={secInView ? "animate" : "initial"}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.workIcon}>
                            {icon.handIcon}
                        </div>
                        <motion.div className={styles.workContent}>
                            <p className={styles.workContentHeading}>Join Up</p>
                            <p className={styles.workConentDesc}>Apologies, but merely filling out a form won't suffice. Qualification is the key to unlocking the inner circle.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div className={styles.workItem}
                        ref={thirdRef}
                        variants={fadeInLeft}
                        initial="initial"
                        animate={thirdInView ? "animate" : "initial"}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.workIcon}>
                            {icon.loveHand}
                        </div>
                        <div className={styles.workContent}>
                            <p className={styles.workContentHeading}>Engage</p>
                            <div className={styles.workConentDesc}>From AMAs with industry pioneers to candid founder to founder chats.</div>
                        </div>
                    </motion.div>

                    <motion.div className={styles.workItem}
                        ref={fourthRef}
                        variants={fadeInLeft}
                        initial="initial"
                        animate={fourthInView ? "animate" : "initial"}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.workIcon}>
                            {icon.people}
                        </div>
                        <div className={styles.workContent}>
                            <p className={styles.workContentHeading}>Evolve</p>
                            <p className={styles.workConentDesc}>Take away practical strategies, tried and tested by peers who've been in the trenches.</p>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.workImageContainer}>
                    <motion.div className={styles.workImage}
                        ref={fifthRef}
                        variants={fadeInRight}
                        initial="initial"
                        animate={fifthInView ? "animate" : "initial"}
                        transition={{ duration: 1 }}
                    >
                        <img src={howItwork} alt="howItwork" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HowWork