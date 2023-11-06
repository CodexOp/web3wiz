import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight, fadeInUp } from '../../animationValue';

import styles from "./whyjoin.module.css"
import whyJoin from "../../images/whyJoin.svg"
import { Link } from 'react-router-dom'

const WhyJoin = () => {

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
        <section className={styles.whyJoin} style={{ position: "relative" }}>
            <div className='founder_background_blur_blue' style={{ left: "50%", bottom: "-50%" }}></div>
            <motion.h1 className={styles.joinHeading}
                ref={ref}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 1 }}
            >Why Join?</motion.h1>
            <div className={styles.joinWrapper}>
                <motion.div className={styles.joinContentImage}
                    ref={secRef}
                    variants={fadeInLeft}
                    initial="initial"
                    animate={secInView ? "animate" : "initial"}
                    transition={{ duration: 1 }}
                >
                    <div className={styles.joinImage}>
                        <img src={whyJoin} alt="whyJoin" />
                    </div>
                </motion.div>

                <motion.div className={styles.joinContent}
                    ref={thirdRef}
                    variants={fadeInRight}
                    initial="initial"
                    animate={thirdInView ? "animate" : "initial"}
                    transition={{ duration: 1 }}
                >
                    <p className={styles.joinDesc}>
                        "Because here, wisdom flows from real battles, not just boardrooms. Imagine a cabal where sharing a blockchain blunder is as cool as revealing a hidden gem. Exclusivity? Check. Insight? Double-check. A chance to be part of this circle? Priceless (and we don't take that term lightly in the crypto world)."
                    </p>
                    <Link to="/founders-form" className='founder_club_button_link'><button className='founder_club_button'>Apply for the Inner Circle</button></Link>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyJoin