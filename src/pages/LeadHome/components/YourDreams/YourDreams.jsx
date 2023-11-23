import React from 'react'

import styles from "./yourDreams.module.css"

import dream1 from "../assests/dreamImage1.svg"
import dream2 from "../assests/dreamImage2.png"

const YourDreams = () => {
    const icons = {
        check: <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
            <path d="M16.7012 31.9994L28.0149 43.3131L50.6399 20.6855" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    }
    const data = [
        {
            id: 1,
            icon: icons.check,
            text: "Free Comprehensive Consultation (Worth $500)"
        },
        {
            id: 2,
            icon: icons.check,
            text: "No Hidden Cost (Savings of $1,000+)"
        },
        {
            id: 3,
            icon: icons.check,
            text: "Future-Proof Security Updates (Savings of $2,000+)"
        },
        {
            id: 4,
            icon: icons.check,
            text: "Swift and Reliable Service (Savings of $500)"
        },
        {
            id: 5,
            icon: icons.check,
            text: "Beating Competitor Offers by 10% (Savings Vary)"
        },

    ]

    return (
        <div className={styles.yourDreamMain}>
            <h1 className={styles.securityHeading1}>Your Dreams, Our efforts: You will save <span>$5000</span></h1>
            <div className={styles.yourDreamWrapper}>
                <div className={styles.securityContent}>
                    <div className={styles.leftContent2}>
                        <div className={styles.contetn2Img_1}>
                            <img src={dream1} alt="security2" />
                        </div>
                        <div className={styles.contetn2Img_2}>
                            <img src={dream2} alt="security3" />
                        </div>
                    </div>

                    <div className={styles.rightContent2}>
                        <h1 className={styles.securityHeading2}>Your Dreams, Our efforts: You will save <span>$5000</span></h1>

                        <div className={styles.dreamContentWrapper}>
                            {
                                data?.map((item) => (
                                    <div key={item.id} className={styles.dreamContent}>
                                        <div className={styles.dreamIcon}>{item.icon}</div>
                                        <div className={styles.dreamText}>{item.text}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourDreams