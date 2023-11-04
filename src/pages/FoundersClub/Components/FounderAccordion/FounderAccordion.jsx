import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import styles from "./founderAccordian.module.css"

const FounderAccordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        console.log(index);
        console.log("this is open index", openIndex);
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordionContainer} style={{ position: "relative" }}>
            <div className='founder_background_blur_blue' style={{ left: "0", bottom: "-80%" }}></div>
            <h1 className={styles.accordianHeading}>Frequently Asked Questions</h1>
            <div className={styles.accordionMain}>
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
            </div>
        </div>
    )
}

export default FounderAccordion

// data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="1500"