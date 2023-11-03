import React from 'react'

import styles from "./founderNetworking.module.css"

const FounderNetworking = () => {
    return (
        <section className={styles.network}>
            <h1 className={styles.networkHeading}>Networking Redefined</h1>
            <div className={styles.networkWrapper}>
                <div className={styles.networkItem}>
                    <p className={styles.networkDesc}>
                        "Rub virtual shoulders with the who's who of the web3 world. We're talking about folks who speak hash rates and tokenomics fluently. It's not just about expanding your LinkedIn connections; it's about expanding your mind."
                    </p>
                </div>

                <div className={styles.networkAnimation}>
                    <div className={styles.networkSpline}></div>
                </div>
            </div>
        </section>
    )
}

export default FounderNetworking