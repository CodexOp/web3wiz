import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

import styles from "./founderBenefits.module.css"
import icon from '../../iconFounder';
import benefts from "../../images/Benefits.png"
import { fadeInLeft, fadeInRight, fadeInUp } from '../../animationValue';

const FounderBenefits = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust the threshold as needed
    });

    const [secRef, secInView] = useInView({
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
        <section className={styles.benefits}>
            <motion.h1 className={styles.benefitsHeading}
                ref={ref}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 1 }}
            >Benefits</motion.h1>
            <div className={styles.benefitsWrapper}>
                <div className={styles.benefitsContainer}>

                    <motion.div className={styles.benefitsItem}
                        ref={secRef}
                        variants={fadeInLeft}
                        initial="initial"
                        animate={secInView ? "animate" : "initial"}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.benefitsIcon}>
                            {icon.connection}
                        </div>
                        <div className={styles.benefitsContent}>
                            <p className={styles.benefitsContentHeading}>Real Connections</p>
                            <p className={styles.benefitsConentDesc}>Swap stories with those who truly 'get it' — from late-night bug fixes to navigating regulatory mazes.</p>
                        </div>
                    </motion.div>

                    <motion.div className={styles.benefitsItem}
                        ref={thirdRef}
                        variants={fadeInLeft}
                        initial="initial"
                        animate={thirdInView ? "animate" : "initial"}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.benefitsIcon}>
                            {icon.insights}
                        </div>
                        <div className={styles.benefitsContent}>
                            <p className={styles.benefitsContentHeading}>Practical Insights</p>
                            <div className={styles.benefitsConentDesc}>Beyond the buzzwords, dive into discussions about real-world applications, funding hurdles, and staying agile in a shifting digital landscape.</div>
                        </div>
                    </motion.div>

                    <motion.div className={styles.benefitsItem}
                        ref={fourthRef}
                        variants={fadeInLeft}
                        initial="initial"
                        animate={fourthInView ? "animate" : "initial"}
                        transition={{ duration: 1 }}
                    >
                        <div className={styles.benefitsIcon}>
                            {icon.shareExperience}
                        </div>
                        <div className={styles.benefitsContent}>
                            <p className={styles.benefitsContentHeading}>Shared Experiences</p>
                            <p className={styles.benefitsConentDesc}>Find both a sounding board and a cheer squad among peers who know the highs and lows of running a blockchain business.</p>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.benefitsImageContainer}>
                    <motion.div className={styles.benefitsImage}
                        ref={fifthRef}
                        variants={fadeInRight}
                        initial="initial"
                        animate={fifthInView ? "animate" : "initial"}
                        transition={{ duration: 1 }}
                    >
                        <img src={benefts} alt="benefts" style={{ margin: "auto" }} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default FounderBenefits