import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

import styles from "./founderHero.module.css"
import { Link } from 'react-router-dom';
import { zoomIn } from '../../animationValue';

const FounderHero = () => {
    const scrollTofounderContactFrom = () => {
        const section1 = document.querySelector('#founder_contact_form');
        section1.scrollIntoView({ behavior: 'smooth' });
    };

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust the threshold as needed
    });

    return (
        <section className={styles.heroSection} style={{ position: "relative" }}>
            <div className='founder_background_blur_blue' style={{ right: "0", bottom: "-9rem" }}></div>
            <motion.div className={styles.heroWrapper}
                ref={ref}
                variants={zoomIn}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 1 }}
            >
                <h1 className={styles.heroHeading}>Navigating the <span>Web3 Maze</span> Just Got Easier!</h1>
                <p className={styles.heroDesc}>Tired of deciphering smart contract jargon or feeling the crunch of volatile crypto markets? </p>
                <div className={styles.heroButtonWrapper}>
                    <button className={styles.hreoContactUs} onClick={scrollTofounderContactFrom}>Contact Us</button>
                    <Link to="/founders-form" className='founder_club_button_link'> <button className={"founder_club_button"}>Join our Community</button></Link>
                </div>
            </motion.div>
        </section>
    )
}

export default FounderHero