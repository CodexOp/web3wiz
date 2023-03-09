import React, { useState } from 'react';
import bg1Img from "../../assets/images/icon-bg1.svg";
import transparencyImg from "../../assets/images/icon-transparency.svg";
import folderLockIcon from "../../assets/images/icon-folderLock.svg";
import shieldIcon from "../../assets/images/icon-shield.svg";
import lockIcon from "../../assets/images/icon-lock.svg";
import projectsImg from "../../assets/images/projectsImg.svg";
import scribbleImg from "../../assets/images/scribbleImg.svg";
import pinksaleIcon from "../../assets/images/icon-pinksale.svg";
import contractcheckerIcon from "../../assets/images/icon-contractchecker.svg";
import cfgninjaIcon from "../../assets/images/icon-cfgninja.svg";
import coinsultIcon from "../../assets/images/icon-coinsult.svg";
import ethereumIcon from "../../assets/images/icon-ethereum.svg";
import binanceIcon from "../../assets/images/icon-binance.svg";
import polygonIcon from "../../assets/images/icon-polygon.svg";
import tronIcon from "../../assets/images/icon-tron.svg";
import Footer from './components/Footer';
import igIcon from "./components/assests/images/icon-ig.svg";
import linkedInIcon from "./components/assests/images/icon-linkedIn.svg";
import telegramIcon from "./components/assests/images/icon-telegram.svg";
import twitterIcon from "./components/assests/images/icon-twitter.svg";
import emailIcon from "./components/assests/images/icon-email.svg";
import blogImg from "./components/assests/images/icon-teamwork.svg";
import arrowIcon from "./components/assests/images/icon-arrow.svg";
import closeIcon from "./components/assests/images/icon-cross.svg";
import starIcon from "./components/assests/images/icon-star.svg";
import quotesIcon from "./components/assests/images/icon-quotes.svg";
import clientImg from "./components/assests/images/icon-clientimg.svg";
import Navbar from "./components/Navbar";

import styles from "./style.module.css";

export default function Homev2()
{
    const [isFaq1Open, setisFaq1Open] = useState(false);
    const [isFaq2Open, setisFaq2Open] = useState(false);
    const [isFaq3Open, setisFaq3Open] = useState(false);

    return (
        <>
            <Navbar/>
            <div className={styles.homeWrapper}>
            <div className={styles.backdropDiv1}>
            <div id="home" className={styles.mainWrapper1}>
                <div className={styles.titleContent}>
                    <div>
                    <div className={styles.mainHeadingTxt}>
                        We&nbsp;create
                        <br />
                        <div className={styles.gradientTxt}>Smart Contracts</div>
                    </div>
                    </div>
                    <div className={styles.titleInfo}>
                        We provide blockchain services from Smart Contract Development and Audit to creating Launchpads, NFT Marketplaces and any kind of unique DAPPs
                    </div>
                    <div className={styles.titleFeatures}>
                        <div className={styles.titleFeatureItem}>
                            <div className={styles.titleFeatureItemContent1}>40+</div>
                            <div className={styles.titleFeatureItemContent2}>SmartContract</div>
                        </div>
                        <div className={styles.titleFeatureItem}>
                            <div className={styles.titleFeatureItemContent1}>100+</div>
                            <div className={styles.titleFeatureItemContent2}>Projects Completed </div>
                        </div>
                        <div className={styles.titleFeatureItem}>
                            <div className={styles.titleFeatureItemContent1}>20+</div>
                            <div className={styles.titleFeatureItemContent2}>Team Members</div>
                        </div>
                    </div>
                    <div className={styles.getaquotaBtn}>Get&nbsp;a&nbsp;Quote</div>
                </div>
                <img src={bg1Img} alt="ai-img" className={styles.floatImg} />
            </div>
            </div>
            <div className={styles.mainWrapper2}>
                <div className={styles.maintext2}>Build with us <span> where scalability is never and issue</span></div>
                <div className={styles.whyChooseDiv}>
                    <div className={styles.whyChooseHeading}>Why Choose us?</div>
                    <div className={styles.whyChooseTxt}>We make sure we bring you more value than you will be investing with us. <br/>Don’t just make dApps/Websites, build real profitable businesses with us.</div>
                </div>
                <div className={styles.featureGrid}>
                    <div className={styles.featureGridItems}>
                        <img src={transparencyImg} alt="transparency-img" className={styles.featureGridIcons}/>
                        <div>Transparency</div>
                    </div>
                    <div className={styles.featureGridItems}>
                        <img src={folderLockIcon} alt="folderLockIcon" className={styles.featureGridIcons}/>
                        <div>Data Protection</div>
                    </div>
                    <div className={styles.featureGridItems}>
                        <img src={shieldIcon} alt="shieldIcon" className={styles.featureGridIcons}/>
                        <div>SAFU Developers</div>
                    </div>
                    <div className={styles.featureGridItems}>
                        <img src={lockIcon} alt="lockIcon" className={styles.featureGridIcons} />
                        <div>Fast & Secure</div>
                    </div>
                </div>
                <div className={styles.clientTxtWrapper}>
                    <div className={styles.clientTxtItem}>
                        <div className={styles.clientTxtnum}>50+</div>
                        <div className={styles.clientTxt1}>CLIENTS</div>
                    </div>
                    <div className={styles.clientTxtItem}>
                        <div className={styles.clientTxt}>
                            {'$'}
                            <div className={styles.clientTxtnum}>
                                100
                            </div>
                            M
                        </div>
                        <div className={styles.clientTxt2}>RAISED BY OUR CLIENTS</div>
                    </div>
                </div>
            </div>
            <div className={styles.mainWrapper3}>
                <div className={styles.ourServicesHeading}>Our <span>Services</span></div>
                <div className={styles.ourServicesTxt}>Our services help everyone from startups to enterprises to launch and maintain their applications on the blockchain.</div>
                <div className={styles.serviceGrid}>
                    <div className={styles.serviceGridRow}>
                    <div className={styles.serviceGridItem}>
                        <img src={transparencyImg} alt="transparency-img"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>SMART CONTRACT</div>
                        <div className={styles.serviceGridItemTxt}>Our services help everyone from startups to enterprises and more</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={folderLockIcon} alt="folderLockIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>DAPP DEVELOPMENT</div>
                        <div className={styles.serviceGridItemTxt}>Our services help everyone from startups to enterprises and more</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={shieldIcon} alt="shieldIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>WEBSITE DEVELOPMENT</div>
                        <div className={styles.serviceGridItemTxt}>Our services help everyone from startups to enterprises and more</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    </div>
                    <div className={styles.serviceGridRow}>
                    <div className={styles.serviceGridItem}>
                        <img src={transparencyImg} alt="transparency-img"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>NFT AND TOKEN</div>
                        <div className={styles.serviceGridItemTxt}>Our services help everyone from startups to enterprises and more</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={folderLockIcon} alt="folderLockIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>ANDROID AND IOS APP</div>
                        <div className={styles.serviceGridItemTxt}>Our services help everyone from startups to enterprises and more</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={shieldIcon} alt="shieldIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>MARKETPLACES</div>
                        <div className={styles.serviceGridItemTxt}>Our services help everyone from startups to enterprises and more</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.styledSectionWrapper}>
                <div className={styles.styledSection1}>
                    <div className={styles.styledSectionTxt}>
                        Tap into the billion-dollar decentralized<br/>
                        market by leveraging our best-in-class<br/>
                        dapp development services
                    </div>
                    <div className={styles.styledwhiteBtn}>Discuss Your Project Idea</div>
                </div>
            </div>
            <div className={styles.mainWrapper4}>
                <div className={styles.ourProjectsHeading}>Our <span>Projects</span></div>
                <div className={styles.ourProjectTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa efficitur, lacinia ex sed, porta metus.</div>
                <div className={styles.projectImgWrapper}>
                    <img src={scribbleImg} alt="scribbleImg" className={styles.scribbleImg} />
                    <img src={projectsImg} alt="projectsImg" className={styles.projectsImg} />
                </div>
                <div className={styles.seeallProjectsBtn}>See&nbsp;all&nbsp;Projects</div>
                <div className={styles.meetOurPartnersHeading}>Meet Our <span>Partners</span></div>
                <div className={styles.partnerDiv}>
                    <div className={styles.partner}>
                        <img src={pinksaleIcon} alt="pinksaleIcon" className={styles.partnerIcons} />
                        <div>Pinksale</div>
                    </div>
                    <div className={styles.partner}>
                        <img src={contractcheckerIcon} alt="contractcheckerIcon" className={styles.partnerIcons} />
                        <div>Contract Checker</div>
                    </div>
                    <div className={styles.partner}>
                        <img src={cfgninjaIcon} alt="cfgninjaIcon" className={styles.partnerIcons} />
                        <div>CFG Ninja</div>
                    </div>
                    <div className={styles.partner}>
                        <img src={coinsultIcon} alt="coinsultIcon" className={styles.partnerIcons} />
                        <div>Coinsult</div>
                    </div>
                </div>
            </div>
            <div className={styles.styledSectionWrapper}>
                <div className={styles.styledSection2}>
                    <div className={styles.styledSectionTxt}>
                        Are you looking for a reliable<br/>
                        Dapp solution that can give your<br/>
                        business the much-needed boost?
                    </div>
                    <div className={styles.styledwhiteBtn}>Talk With Experts</div>
                </div>
            </div>
            <div className={styles.mainWrapper5}>
                <div className={styles.platformHeading}>Platforms We Work On</div>
                <div className={styles.platformsDiv}>
                    <div className={styles.platform}>
                        <img src={ethereumIcon} alt="ethereumIcon"  className={styles.platformIcon}/>
                        <div>Ethereum</div>
                    </div>
                    <div className={styles.platform}>
                        <img src={binanceIcon} alt="binanceIcon"  className={styles.platformIcon}/>
                        <div>Binance</div>
                    </div>
                    <div className={styles.platform}>
                        <img src={polygonIcon} alt="polygonIcon"  className={styles.platformIcon}/>
                        <div>Polygon</div>
                    </div>
                    <div className={styles.platform}>
                        <img src={tronIcon} alt="tronIcon"  className={styles.platformIcon}/>
                        <div>Tron</div>
                    </div>
                </div>
            </div>  
            <div className={styles.mainWrapper6}>
                <div>
                    <div className={styles.ourClientReviewHeading}>Our Client <span>Reviews</span></div>
                    <div className={styles.clientReviewCrousel}>
                        <div className={styles.clientReviewCrouselItem}>
                            <img src={quotesIcon} alt="quotesIcon" className={styles.quotesIcon}/>
                            <div className={styles.clientWrapper}>
                                <div className={styles.clientImgWrapper}>
                                    <img src={clientImg} alt="clientImg"  className={styles.clientImgIcon}/>
                                </div>
                                <div className={styles.starDiv}>
                                <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                <img src={starIcon} alt="starIcon"  className={styles.starIcon}/>
                                </div>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa efficitur, lacinia ex sed, porta metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                            <div className={styles.clientNameWrapper}>
                                <div className={styles.clientName}>Joseph James</div>
                                <div className={styles.clientInfo}>Founder - Cerebrum</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.faqsDiv}>
                    <div className={styles.faqsDivHeading}>Frequently Asked <span>Questions</span></div>
                    <div className={styles.faqDropdown}>
                        <div className={styles.faqDropdownheading}>
                        <div>
                            How You Develop Dapps?
                        </div>
                        <div>
                            <div
                            style={{
                                display: isFaq1Open ? "none" : "flex",
                                overflow: "hidden",
                            }}
                            >
                            </div>
                            <div
                            onClick={() => setisFaq1Open(!isFaq1Open)}
                            className={styles.dropdownArrowicon}
                            >
                            <img
                                src={isFaq1Open? closeIcon :  arrowIcon}
                                alt="arrow"
                            />
                            </div>
                        </div>
                        </div>
                        <div
                        className={styles.faqDropdowntxtContent}
                        style={{
                            height: isFaq1Open ? "auto" : 0,
                            margin: isFaq1Open ? "10px 0" : "0",
                            overflow: "hidden",
                            transition: "height 0.5s ease-out",
                        }}
                        >
                        Over time, blockchain, especially the crypto space, has been creating a bridge between traditional financial models with its own decentralized versions. Right from using cryptocurrencies to making.
                    </div>
                    </div>
                    <div className={styles.faqDropdown}>
                        <div className={styles.faqDropdownheading}>
                        <div>
                            How You Develop Dapps?
                        </div>
                        <div>
                            <div
                            style={{
                                display: isFaq2Open ? "none" : "flex",
                                overflow: "hidden",
                            }}
                            >
                            </div>
                            <div
                            onClick={() => setisFaq2Open(!isFaq2Open)}
                            className={styles.dropdownArrowicon}
                            >
                            <img
                                src={isFaq2Open? closeIcon :  arrowIcon}
                                alt="arrow"
                            />
                            </div>
                        </div>
                        </div>
                        <div
                        className={styles.faqDropdowntxtContent}
                        style={{
                            height: isFaq2Open ? "auto" : 0,
                            margin: isFaq2Open ? "10px 0" : "0",
                            overflow: "hidden",
                            transition: "height 0.5s ease-out",
                        }}
                        >
                        Over time, blockchain, especially the crypto space, has been creating a bridge between traditional financial models with its own decentralized versions. Right from using cryptocurrencies to making.
                    </div>
                    </div>
                    <div className={styles.faqDropdown}>
                        <div className={styles.faqDropdownheading}>
                        <div>
                            How You Develop Dapps?
                        </div>
                        <div>
                            <div
                            style={{
                                display: isFaq3Open ? "none" : "flex",
                                overflow: "hidden",
                            }}
                            >
                            </div>
                            <div
                            onClick={() => setisFaq3Open(!isFaq3Open)}
                            className={styles.dropdownArrowicon}
                            >
                            <img
                                src={isFaq3Open? closeIcon :  arrowIcon}
                                alt="arrow"
                            />
                            </div>
                        </div>
                        </div>
                        <div
                        className={styles.faqDropdowntxtContent}
                        style={{
                            height: isFaq3Open ? "auto" : 0,
                            margin: isFaq3Open ? "10px 0" : "0",
                            overflow: "hidden",
                            transition: "height 0.5s ease-out",
                        }}
                        >
                        Over time, blockchain, especially the crypto space, has been creating a bridge between traditional financial models with its own decentralized versions. Right from using cryptocurrencies to making.
                    </div>
                    </div>
                </div>

                <div className={styles.blogsDiv}>
                    <div className={styles.blogsDivHeading}>Latest <span>Blogs</span></div>
                    <div className={styles.blogsGrid}>
                    <div className={styles.blog}>
                         <img src={blogImg} className={styles.blogImg} alt="blog-img" />
                         <div className={styles.blogHeading}>How to build a decentralised App</div>
                         <div className={styles.blogDesc}>
                            Over time, blockchain, especially the crypto space, has been creating a bridge between traditional financial models with .&nbsp;.&nbsp;.<br/>
                         </div>
                        <div className={styles.readmoreBtn}>Read More{'>'}</div>
                    </div>
                    <div className={styles.blog}>
                         <img src={blogImg} className={styles.blogImg} alt="blog-img" />
                         <div className={styles.blogHeading}>How to build a decentralised App</div>
                         <div className={styles.blogDesc}>
                            Over time, blockchain, especially the crypto space, has been creating a bridge between traditional financial models with .&nbsp;.&nbsp;.<br/>
                         </div>
                        <div className={styles.readmoreBtn}>Read More{'>'}</div>
                    </div>
                    <div className={styles.blog}>
                         <img src={blogImg} className={styles.blogImg} alt="blog-img" />
                         <div className={styles.blogHeading}>How to build a decentralised App</div>
                         <div className={styles.blogDesc}>
                            Over time, blockchain, especially the crypto space, has been creating a bridge between traditional financial models with .&nbsp;.&nbsp;.<br/>
                         </div>
                        <div className={styles.readmoreBtn}>Read More{'>'}</div>
                    </div>
                    </div>
                </div>
                <div className={styles.newsletterHeading}>Subscribe TO Our <span>Newsletter</span></div>
                <div className={styles.newsletterTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel massa efficitur, lacinia ex sed, porta metus.</div>
                <div className={styles.signupWrapper}>
                    <div  className={styles.signupInput}>
                        <input placeholder="Enter Your Email Address" />
                        <div className={styles.subscribeBtn}>
                            Subscribe
                        </div>
                    </div>
                </div>
                <div className={styles.socialIconDiv}>
                        <a href="https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ=">
                            <img src={igIcon} className={styles.socialIcons} alt="ig-icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/thematrixlabs/">
                            <img src={linkedInIcon} className={styles.socialIcons} alt="linkedIn-icon"/>
                        </a>
                        <a href="https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09">
                            <img src={twitterIcon} className={styles.socialIcons} alt="twitter-icon"/>
                        </a>
                        <a href="https://t.me/brickMatrix">
                            <img src={telegramIcon} className={styles.socialIcons} alt="telegram-icon"/>
                        </a>
                        <a href="mailto:contact@thematrixlabs.com">
                            <img src={emailIcon} className={styles.socialIcons} alt="email-icon"/>
                        </a>
                    </div>
            </div>
            </div>
            <Footer/>
        </>
    );
}