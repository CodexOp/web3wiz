import React from 'react';
import styles from './Select.module.css';
import arrow from '../../assets/arrow.svg';
import { useState } from 'react';

const Select = () => {
    const [isOpen, setIsOpen] = useState(false);

    const rotationStyle = {
        transform: `rotate(${isOpen ? -180 : 0}deg)`,
        transition: '.5s ease-out',
    };

    const borderStyle = {
        border: `${isOpen ? '1.5px solid #081c31' : 'none'}`,
        borderRadius: '10px 0px 0px 10px',
    };

    return (
        <>
            <div className={styles.container}>
                <div style={borderStyle}>What services do you need?</div>
                <div
                    className={styles.imageContainer}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img src={arrow} alt="" style={rotationStyle} />
                </div>
                {isOpen ? (
                    <div className={`${styles.services}`}>
                        <li>Smart Contract Developments</li>
                        <hr />
                        <li>Dapp Development</li>
                        <hr />
                        <li>Website Development</li>
                        <hr />
                        <li>Landing page Development</li>
                        <hr />
                        <li>Dashboard Development</li>
                        <hr />
                        <li>Cryptocurrency Wallet</li>
                        <hr />
                        <li>NFT Marketplace</li>
                        <hr />
                        <li>Others</li>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Select;
