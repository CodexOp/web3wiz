import React from 'react'

import styles from "./exclusivityAuthority.module.css"

const ExclusivityAuthority = () => {
    return (
        <section className={styles.authority} style={{ position: "relative" }}>
            <div className='founder_background_blur_blue' style={{ left: "0", bottom: "-80%" }}></div>
            <h1 className={styles.authorityHeading}>Exclusivity & Authority</h1>
            <div className={styles.authorityWrapper}>
                <div className={styles.authorityAnimation}>
                    <div className={styles.authoritySpline}></div>
                </div>

                <div className={styles.authorityItem}>
                    <p className={styles.authorityDesc}>
                        "Think you've seen elite? Wait till you're in a room (okay, a virtual room) with the masterminds behind today's blockchain breakthroughs. Here, we're picky - not everyone with a whitepaper and a wallet gets in. It's a circle that's as exclusive as it is enlightening."
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ExclusivityAuthority