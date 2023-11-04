import React from 'react'

import styles from "./founderHero.module.css"
import { Link } from 'react-router-dom';

const FounderHero = () => {
    const scrollTofounderContactFrom = () => {
        const section1 = document.querySelector('#founder_contact_form');
        section1.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section className={styles.heroSection} style={{ position: "relative" }}>
            <div className='founder_background_blur_blue' style={{ right: "0", bottom: "-9rem" }}></div>
            <div className={styles.heroWrapper} >
                <h1 className={styles.heroHeading}>Navigating the <span>Web3 Maze</span> Just Got Easier!</h1>
                <p className={styles.heroDesc}>Tired of deciphering smart contract jargon or feeling the crunch of volatile crypto markets? </p>
                <div className={styles.heroButtonWrapper}>
                    <button className={styles.hreoContactUs} onClick={scrollTofounderContactFrom}>Contact Us</button>
                    <Link to="/founders-form" className='founder_club_button_link'> <button className={"founder_club_button"}>Join our Community</button></Link>
                </div>
            </div>
        </section>
    )
}

export default FounderHero