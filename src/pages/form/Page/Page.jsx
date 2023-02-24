import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as MainuiImg } from "../../../assets/images/mainuiImg.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icon-arrow.svg";
import { ReactComponent as FinalImg } from "../../../assets/images/finalImg.svg";
import Whatsapp from "../../../assets/whatsapp.gif";
import { ReactComponent as SelectBtnIcon } from "../../../assets/images/icon-pagebtn.svg";
import { useSearchParams } from "react-router-dom";
import styles from "./style.module.css";
import validator from 'validator'
import AOS from "aos";
import "aos/dist/aos.css";
const options = [
  {
    label: "a.   Custom web development",
    value: "Custom web development",
  },
  {
    label: "b.   Decentralised Application",
    value: "Decentralised Application",
  },
  { label: "c.   E-commerce Website", value: "E-commerce Website" },
  { label: "d.   Other", value: "Other" },
];
const options1 = [
  {
    label: "1000$ - 5000$",
    value: "1000$ - 5000$",
  },
  {
    label: "5000$ - 10000$",
    value: "5000$ - 10000$",
  },
  {
    label: "Above 10000$",
    value: "Above 10000$",
  }
]

export default function Page({ pagenum, handlePageUp, handlePageDown }) {
  const [showOptions, setShowOptions] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionService, setSelectedOptionService] = useState(null);
  const [otherInput, settherInput] = useState(null);
  const [selectedOptionBudget, setSelectedOptionBudget] = useState(null);
  const [validEmail, setValidEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [campaign, setCampaign] = useState("");
  const [adset, setAdset] = useState("");
  const [ad, setAd] = useState("");
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [leadsource, setLeadsource] = useState("");
  const [projectName, setProjectName] = useState("");
  const [validProjectName, setValidProjectName] = useState(true);
  const [validName, setValidName] = useState(true);
  const [service, setService] = useState("");
  const emailRef = useRef()
  const queryParams = new URLSearchParams(window.location.search)
  const data = {
    "name":name,
    "email":email,
    "projectName":projectName,
    "service":service,
    "budget":budget,
    "campaign":campaign,
    "adset":adset,
    "ad":ad,
    "src":leadsource,

  }
  

  
  const CustomSelect = ({ options, placeholder, setWhat, setSelectedOption, selectedOption }) => {
    const handleToggleOptions = () => {
      setShowOptions((prevShowOptions) => !prevShowOptions);
    };

    const handleSelectOption = (option) => {
      setSelectedOption(option);
      setShowOptions(false);
    };
    return (
      <div className={styles.customSelect}>
        <div
          className={styles.selectButton}
          onClick={handleToggleOptions}
          style={{
            backgroundColor: selectedOption ? "#fff" : "#1D3852",
            color: selectedOption ? "#333" : "#bbb",
            borderRadius: showOptions ? "10px 10px 10px 0" : "10px",
          }}
        >
          <div
            className={styles.selectedTxt}
            style={{
              opacity: selectedOption ? "1" : "0.5",
            }}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </div>
          <div className={styles.selectBtnWrapper}>
            <SelectBtnIcon className={`arrow ${showOptions ? "open" : ""}`} />
          </div>
        </div>
        {showOptions && (
          <div className={styles.options}>
            {options.map((option) => (
              <div
                key={option.value}
                className={`option ${
                  option === selectedOption ? "selected" : ""
                }`}
                onClick={() => {
                  setWhat(option.value)
                  handleSelectOption(option)
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

useEffect(() => {
  setCampaign(queryParams.get("campaign"));
  setAdset(queryParams.get("adset"));
  setAd(queryParams.get("ad"))
  setLeadsource(queryParams.get("src"))
}, [pagenum])



const sendDataToPably = () => {
  fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTZlMDYzNzA0MzI1MjZkNTUzMSI_3D_pc", {  // Enter your IP address here

  method: 'POST', 
  mode: 'cors', 
  body: JSON.stringify(data) // body data type must match "Content-Type" header

})
}

  useEffect(() => {
    const keyPressHandler = (e) =>{
      if(e.key === 'Enter'){
        if(pagenum === 1){
          if(name === ''){
            setValidName(false)
            return
          }
        }
        if(pagenum === 2){
          if(!validator.isEmail(email)){
            setValidEmail(false)
            return
          }
        }
        if(pagenum === 3){
          if(projectName === ''){
            setValidProjectName(false)
            return
          }
        }
        if(pagenum === 4){
          if(!selectedOptionService){
            return
          }
        }
        if(pagenum === 5){
          if(!selectedOptionBudget){
            return
          }
        }
        handlePageUp()
      }
    }
      document.addEventListener('keydown', keyPressHandler)
    console.log('useEffect')
    return () => {
        document.removeEventListener('keydown', keyPressHandler)
    }
  }, [pagenum, name, email, projectName, selectedOptionService, selectedOptionBudget, handlePageUp])
  useEffect(()=>{
    if(emailRef && emailRef.current){
      if(validEmail){
        emailRef.current.style.boxShadow = "rgba(15, 253, 3, 0.833) 0px 1px";
      }
      else{
        emailRef.current.style.boxShadow = "rgb(255, 0, 0) 0px 1px";
      }
    }

  }, [validEmail, emailRef])
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div className={styles.formContainer}>

      {pagenum === 0 && (
          <div className={styles.mainuiWrapper} data-aos="fade-up">
            <MainuiImg className={styles.mainuiImg} />
            <div className={styles.mainuiheading}>
              Hello! We're glad that you're interested in working with us.
              <br />
              Let’s get started 👋
            </div>
            <div className={styles.letsGOBtnWrapper}>

            <div className={styles.LetsgoBtn} onClick={()=>{
              handlePageUp()

            }
            }>
              Let’s Go
            </div>
            <p className={styles.pressEnter}>press <span>Enter</span></p>
            </div>
          </div>
      )}
      {pagenum === 1 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              1. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>My name*</div>
              <div className={styles.secondaryTxt}>Let’s know each other</div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Type in your name"
                value={name}
                onChange={(e) => {
                  if(e.target.value.length > 0){
                    setValidName(true)
                  }
                  setName(e.target.value)}}
              />
              {!validName && <div className={styles.errorMsg}>Please enter a valid name</div>}
              <div className={styles.okBtn} onClick={()=>{
              if(name === ''){
                setValidName(false)
                return
              }
              setValidName(true)
              handlePageUp()
              

            }}>
                Next
              </div>
            </div>
          </div>
      )}
      
      {pagenum === 2 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              2. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>My Email*</div>
              <div className={styles.secondaryTxt}>Just to stay in touch, no spam guarantee.</div>
              <input
                className={styles.emailInput}
                type="email"
                autoComplete="off"
                placeholder="Type in your Email"
                ref={emailRef}
                value={email}
                onChange={(e)=>{
                  const temp = e.target.value
                  setEmail(temp)
                  setValidEmail(true)
                }}
              />
              {!validEmail && <div className={styles.errorMsg}>Please enter a valid email</div>}
              <div className={styles.okBtn} onClick={()=>{
              if(!validator.isEmail(email)){
                setValidEmail(false)
                return
              }
              setValidEmail(true)
              handlePageUp()
            }}>
                Next
              </div>
            </div>
          </div>
      )}
      {pagenum === 3 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              3. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>My Project Name*</div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Type in Your Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              {!validProjectName && <div className={styles.errorMsg}>Please enter a valid project name</div>}
              <div className={styles.okBtn} onClick={()=>{
              if(projectName === ''){
                setValidProjectName(false)
                return
              }
              setValidProjectName(true)
              handlePageUp()
            }}>
                Next
              </div>
            </div>
          </div>
      )}

      {pagenum === 4 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              4. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>
              I want…
              </div>
              <CustomSelect options={options} placeholder={"Select Your Service"} setWhat={setService} setSelectedOption={setSelectedOptionService} 
              selectedOption={selectedOptionService} defaultValue={1} />
              {selectedOptionService && (
                <div className={styles.okBtn} onClick={()=>{
                  handlePageUp()
                }}>
                  Next
                </div>
              )}
            </div>
          </div>
      )}
      {pagenum === 5 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              5. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>
              My budget range is between…
              </div>
              <CustomSelect options={options1} placeholder={"Select Your Budget"} setWhat={setBudget} setSelectedOption={setSelectedOptionBudget} selectedOption={selectedOptionBudget} defaultValue={1} />
              {selectedOptionBudget && (
                <div className={styles.okBtn} onClick={()=>{
                  handlePageUp()
                  sendDataToPably()
                }}>
                  Next
                </div>
              )}
            </div>
          </div>
      )}
      

      {pagenum === 6 && (
          <div className={styles.congratsWrapper} data-aos="fade-up">
            <FinalImg />
            <div className={styles.congratsTxt}>
              You have made it!🥳 To Complete the process click on whatsapp button and contact us🤙
            </div>
            <div className={styles.contactUsWrapper}>
              <div className={styles.contactUsTxt}>
                Contact us{" "}
                <span className={styles.highlightedTxt}>NOW</span>
              </div>
              <img src={Whatsapp} alt="whatsapp_icon" className={styles.whatsappIcon} />
            </div>
          </div>
      )}
    </div>
    </>
  );
}
