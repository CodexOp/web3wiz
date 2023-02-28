import React, { useState, useEffect, useRef } from "react";
import  mainuiImg from "../../../assets//whatsapp.webp";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icon-arrow.svg";
import { ReactComponent as FinalImg } from "../../../assets/images/finalImg.svg";
import Whatsapp from "../../../assets/whatsapp.gif";
import { ReactComponent as SelectBtnIcon } from "../../../assets/images/icon-pagebtn.svg";
import { useSearchParams } from "react-router-dom";
import styles from "./style.module.css";
import validator from 'validator'
import AOS from "aos";
import "aos/dist/aos.css";
import {Helmet} from "react-helmet-async"


export default function Page({ pagenum, handlePageUp, handlePageDown }) {
  

const options = [
  {
    label: "web development",
    value: "web development",
  },
  {
    label: "Decentralised Application",
    value: "Decentralised Application",
  },
  { label: "E-commerce Website", value: "E-commerce Website" },
  { label: "Other", value: "Other Services" },
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
const iamOption = [
  {
    label: "Founder",
    value: "Founder",
  },
  {
    label: "Marketer",
    value: "Marketer",
  },
  {
    label: "CTO",
    value: "CTO",
  },
  {
    label: "Other",
    value: "Other",
  },

]
  const [showOptions, setShowOptions] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionService, setSelectedOptionService] = useState(null);
  const [selectedOptionIam, setSelectedOptionIam] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [validCountry, setValidCountry] = useState(true);
  const [otherInput, settherInput] = useState(null);
  const [selectedOptionBudget, setSelectedOptionBudget] = useState(null);
  const [custom_href, setCustomHref] = useState(null);
  const [validEmail, setValidEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [campaign, setCampaign] = useState("");
  const [adset, setAdset] = useState("");
  const [ad, setAd] = useState("");
  const [name, setName] = useState("");
  const [iam, setIam] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState("");
  const [leadsource, setLeadsource] = useState("");
  const [projectName, setProjectName] = useState("");
  const [validProjectName, setValidProjectName] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
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
    "iam":iam,
    "phoneNo":phoneNo,
    "country":country,
    "countryCode":countryCode

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
  if(queryParams.get("campaign") == undefined || null){
    setCampaign("organic");
  }
  else{
    setCampaign(queryParams.get("campaign"));
  }

  if((queryParams.get("adset")) == undefined || null){
    setAdset('organic');
  }
  else{
    setAdset(queryParams.get("adset"));
  }

  if(queryParams.get("ad") == undefined || null){
    setAd('organic');
  }
  else{
    setAd(queryParams.get("ad"));
  }


  if(queryParams.get("src") == undefined || null){
    setLeadsource('organice')
  }
  else{
    setLeadsource(queryParams.get("src"))
  }

  console.log(data)

  setCustomHref("https://wa.me/12342559266?text=%20Hi%20I%20am%20"+name+"%2C%20I%20am%20looking%20for%20getting%20"+service+".%20Can%20you%20please%20tell%C2%A0more%C2%A0about%C2%A0it%3F%0A")

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
        <Helmet>
    <title>Form</title>
    <meta name="description" content="Contact us today for decentralized innovation and incredible websites."/>
    <link rel="canonical" href="/form" />

    </Helmet>
    <div className={styles.formContainer}>

      {pagenum === 0 && (
          <div className={styles.mainuiWrapper} data-aos="fade-up">
            <img src={mainuiImg} className={styles.mainuiImg} alt="matrix labs contact" />
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
              <div className={styles.primaryTxt}>
              I Am
              </div>
              <CustomSelect options={iamOption} placeholder={"Select Your Designation"} setWhat={setIam} setSelectedOption={setSelectedOptionIam} 
              selectedOption={selectedOptionIam} defaultValue={1} />
              {selectedOptionIam && (
                <div className={styles.okBtn} onClick={()=>{
                  handlePageUp()
                }}>
                  Next
                </div>
              )}
            </div>
          </div>
      )}
      {pagenum === 4 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              4. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>My Phone Number*</div>
              <div className={styles.phoneNodiv}>
              <input
                className={styles.countryInput}
                type="number"
                autoComplete="off"
                placeholder="+"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              />
              <input
                className={styles.phoneInput}
                type="number"
                autoComplete="off"
                placeholder="Enter Your Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              </div>
              {!validPhone && <div className={styles.errorMsg}>Please enter a valid Phone Number</div>}
              <div className={styles.okBtn} onClick={()=>{
              if(phoneNo === ''){
                setValidPhone(false)
                return
              }
              setValidPhone(true)
              handlePageUp()
            }}>
                Next
              </div>
            </div>
          </div>
      )}


{pagenum === 5 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              5. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>Country name*</div>
              <div className={styles.secondaryTxt}>Contry In Which You Live</div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Type in your Country Name"
                value={country}
                onChange={(e) => {
                  if(e.target.value.length > 0){
                    setValidCountry(true)
                  }
                  setCountry(e.target.value)}}
              />
              {!validCountry && <div className={styles.errorMsg}>Please enter a valid country</div>}
              <div className={styles.okBtn} onClick={()=>{
              if(country === ''){
                setValidCountry(false)
                return
              }
              setValidCountry(true)
              handlePageUp()
              

            }}>
                Next
              </div>
            </div>
          </div>
      )}
      

      {pagenum === 6 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              6. <ArrowIcon className={styles.arrowIcon} />
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

      {pagenum === 7 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              7. <ArrowIcon className={styles.arrowIcon} />
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
      {pagenum === 8 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              8. <ArrowIcon className={styles.arrowIcon} />
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
      

      {pagenum === 9 && (
          <div className={styles.congratsWrapper} data-aos="fade-up">
            <FinalImg />
            <div className={styles.congratsTxt}>
            We've got your response. Complete the process by contacting us below🤙
            </div>
            <div className={styles.contactUsWrapper}>
              <div className={styles.contactUsTxt}>
                Contact us{" "}
                <span className={styles.highlightedTxt}>NOW</span>
              </div>
              <a href={custom_href}><button className={styles.finish_button}>FINISH<img src={Whatsapp} alt="whatsapp_icon" className={styles.whatsappIcon} /></button></a>
            </div>
          </div>
      )}
    </div>
    </>
  );
}
