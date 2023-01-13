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
import { logEvent } from "firebase/analytics";
import { analytics } from "./firebaseConfig";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    logEvent(analytics, "goal_completion", { name: "lever_puzzle" });
  });
  return (
    <div className={styles.App}>
      <Navbar />
      <Landing />
      <div className={styles.circleBg}>
        <div className={styles.greyMountainWrapper}>
          <WhyUs />
        </div>
        <div className={styles.lineBgWrapper}>
          <Ideas />
        </div>
        <ServicesProvided />
        <div className={styles.lineBgWrapper}>
          <Growth />
        </div>
        <div className={styles.greyMountainWrapper}>
          <ProjectsDone />
        </div>
        <div className={styles.lineBgWrapper}>
          <HowWeDevelop />
        </div>
        <Team />
        <Partners />

        <div className={styles.lineBgWrapper}>
          <Testimonials />
        </div>
        <FAQs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
