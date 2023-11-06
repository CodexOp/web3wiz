import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

import styles from "./founderAccordian.module.css"
import { fadeInUp } from '../../animationValue';

const FounderAccordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        console.log(index);
        console.log("this is open index", openIndex);
        setOpenIndex(openIndex === index ? null : index);
    };

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust the threshold as needed
    });

    const [secRef, secInView] = useInView({
        triggerOnce: false,
        threshold: 0.2, // Adjust the threshold as needed
    });

    return (
        <div className={styles.accordionContainer} style={{ position: "relative" }}>
            <div className='founder_background_blur_blue' style={{ left: "0", bottom: "-80%" }}></div>
            <motion.h1 className={styles.accordianHeading}
                ref={ref}
                variants={fadeInUp}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                transition={{ duration: 1 }}
            >Frequently Asked Questions</motion.h1>
            <motion.div className={styles.accordionMain}
                ref={secRef}
                variants={fadeInUp}
                initial="initial"
                animate={secInView ? "animate" : "initial"}
                transition={{ duration: 1 }}
            >
                {items?.map((item, index) => (
                    <div key={index} className={`${styles.accordion} ${openIndex === index ? styles.accordionOpen : ""}`}>
                        <div className={styles.accordionHeader} onClick={() => toggleAccordion(index)}>
                            <h2>{item.title}</h2>
                            <FaPlus className={openIndex === index ? styles.icon : ""} />
                        </div>
                        {openIndex === index && (
                            <div className={styles.accordionContent}>
                                <p>{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default FounderAccordion

// data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1500"