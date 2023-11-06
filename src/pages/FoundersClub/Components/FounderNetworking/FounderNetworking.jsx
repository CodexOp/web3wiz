import React from 'react'

import styles from "./founderNetworking.module.css"
import networking from "../../images/Networking.png"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight, fadeInUp } from '../../animationValue';

const FounderNetworking = () => {
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
    return (
        <section className={styles.network}>
            <motion.h1 className={styles.networkHeading}
                ref={ref}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 1 }}
            >Networking Redefined</motion.h1>
            <div className={styles.networkWrapper}>
                <motion.div className={styles.networkItem}
                    ref={secRef}
                    variants={fadeInLeft}
                    initial="initial"
                    animate={secInView ? "animate" : "initial"}
                    transition={{ duration: 1 }}
                >
                    <p className={styles.networkDesc}>
                        "Rub virtual shoulders with the who's who of the web3 world. We're talking about folks who speak hash rates and tokenomics fluently. It's not just about expanding your LinkedIn connections; it's about expanding your mind."
                    </p>
                </motion.div>

                <motion.div className={styles.networkAnimation}
                    ref={thirdRef}
                    variants={fadeInRight}
                    initial="initial"
                    animate={thirdInView ? "animate" : "initial"}
                    transition={{ duration: 1 }}
                >
                    <div className={styles.networkSpline}>
                        <img src={networking} alt="networking" style={{ margin: "auto" }} />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default FounderNetworking