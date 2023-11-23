import React from 'react'
import Marquee from "react-fast-marquee";

import styles from "./whatWeare.module.css"

const WhatWeAre = () => {
    const data = [
        {
            id: 1,
            item: "INSPIRED WITH CREATIVITY"
        },
        {
            id: 2,
            item: "TRANSOFRM IDEAS INTO REALITY"
        },
        {
            id: 3,
            item: "UNLOCK THE POTENTIAL"
        },
        {
            id: 4,
            item: "DESIGN & DEVE"
        }
    ]
    return (
        <div>
            <Marquee autoFill={true}>
                {
                    data?.map((item, index) => (
                        <div key={index} className={styles.whatWeareInfo}>
                            <span>●</span> <span>{item.item}</span>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default WhatWeAre