import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import WhyUs from "./components/WhyUs/WhyUs";
import Ideas from "./components/Ideas/Ideas";
import ServicesProvided from "./components/ServicesProvided/ServicesProvided";
import Growth from "./components/Growth/Growth";
import ProjectsDone from "./components/ProjectsDone/ProjectsDone";
import HowWeDevelop from "./components/HowWeDevelop/HowWeDevelop";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQs from "./components/FAQs/FAQ";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Partners from "./components/Partners/Partners";
import { getAnalytics, logEvent } from "firebase/analytics";
import ReactPixel from 'react-facebook-pixel';
import { useEffect, useState } from "react";

const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: true, // enable logs
};
ReactPixel.init('1233452067589283', "", options);
function App() {
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
  return (
    <div className={styles.App}>
      <Navbar />
      <div className="landing"><Landing /></div>
      
      <div className={styles.circleBg}>
        <div className={styles.greyMountainWrapper}>
          <WhyUs />
        </div>
        <div className={styles.lineBgWrapper}>
          <Ideas />
        </div>
        <div className="servicesProvided"><ServicesProvided /></div>
        
        <div className={styles.lineBgWrapper}>
          <Growth />
        </div>
        <div className={styles.greyMountainWrapper}>
          <div className="projectsDone"><ProjectsDone /></div>   
        </div>
        <div className={styles.lineBgWrapper}>
          <HowWeDevelop />
        </div>
        <Team />
        <Partners />

        <div className={styles.lineBgWrapper}>
          <div className="testimonials"><Testimonials /></div>
        </div>
        <FAQs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
