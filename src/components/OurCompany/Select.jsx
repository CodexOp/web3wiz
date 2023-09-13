import React from 'react';
import styles from './Select.module.css';
import arrow from '../../assets/arrow.svg';
import { useState } from 'react';

const Select = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("What services do you need?");
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
                <div style={borderStyle}>{selected}</div>
                <div
                    className={styles.imageContainer}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img src={arrow} alt="" style={rotationStyle} />
                </div>
                {isOpen ? (
                    <div className={`${styles.services}`}>
                        <li onClick={()=>{
                            setIsOpen(false)
                            setSelected("Smart Contract Developments")
                            props.service((state)=>{
                                return {
                                    ...state,
                                    service: "Smart Contract Developments"
                                }
                            })
                        }}>Smart Contract Developments</li>
                        <hr />
                        <li onClick={()=>{
                            setIsOpen(false)
                            setSelected("Dapp Development")
                            props.service((state)=>{
                                return {
                                    ...state,
                                    service: "Smart Contract Developments"
                                }
                            })
                        }}>Dapp Development</li>
                        <hr />
                        <li onClick={()=>{
                            setIsOpen(false)
                            setSelected("Website Development")
                            props.service((state)=>{
                                return {
                                    ...state,
                                    service: "Website Development"
                                }
                            })
                            
                        }}>Website Development</li>
                        <hr />
                        <li onClick={()=>{
                            setIsOpen(false)
                            setSelected("Landing page Development")
                            props.service((state)=>{
                                return {
                                    ...state,
                                    service: "Landing page Development"
                                }
                            })
                            
                        }}>Landing page Development</li>
                        <hr />
                        <li onClick={()=>{
                            setIsOpen(false)
                            setSelected("Dashboard Development")
                            props.service((state)=>{
                                return {
                                    ...state,
                                    service: "Dashboard Development"
                                }
                            })
                            
                        }}>Dashboard Development</li>
                        <hr />
                        <li onClick={()=>{
                            setIsOpen(false)
                            setSelected("Cryptocurrency Wallet")
                            props.service((state)=>{
                                return {
                                    ...state,
                                    service: "Cryptocurrency Wallet"
                                }
                            })
                            
                        }}>Cryptocurrency Wallet</li>
                        <hr />
                        <li onClick={()=>{
                            setIsOpen(false)
                            setSelected("NFT Marketplace")
                            props.service((state)=>{
                                return {
                                    ...state,
                                    service: "NFT Marketplace"
                                }
                            })
                            
                        }}>NFT Marketplace</li>
                        <hr />
                        <li onClick={()=>{
                            setIsOpen(false)
                            setSelected("Others")
                            props.service((state)=>{
                                return {
                                    ...state,
                                    service: "Others"
                                }
                            })
                            
                        }}>Others</li>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Select;
