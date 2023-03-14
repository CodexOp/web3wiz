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
import rightarrow from "./components/assests/images/right-arrow.svg";
import twitterIcon from "./components/assests/images/icon-twitter.svg";
import emailIcon from "./components/assests/images/icon-email.svg";
import blogImg from "./components/assests/images/icon-teamwork.svg";
import arrowIcon from "./components/assests/images/icon-arrow.svg";
import closeIcon from "./components/assests/images/icon-cross.svg";
import starIcon from "./components/assests/images/icon-star.svg";
import quotesIcon from "./components/assests/images/icon-quotes.svg";
import clientImg from "./components/assests/images/icon-clientimg.svg";
import Navbar from "./components/Navbar";
import ReactTypingEffect from 'react-typing-effect';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {Link} from "react-router-dom"
import styles from "./style.module.css";
import Partners from './components/Partners/Partners';
import Review from './components/reviews/Review';
import Raised from './components/amountRaised/Raised';

export default function Homev2()
{
    const [isFaq1Open, setisFaq1Open] = useState(false);
    const [isFaq2Open, setisFaq2Open] = useState(false);
    const [isFaq3Open, setisFaq3Open] = useState(false);
    const [isFaq4Open, setisFaq4Open] = useState(false);
    const [isFaq5Open, setisFaq5Open] = useState(false);

    return (
        <>
            <Navbar/>
            <div className={styles.homeWrapper} id="home">
            <div className={styles.backdropDiv1}>
            <div id="home" className={styles.mainWrapper1}>
                <div className={styles.titleContent}>
                    <div>
                    <div className={styles.mainHeadingTxt}>
                        We&nbsp;create
                        <br />
                        <div className={styles.gradientTxt}>  <ReactTypingEffect speed={50}
        text={["Smart Contract", "Websites!", "Dapps", "Marketplace"]}
      /></div>
                    </div>
                    </div>
                    <div className={styles.titleInfo}>
                        We provide blockchain services from Smart Contract Development and Audit to creating Launchpads, NFT Marketplaces and any kind of unique DAPPs
                    </div>
                    <div className={styles.titleFeatures}>
                        <div className={styles.titleFeatureItem}>
                            <div className={styles.titleFeatureItemContent1}><CountUp end={40} delay={2} />+</div>
                            <div className={styles.titleFeatureItemContent2}>SmartContract</div>
                        </div>
                        <div className={styles.titleFeatureItem}>
                            <div className={styles.titleFeatureItemContent1}><CountUp end={100} delay={2} />+</div>
                            <div className={styles.titleFeatureItemContent2}>Projects Completed </div>
                        </div>
                        <div className={styles.titleFeatureItem}>
                            <div className={styles.titleFeatureItemContent1}><CountUp end={20} delay={2} />+</div>
                            <div className={styles.titleFeatureItemContent2}>Team Members</div>
                        </div>
                    </div>
                    <Link to="/form"><div className={styles.getaquotaBtn}>Get&nbsp;a&nbsp;Quote <img className={styles.rightarrow} src={rightarrow} alt="right arrow" />
</div></Link>
                </div>
                <img src={bg1Img} alt="ai-img" className={styles.floatImg} />
            </div>
            </div>
            <div className={styles.mainWrapper2}>
                <div className={styles.maintext2}>Build with us <span> where scalability is never an issue</span></div>
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
                        <div>SAFU Devs</div>
                    </div>
                    <div className={styles.featureGridItems}>
                        <img src={lockIcon} alt="lockIcon" className={styles.featureGridIcons} />
                        <div>Fast & Secure</div>
                    </div>
                </div>
                <div className={styles.clientTxtWrapper}>
                    <div className={styles.clientTxtItem}>
                        <div className={styles.clientTxtnum}><CountUp end={50}>
    {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start}>
        <span ref={countUpRef} />
      </VisibilitySensor>
    )}
  </CountUp>+</div>
                        <div className={styles.clientTxt1}>CLIENTS</div>
                    </div>
                    <div className={styles.clientTxtItem}>
                        <div className={styles.clientTxt}>
                            {'$'}
                            <div className={styles.clientTxtnum}>
                            <CountUp end={100}>
    {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start}>
        <span ref={countUpRef} />
      </VisibilitySensor>
    )}
  </CountUp>

                            </div>
                            M
                        </div>
                        <div className={styles.clientTxt2}>RAISED</div>
                    </div>
                </div>
               
                
                

            </div>
            <Raised />

            <div id="services" className={styles.mainWrapper3}>
                <div className={styles.ourServicesHeading}>Our <span>Services</span></div>
                <div className={styles.ourServicesTxt}>Our services help everyone from startups to enterprises to launch and maintain their applications on the blockchain.</div>
                <div className={styles.serviceGrid}>
            
                    <div className={styles.serviceGridItem}>
                        <img src={transparencyImg} alt="transparency-img"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>SMART CONTRACT</div>
                        <div className={styles.serviceGridItemTxt}>Ensure security with our custom smart contracts, Certik verified and tailored for you</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={folderLockIcon} alt="folderLockIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>DAPP DEVELOPMENT</div>
                        <div className={styles.serviceGridItemTxt}>Securely build and launch your DApp with our expert development services</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={shieldIcon} alt="shieldIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>WEBSITE DEVELOPMENT</div>
                        <div className={styles.serviceGridItemTxt}>Create a sleek and user-friendly website of your desired theme with our team.</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={transparencyImg} alt="transparency-img"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>NFT AND TOKEN</div>
                        <div className={styles.serviceGridItemTxt}>Tokenize your assets with our NFT and token services.</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={folderLockIcon} alt="folderLockIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>ANDROID AND IOS APP</div>
                        <div className={styles.serviceGridItemTxt}>Launch your mobile app on both Android and iOS with us.</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={shieldIcon} alt="shieldIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>MARKETPLACES</div>
                        <div className={styles.serviceGridItemTxt}>Join the NFT revolution with our NFT marketplace development service.</div>
                        <div className={styles.knowmoreBtn}>Know More</div>
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
                    <Link to="/form"><div className={styles.styledwhiteBtn}>Discuss Your Project Idea</div></Link>
                </div>
            </div>
            <div className={styles.mainWrapper4}>
                <div className={styles.ourProjectsHeading}>Our <span>Projects</span></div>
                <div className={styles.ourProjectTxt}>Explore our diverse portfolio of projects, including website and dapp development, among other services.</div>
                <div className={styles.projectImgWrapper}>
                    <img src={scribbleImg} alt="scribbleImg" className={styles.scribbleImg} />
                    <img src={projectsImg} alt="projectsImg" className={styles.projectsImg} />
                </div>
                <Link to="/projects"><div className={styles.seeallProjectsBtn}>See&nbsp;all&nbsp;Projects</div></Link>
                <Partners />
            </div>
            <div className={styles.styledSectionWrapper}>
                <div className={styles.styledSection2}>
                    <div className={styles.styledSectionTxt}>
                        Are you looking for a reliable<br/>
                        Dapp solution that can give your<br/>
                        business the much-needed boost?
                    </div>
                    <Link to="/form"><div className={styles.styledwhiteBtn}>Talk With Experts</div></Link>
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
                <Review /> 
                <div className={styles.faqsDiv} id="faqs">
                    <div className={styles.faqsDivHeading}>Frequently Asked <span>Questions</span></div>
                    <div className={styles.faqDropdown}>
                        <div className={styles.faqDropdownheading}>
                        <div>
                            Do you provide custom smart contracts?
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
                    Yes, we do provide Custom Smart Contracts according to the client’s needs.
                    </div>
                    </div>






                    <div className={styles.faqDropdown}>
                        <div className={styles.faqDropdownheading}>
                        <div>
                            How long is the after sales service?
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
                        Customer satisfaction is our top priority. So we provide upto 7 days of service from the date of delivery.

                    </div>
                    </div>






                        
                    <div className={styles.faqDropdown}>
                        <div className={styles.faqDropdownheading}>
                        <div>
                            Do you provide hosting as well?
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
                                src={isFaq2Open? closeIcon :  arrowIcon}
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
                        Yes, we do provide hosting solutions if the clients need it.
                    </div>
                    </div>





                    <div className={styles.faqDropdown}>
                        <div className={styles.faqDropdownheading}>
                        <div>
                            Do you provide presale support?
                        </div>
                        <div>
                            <div
                            style={{
                                display: isFaq4Open ? "none" : "flex",
                                overflow: "hidden",
                            }}
                            >
                            </div>
                            <div
                            onClick={() => setisFaq4Open(!isFaq4Open)}
                            className={styles.dropdownArrowicon}
                            >
                            <img
                                src={isFaq4Open? closeIcon :  arrowIcon}
                                alt="arrow"
                            />
                            </div>
                        </div>
                        </div>
                        <div
                        className={styles.faqDropdowntxtContent}
                        style={{
                            height: isFaq4Open ? "auto" : 0,
                            margin: isFaq4Open ? "10px 0" : "0",
                            overflow: "hidden",
                            transition: "height 0.5s ease-out",
                        }}
                        >
                        Yes, will be providing presale support if the clients need it.

                    </div>
                    </div>





                    <div className={styles.faqDropdown}>
                        <div className={styles.faqDropdownheading}>
                        <div>
                            Do you take upfront payment?
                        </div>
                        <div>
                            <div
                            style={{
                                display: isFaq5Open ? "none" : "flex",
                                overflow: "hidden",
                            }}
                            >
                            </div>
                            <div
                            onClick={() => setisFaq5Open(!isFaq5Open)}
                            className={styles.dropdownArrowicon}
                            >
                            <img
                                src={isFaq5Open? closeIcon :  arrowIcon}
                                alt="arrow"
                            />
                            </div>
                        </div>
                        </div>
                        <div
                        className={styles.faqDropdowntxtContent}
                        style={{
                            height: isFaq5Open ? "auto" : 0,
                            margin: isFaq5Open ? "10px 0" : "0",
                            overflow: "hidden",
                            transition: "height 0.5s ease-out",
                        }}
                        >
                        Yes, we will be taking 50% payment upfront before we start working on any order.
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
                <div className={styles.newsletterTxt}>Get updates and information about crypto world by subscribe to our newsletter </div>
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
                            <img src={linkedInIcon
                            } className={styles.socialIcons} alt="linkedIn-icon"/>
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