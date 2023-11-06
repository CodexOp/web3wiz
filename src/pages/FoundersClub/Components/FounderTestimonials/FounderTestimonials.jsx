import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

import icon from '../../iconFounder'

import styles from "./founderTestimonials.module.css"
import profileItem1 from "../../images/profileItem1.png"
import profileItem2 from "../../images/profileItem2.png"
import profileItem3 from "../../images/profileItem3.png"
import { fadeInLeft, fadeInRight, fadeInUp } from '../../animationValue';

const FounderTestimonials = () => {
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
    const [fourthRef, fourthInView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust the threshold as needed
    });
    return (
        <section className={styles.testimonial} style={{ position: "relative" }}>
            <div className='founder_background_blur_blue' style={{ right: "0", bottom: "-20%" }}></div>
            <motion.div className={styles.testimonialHeaderwrapper}
                ref={ref}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 1 }}
            >
                <div className={styles.testimonialBigquote}>{icon.bigQuote}</div>
                <div className={styles.testimonialHeader}>
                    <p className={styles.testimonialHeading}>Testimonials</p>
                    <p className={styles.testimonialHeaderDesc}>Get inspired by these stories.</p>
                </div>
            </motion.div>

            <div className={styles.testimonialContentWrapper}>
                <div className={styles.testimonialContent}>
                    <div>
                        <motion.div className={`${styles.testimonialItem} ${styles.testItem1}`}
                            ref={secRef}
                            variants={fadeInLeft}
                            initial="initial"
                            animate={secInView ? "animate" : "initial"}
                            transition={{ duration: 1 }}
                        >
                            <div className={styles.testimonialSmallquote}>{icon.smallQuote}</div>
                            <div className={styles.testimonialItemData}>
                                <p className={styles.testimonialDesc}>
                                    Joining The Matrix Labs was a game-changer. During a major DAO attack, the community's advice and support were invaluable. It's not just about networking; it's real people tackling real problems together.
                                </p>
                                <div className={styles.testimonialProfileWrapper}>
                                    <div className={styles.testimonialProfile}>
                                        <img src={profileItem1} alt="profileItem1" />
                                    </div>
                                    <div className={styles.testimonialData}>
                                        <p className={styles.testimonialName}>Mira Kim</p>
                                        <p className={styles.testimonialPosition}>CEO of BlockBright</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className={styles.testimonialSecondContent}>
                        <motion.div className={`${styles.testimonialItem} ${styles.testItem2}`}
                            ref={thirdRef}
                            variants={fadeInRight}
                            initial="initial"
                            animate={thirdInView ? "animate" : "initial"}
                            transition={{ duration: 1 }}
                        >
                            <div className={styles.testimonialSmallquote}>{icon.smallQuote}</div>
                            <div className={styles.testimonialItemData}>
                                <p className={styles.testimonialDesc}>
                                    The round-the-clock ICO madness was draining me. This group showed me how to balance life while scaling up. It's rare to find such honest, experience-based guidance.
                                </p>
                                <div className={styles.testimonialProfileWrapper}>
                                    <div className={styles.testimonialProfile}>
                                        <img src={profileItem2} alt="profileItem2" />
                                    </div>
                                    <div className={styles.testimonialData}>
                                        <p className={styles.testimonialName}>Rajiv Singh</p>
                                        <p className={styles.testimonialPosition}>Founder of EtherSyno</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className={`${styles.testimonialItem} ${styles.testItem3}`}
                            ref={fourthRef}
                            variants={fadeInUp}
                            initial="initial"
                            animate={fourthInView ? "animate" : "initial"}
                            transition={{ duration: 1 }}
                        >
                            <div className={styles.testimonialSmallquote}>{icon.smallQuote}</div>
                            <div className={styles.testimonialItemData}>
                                <p className={styles.testimonialDesc}>
                                    The round-the-clock ICO madness was draining me. This group showed me how to balance life while scaling up. It's rare to find such honest, experience-based guidance.
                                </p>
                                <div className={styles.testimonialProfileWrapper}>
                                    <div className={styles.testimonialProfile}>
                                        <img src={profileItem3} alt="profileItem3" />
                                    </div>
                                    <div className={styles.testimonialData}>
                                        <p className={styles.testimonialName}>Kristin Watson</p>
                                        <p className={styles.testimonialPosition}>Co-Founder, Strapi</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderTestimonials