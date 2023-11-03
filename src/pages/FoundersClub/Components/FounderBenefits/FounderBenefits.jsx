import React from 'react'

import styles from "./founderBenefits.module.css"
import icon from '../../iconFounder';

const FounderBenefits = () => {
    return (
        <section className={styles.benefits}>
            <h1 className={styles.benefitsHeading}>Benefits</h1>
            <div className={styles.benefitsWrapper}>
                <div className={styles.benefitsContainer}>
                    <div className={styles.benefitsItem}>
                        <div className={styles.benefitsIcon}>
                            {icon.connection}
                        </div>
                        <div className={styles.benefitsContent}>
                            <p className={styles.benefitsContentHeading}>Real Connections</p>
                            <p className={styles.benefitsConentDesc}>Swap stories with those who truly 'get it' — from late-night bug fixes to navigating regulatory mazes.</p>
                        </div>
                    </div>

                    <div className={styles.benefitsItem}>
                        <div className={styles.benefitsIcon}>
                            {icon.insights}
                        </div>
                        <div className={styles.benefitsContent}>
                            <p className={styles.benefitsContentHeading}>Practical Insights</p>
                            <div className={styles.benefitsConentDesc}>Beyond the buzzwords, dive into discussions about real-world applications, funding hurdles, and staying agile in a shifting digital landscape.</div>
                        </div>
                    </div>

                    <div className={styles.benefitsItem}>
                        <div className={styles.benefitsIcon}>
                            {icon.shareExperience}
                        </div>
                        <div className={styles.benefitsContent}>
                            <p className={styles.benefitsContentHeading}>Shared Experiences</p>
                            <p className={styles.benefitsConentDesc}>Find both a sounding board and a cheer squad among peers who know the highs and lows of running a blockchain business.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.benefitsImageContainer}>
                    <div className={styles.benefitsImage}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderBenefits