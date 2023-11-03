import React from 'react'

import styles from "./whyjoin.module.css"
import whyJoin from "../../images/whyJoin.svg"

const WhyJoin = () => {
    return (
        <section className={styles.whyJoin} style={{ position: "relative" }}>
            <div className='founder_background_blur_blue' style={{ left: "50%", bottom: "-50%" }}></div>
            <h1 className={styles.joinHeading}>Why Join?</h1>
            <div className={styles.joinWrapper}>
                <div className={styles.joinContentImage}>
                    <div className={styles.joinImage}>
                        <img src={whyJoin} alt="whyJoin" />
                    </div>
                </div>

                <div className={styles.joinContent}>
                    <p className={styles.joinDesc}>
                        "Because here, wisdom flows from real battles, not just boardrooms. Imagine a cabal where sharing a blockchain blunder is as cool as revealing a hidden gem. Exclusivity? Check. Insight? Double-check. A chance to be part of this circle? Priceless (and we don't take that term lightly in the crypto world)."
                    </p>
                    <button className='founder_club_button'>Apply for the Inner Circle</button>
                </div>
            </div>
        </section>
    )
}

export default WhyJoin