import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

import styles from "./exclusivityAuthority.module.css"
import esclusivity from "../../images/Exclusivity.png"
import { fadeInLeft, fadeInRight, fadeInUp } from '../../animationValue';


const ExclusivityAuthority = () => {
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
        <section className={styles.authority} style={{ position: "relative" }}>
            <div className='founder_background_blur_blue' style={{ left: "0", bottom: "-80%" }}></div>
            <motion.h1 className={styles.authorityHeading} ref={ref}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 1 }}>Exclusivity & Authority</motion.h1>
            <div className={styles.authorityWrapper}>
                <motion.div className={styles.authorityAnimation} ref={secRef}
                    variants={fadeInLeft}
                    initial="initial"
                    animate={secInView ? "animate" : "initial"}
                    transition={{ duration: 1 }}>
                    <div className={styles.authoritySpline}>
                        <img src={esclusivity} alt="esclusivity" style={{ margin: "auto" }} />
                    </div>
                </motion.div>

                <motion.div className={styles.authorityItem}
                    ref={thirdRef}
                    variants={fadeInRight}
                    initial="initial"
                    animate={thirdInView ? "animate" : "initial"}
                    transition={{ duration: 1 }}
                >
                    <p className={styles.authorityDesc}>
                        "Think you've seen elite? Wait till you're in a room (okay, a virtual room) with the masterminds behind today's blockchain breakthroughs. Here, we're picky - not everyone with a whitepaper and a wallet gets in. It's a circle that's as exclusive as it is enlightening."
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default ExclusivityAuthority