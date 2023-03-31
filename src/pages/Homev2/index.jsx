import React, { useState, useEffect } from 'react';
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
import blogImg1 from "./components/assests/images/blogImg1.svg";
import blogImg2 from "./components/assests/images/blogImg2.svg";
import blogImg3 from "./components/assests/images/blogImg3.svg";
import arrowIcon from "./components/assests/images/icon-arrow.svg";
import closeIcon from "./components/assests/images/icon-cross.svg";
import registered from "./components/assests/registered.svg";
import teamofprofessionals from "./components/assests/teamofprofessionals.svg";
import customerService from "./components/assests/customerService.svg";
import endtoendservice from "./components/assests/endtoendservice.svg";
import starIcon from "./components/assests/images/icon-star.svg";
import quotesIcon from "./components/assests/images/icon-quotes.svg";
import clientImg from "./components/assests/images/icon-clientimg.svg";
import smartContract from "./components/assests/images/smartContract.svg";
import website from "./components/assests/images/website.svg"
import nft from "./components/assests/images/nft.svg"
import marketplaces from "./components/assests/images/marketplaces.svg"
import dappDevelopment from "./components/assests/images/dappDevelopment.svg"
import android from "./components/assests/images/android.svg"
import Navbar from "./components/Navbar";
import ReactTypingEffect from 'react-typing-effect';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {Link} from "react-router-dom"
import styles from "./style.module.css";
import Partners from './components/Partners/Partners';
import Review from './components/reviews/Review';
import Raised from './components/amountRaised/Raised';
import ReactPixel from "react-facebook-pixel"
import { getAnalytics, logEvent } from "firebase/analytics";
import { Lottie, triggerLottie } from '../../components/Lottie/Lottie'
import useFacebookPixel from '../../hooks/FacebookPixel/useFacebookPixel';
import validator from 'validator';


const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: true, // enable logs
  };
  ReactPixel.init('1233452067589283', "", options);


export default function Homev2()
{
        const callFacebookPixel = useFacebookPixel();
        const [isIntersecting, setIsIntersecting] = useState({
          landing: false,
          whyUs: false,
          ideas: false,
          servicesProvided: false,
          growth: false,
          projectsDone: false,
          howWeDevelop: false,
          team: false,
          testimonials: false,
          faqs: false,
        });
        const [userEmail, setUserEmail] = useState("");
        const [validEmail, setValidEmail] = useState(true);
        useEffect(()=>{
          ReactPixel.pageView(); // For tracking page view
        }, [])
        const sendDataToPably = (data) => {
          fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY5MDYzZTA0MzU1MjY1NTUzMyI_3D_pc", {  // Enter your IP address here
        
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        
        })
      }
        useEffect(()=>{
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if(entry.isIntersecting){
                if (entry.target.className === "landing" && !isIntersecting.landing) {
                ReactPixel.trackCustom('LandingPageView', {value: 1, currency: 'USD'});
                sendDataToPably({event: "LandingPageView", value: 1, currency: "USD", userAgent: navigator.userAgent, href: window.location.href, timestamp: Math.floor(Date.now() / 1000)});
                setIsIntersecting((state)=>{
                  return {...state, landing: true}
                });
              }
              if (entry.target.className === "projectsDone" && !isIntersecting.projectsDone) {
                console.log("intersecting projects done");
                ReactPixel.trackCustom('ProjectsDonePageView', {value: 2, currency: 'USD'});
                sendDataToPably({event: "ProjectsDonePageView", value: 2, currency: "USD", userAgent: navigator.userAgent, href: window.location.href, timestamp: Math.floor(Date.now() / 1000)});
                setIsIntersecting((state)=>{
                  return {...state, projectsDone: true}
                });
              }
              if (entry.target.className === "servicesProvided" && !isIntersecting.servicesProvided) {
                console.log("intersecting services provided");
                ReactPixel.trackCustom('ServicesProvidedPageView', {value: 3, currency: 'USD'});
                sendDataToPably({event: "ServicesProvidedPageView", value: 3, currency: "USD", userAgent: navigator.userAgent, href: window.location.href, timestamp: Math.floor(Date.now() / 1000)});
                setIsIntersecting((state)=>{
                  return {...state, servicesProvided: true}
                });
              }
              if (entry.target.className === "testimonials" && !isIntersecting.testimonials) {
                console.log("intersecting testimonials");
                ReactPixel.trackCustom('TestimonialsPageView', {value: 4, currency: 'USD'});
                sendDataToPably({event: "TestimonialsPageView", value: 4, currency: "USD", userAgent: navigator.userAgent, href: window.location.href, timestamp: Math.floor(Date.now() / 1000)});
                setIsIntersecting((state)=>{
                  return {...state, testimonials: true}
                });
              }
            }
            });
          });
          const landingElement = document.querySelector(".landing");
          const projectsDoneElement = document.querySelector(".projectsDone");
          const servicesProvidedElement = document.querySelector(".servicesProvided");
          const testimonialsElement = document.querySelector(".testimonials");
          observer.observe(landingElement);
          observer.observe(projectsDoneElement);
          observer.observe(servicesProvidedElement);
          observer.observe(testimonialsElement);
          return () => {
            observer.unobserve(landingElement);
            observer.unobserve(projectsDoneElement);
            observer.unobserve(servicesProvidedElement);
            observer.unobserve(testimonialsElement);
          }
        },[isIntersecting])
        const analytics = getAnalytics();
        console.log(
          logEvent(analytics, "select_content", {
            content_type: "image",
            content_id: "P12453",
          })
        );

        const handleOnClickSubscribe = () => {
            if(userEmail != ""){
            fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY0MDYzNTA0MzA1MjY1NTUzMCI_3D_pc", {  // Enter your IP address here
        
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify({email : userEmail}) // body data type must match "Content-Type" header
        
        })
    }            
                
        }

    const [isFaq1Open, setisFaq1Open] = useState(false);
    const [isFaq2Open, setisFaq2Open] = useState(false);
    const [isFaq3Open, setisFaq3Open] = useState(false);
    const [isFaq4Open, setisFaq4Open] = useState(false);
    const [isFaq5Open, setisFaq5Open] = useState(false);

    return (
        <>
            <Lottie text={ 'Thank you for subscribing! Stay tuned for our latest news and updates.'} />
            <Navbar />
            <div className='landing'></div>
            <div className={styles.homeWrapper} id="home" >
            <div className={styles.backdropDiv1}>
            <div id="home" className={styles.mainWrapper1}>
                <div className={styles.titleContent}>
                    <div>
                    <div className={styles.mainHeadingTxt}>
                        We&nbsp;create
                        <br />
                        <div className={styles.gradientTxt}>  <ReactTypingEffect speed={50} typingDelay={1000} eraseDelay={2000} eraseSpeed={50}
        text={["Smart Contract", "Websites", "Dapps", "Marketplace"]}
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
                    <Link to="/form"><div className={styles.getaquotaBtn} onClick={() => callFacebookPixel('GetQuoteClicked', 10)}>Get&nbsp;a&nbsp;Quote <img className={styles.rightarrow} src={rightarrow} alt="right arrow" />
</div></Link>
                </div>
                <img src={bg1Img} alt="ai-img" className={styles.floatImg} />
            </div>
            </div>
            <div className={styles.mainWrapper2}>
                <div className={styles.maintext2}>Build with us <span> where scalability is never an issue</span></div>
                <div className={styles.whyChooseDiv}>
                    <div className={styles.whyChooseHeading}>Why Choose us?</div>
                </div>
                <div className={styles.featureGrid}>
                    <div className={styles.featureGridItems}>
                        <img src={endtoendservice} alt="transparency-img" className={styles.featureGridIcons}/>
                        <h2>End to end service</h2>
                        <p>You don't need to look for any other service provider for any technical stuff. We have got all covered for you.</p>
                    </div>
                    <div className={styles.featureGridItems}>
                        <img src={customerService} alt="folderLockIcon" className={styles.featureGridIcons}/>
                        <h2>24/7 customer service</h2>
                        <p>We understand that our customers may need assistance at any time, day or night, and we are committed to being available whenever they need us.</p>
                    </div>
                    <div className={styles.featureGridItems}>
                        <img src={teamofprofessionals} alt="shieldIcon" className={styles.featureGridIcons}/>
                        <h2>Team of professionals</h2>
                        <p>We understand that big and complex projects require professionals to work on. </p>
                    </div>
                    <div className={styles.featureGridItems}>
                        <img src={registered} alt="lockIcon" className={styles.featureGridIcons} />
                        <h2>USA registered</h2>
                        <p>We are USA registered and comply all rules of US government.</p>
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

            <div id="services" className={styles.mainWrapper3 }>
            <div className='servicesProvided'>
                <div className={styles.ourServicesHeading}>Our <span>Services</span></div>
                <div className={styles.ourServicesTxt}>Our services help everyone from startups to enterprises to launch and maintain their applications on the blockchain.</div>
                </div>
                <div className={styles.serviceGrid}>
            
                    <div className={styles.serviceGridItem}>
                        <img src={smartContract} alt="transparency-img"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>SMART CONTRACT</div>
                        <div className={styles.serviceGridItemTxt}>Ensure security with our custom smart contracts, Certik verified and tailored for you</div>
                        {/* <div className={styles.knowmoreBtn}>Know More</div> */}
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={dappDevelopment} alt="folderLockIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>DAPP DEVELOPMENT</div>
                        <div className={styles.serviceGridItemTxt}>Securely build and launch your DApp with our expert development services</div>
                        {/* <div className={styles.knowmoreBtn}>Know More</div> */}
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={website} alt="shieldIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>WEBSITE DEVELOPMENT</div>
                        <div className={styles.serviceGridItemTxt}>Create a sleek and user-friendly website of your desired theme with our team.</div>
                        {/* <div className={styles.knowmoreBtn}>Know More</div> */}
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={nft} alt="transparency-img"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>NFT AND TOKEN</div>
                        <div className={styles.serviceGridItemTxt}>Tokenize your assets with our NFT and token services.</div>
                        {/* <div className={styles.knowmoreBtn}>Know More</div> */}
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={android} alt="folderLockIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>ANDROID AND IOS APP</div>
                        <div className={styles.serviceGridItemTxt}>Launch your mobile app on both Android and iOS with us.</div>
                        {/* <div className={styles.knowmoreBtn}>Know More</div> */}
                    </div>
                    <div className={styles.serviceGridItem}>
                        <img src={marketplaces} alt="shieldIcon"  className={styles.serviceGridItemImg}/>
                        <div className={styles.serviceGridItemHeading}>MARKETPLACES</div>
                        <div className={styles.serviceGridItemTxt}>Join the NFT revolution with our NFT marketplace development service.</div>
                        {/* <div className={styles.knowmoreBtn}>Know More</div> */}
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
                    <Link to="/form"><div className={styles.styledwhiteBtn} onClick={() => callFacebookPixel('ClickedDiscussProjectIdea', 10)}>Discuss Your Project Idea</div></Link>
                </div>
            </div>
            <div className='projectsDone'> </div>
            <div className = {styles.mainWrapper4}>
                <div className={styles.ourProjectsHeading}>Our <span>Projects</span></div>
                <div className={styles.ourProjectTxt}>Explore our diverse portfolio of projects, including website and dapp development, among other services.</div>
    
                <div className={styles.projectImgWrapper}>
                    <img src={scribbleImg} alt="scribbleImg" className={styles.scribbleImg} />
                    <img src={projectsImg} alt="projectsImg" className={styles.projectsImg} />
                </div>
                <Link to="/projects" target='_blank' rel="noopener noreferrer"><div className={styles.seeallProjectsBtn} onClick={() => callFacebookPixel('ClickedSeeAllProjects', 3)}>See&nbsp;all&nbsp;Projects</div></Link>
                <Partners />
            </div>
            <div className={styles.styledSectionWrapper}>
                <div className={styles.styledSection2}>
                    <div className={styles.styledSectionTxt}>
                        Are you looking for a reliable<br/>
                        Dapp solution that can give your<br/>
                        business the much-needed boost?
                    </div>
                    <Link to="/form" onClick={() => callFacebookPixel('ClickedTalkWithExperts', 4)}><div className={styles.styledwhiteBtn}>Talk With Experts</div></Link>
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
            <Review />
            <div className={styles.mainWrapper6}>
                <div className="testimonials"> </div>
                <div className={styles.faqsDiv} id="faqs">
                    <div className={styles.faqsDivHeading}>Frequently Asked <span>Questions</span></div>
                    <div className={styles.faqDropdown}>
                        <div className={styles.faqDropdownheading}  onClick={() => setisFaq1Open(!isFaq1Open)}>
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
                        <div className={styles.faqDropdownheading} onClick={() => setisFaq2Open(!isFaq2Open)}> 
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
                        <div className={styles.faqDropdownheading} onClick={() => setisFaq3Open(!isFaq3Open)}>
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
                        <div className={styles.faqDropdownheading}  onClick={() => setisFaq4Open(!isFaq4Open)}>
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
                        <div className={styles.faqDropdownheading} onClick={() => setisFaq5Open(!isFaq5Open)}>
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
                         <img src={blogImg1} className={styles.blogImg} alt="blog-img" />
                         <div className={styles.blogHeading}>Top 5 real-world use cases of blockchain technology</div>
                                <div className={styles.blogDesc}>
                                Blockchain technology can be used to create an unchangeable and secure record of a product's journey  <br/> .&nbsp;.&nbsp;.
                         </div>
                        <Link to='blog/Top-5-real-world-use-cases-of-blockchain-technology' target='_blank' rel="noopener noreferrer"><div className={styles.readmoreBtn} onClick={() => callFacebookPixel('ClickedReadMore', 3)}>Read More{'>'}</div></Link>
                    </div>
                    <div className={styles.blog}>
                         <img src={blogImg2} className={styles.blogImg} alt="blog-img" />
                         <div className={styles.blogHeading}>Which platforms should you use to buy NFTs in 2023?</div>
                         <div className={styles.blogDesc}>
                         In recent years, the world of NFTs has exploded, with more and more people investing in digital assets like <br/> .&nbsp;.&nbsp;.
                         </div>
                        <Link to='blog/Which-platforms-should-you-use-to-buy-NFTs-in-2023' target='_blank' rel="noopener noreferrer"><div className={styles.readmoreBtn} onClick={() => callFacebookPixel('ClickedReadMore', 3)}>Read More{'>'}</div></Link>
                    </div>
                    <div className={styles.blog}>
                         <img src={blogImg3} className={styles.blogImg} alt="blog-img" />
                         <div className={styles.blogHeading}>Top 5 Metaverse Games, 2023 edition</div>
                         <div className={styles.blogDesc}>
                         Metaverse games are online virtual worlds where players can interact with each other, explore, create, and play games <br/> .&nbsp;.&nbsp;.
                         </div>
                        <Link to='blog/Top-5-Metaverse-Games,-2023-edition' target='_blank' rel="noopener noreferrer"><div className={styles.readmoreBtn} onClick={() => callFacebookPixel('ClickedReadMore', 3)}>Read More{'>'}</div></Link>
                    </div>
                    </div>
                </div>
                <div className={styles.newsletterHeading}>Subscribe TO Our <span>Newsletter</span></div>
                <div className={styles.newsletterTxt}>Get updates and information about crypto world by subscribe to our newsletter </div>
                <div className={styles.signupWrapper}>
                    <div  className={styles.signupInput}>
                        <input placeholder="Enter Your Email Address" value={userEmail} onChange={(event)=>{
                                setUserEmail(event.target.value);
                                setValidEmail(true);
                        }}/>
                            <div className={styles.subscribeBtn} onClick={() => {
                                if (validator.isEmail(userEmail)) {
                                    handleOnClickSubscribe();
                                    triggerLottie();
                                    setUserEmail('');
                                }
                                else {
                                    setValidEmail(false);
                                }
                        }} style={{cursor: 'pointer'}}>
                            Subscribe
                        </div>
                        </div>
                        {validEmail ? null : <p className={styles.emailError}>Please enter valid Email</p>}
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