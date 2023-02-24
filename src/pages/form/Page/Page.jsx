import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as MainuiImg } from "../../../assets/images/mainuiImg.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icon-arrow.svg";
import { ReactComponent as FinalImg } from "../../../assets/images/finalImg.svg";
import { ReactComponent as Whatsapp } from "../../../assets/images/icon-whatsapp.svg";
import { ReactComponent as SelectBtnIcon } from "../../../assets/images/icon-pagebtn.svg";
import styles from "./style.module.css";
import validator from 'validator'
import AOS from "aos";
import "aos/dist/aos.css";
const options = [
  {
    label: "a.   Custom web development",
    value: "a.   Custom web development",
  },
  {
    label: "b.   Decentralised Application",
    value: "b.   Decentralised Application",
  },
  { label: "c.   E-commerce Website", value: "c.   E-commerce Website" },
  { label: "d.   Custom smart contract", value: "d.   Custom smart contract" },
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
  const [selectedOptionBudget, setSelectedOptionBudget] = useState(null);
  const [validEmail, setValidEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [projectName, setProjectName] = useState("");
  const [validProjectName, setValidProjectName] = useState(true);
  const [validName, setValidName] = useState(true);
  const [service, setService] = useState("");
  const emailRef = useRef()
  
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
            <p>press <span>Enter</span></p>
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
                autoComplete="name"
                placeholder="type in your name"
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
                OK
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
                autoComplete="name"
                placeholder="type in your Email"
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
                OK
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
                autoComplete="name"
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
                OK
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
                  OK
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
                }}>
                  OK
                </div>
              )}
            </div>
          </div>
      )}
      

      {pagenum === 6 && (
          <div className={styles.congratsWrapper} data-aos="fade-up">
            <FinalImg />
            <div className={styles.congratsTxt}>
              You have made it!🥳 We have your information now and will be
              getting in touch with you shortly. Till then sit back and relax 🤙
            </div>
            <div className={styles.contactUsWrapper}>
              <div className={styles.contactUsTxt}>
                Can’t wait? Contact us{" "}
                <span className={styles.highlightedTxt}>NOW</span>
              </div>
              <Whatsapp className={styles.whatsappIcon} />
            </div>
          </div>
      )}
    </div>
    </>
  );
}
