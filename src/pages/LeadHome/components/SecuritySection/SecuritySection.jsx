import React from 'react'


import styles from "./security.module.css";
import security1 from "../assests/leadSecurity1.png"
import security2 from "../assests/leadSecurity2.png"
import security3 from "../assests/leadSecurity3.png"

const SecuritySection = () => {
    return (
        <div className={styles.securityMain}>
            <div className={styles.securityConentWrapper}>
                <div className={styles.securityContent}>
                    <div className={styles.leftContent1}>
                        <h1 className={styles.securityHeading1}>Worried About The Security And Trust?</h1>
                        <p className={styles.securityDesc}>
                            <span>
                                Have you ever ventured into the complex realm of blockchain development, desperately seeking someone who could bring your dreams to life? Picture this: you've spent countless hours scouring the internet, navigating through a maze of self-proclaimed "experts."
                            </span>

                            <span>
                                You've been through the agony of delays, empty promises, and the fear of scams. It's like a 1,000-mile journey without a reliable guide, leaving you feeling like you're in a maze of uncertainty and risk.
                            </span>
                        </p>
                    </div>
                    <div className={styles.rightContent1}>
                        <div className={styles.content1Img}>
                            <img src={security1} alt="security1" />
                        </div>
                    </div>
                </div>

                <div className={styles.securityContent2}>
                    <div className={styles.leftContent2}>
                        <div className={styles.contetn2Img_1}>
                            <img src={security2} alt="security2" />
                        </div>
                        <div className={styles.contetn2Img_2}>
                            <img src={security3} alt="security3" />
                        </div>
                    </div>

                    <div className={styles.rightContent2}>
                        <h1 className={styles.securityHeading2}>Don’t Worry We Are Here To Save You</h1>
                        <p className={styles.securityDesc1}>
                            <span>
                                We're here to rewrite your blockchain journey, turning a chaotic quest into a heavenly experience. Our seasoned experts are your trusted guides, ensuring every step of the way is smooth, secure, and without a shadow of a doubt.
                            </span>

                            <span>
                                With us, there are no more sleepless nights. We guarantee a 100% secure, transparent, and swift journey to your blockchain success. Say goodbye to the fear and frustration, and say hello to a partnership that delivers results, not just in words, but in every action we take. “ Your peace of mind is our top priority.”
                            </span>
                        </p>
                        <p className={styles.securityDesc2}>
                            <span>3+ Years Of Experience In Tech </span>
                            <span>End to end service With 24/7 customer service</span>
                            <span>USA registered Entity</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SecuritySection