import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as MainuiImg } from "../../../assets/images/mainuiImg.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/images/icon-arrow.svg";
import { ReactComponent as FinalImg } from "../../../assets/images/finalImg.svg";
import { ReactComponent as Whatsapp } from "../../../assets/images/icon-whatsapp.svg";
import { ReactComponent as SelectBtnIcon } from "../../../assets/images/icon-pagebtn.svg";
import styles from "./style.module.css";
import validator from 'validator'

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
  const [selectedOption, setSelectedOption] = useState(null);
  const [validEmail, setValidEmail] = useState(true);
  const [email, setEmail] = useState("");
  const emailRef = useRef()
  const CustomSelect = ({ options, placeholder }) => {
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
                onClick={() => handleSelectOption(option)}
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
        handlePageUp()
        setValidEmail(true)
      }
    }
      document.addEventListener('keydown', keyPressHandler)
    console.log('useEffect')
    return () => {
        document.removeEventListener('keydown', keyPressHandler)
    }
  })
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
  return (
    <>
      {pagenum === 0 && (
        <div className={styles.App}>
          <div className={styles.mainuiWrapper}>
            <MainuiImg className={styles.mainuiImg} />
            <div className={styles.mainuiheading}>
              Hello! We're glad that you're interested in working with us.
              <br />
              Let’s get started 👋
            </div>
            <div className={styles.letsGOBtnWrapper}>

            <div className={styles.LetsgoBtn} onClick={()=>{
              handlePageUp()
              setValidEmail(true)
            }
            }>
              Let’s Go
            </div>
            <p>press <span>Enter</span></p>
            </div>
          </div>
        </div>
      )}
      {pagenum === 1 && (
        <div className={styles.App}>
          <div className={styles.formWrapper}>
            <div className={styles.counterDiv}>
              1. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>Your name *</div>
              <div className={styles.secondaryTxt}>Let’s get to know each other</div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="name"
                placeholder="type in your name"
              />
              <div className={styles.okBtn} onClick={()=>{
              handlePageUp()
              setValidEmail(true)
            }}>
                OK
              </div>
            </div>
          </div>
        </div>
      )}
      
      {pagenum === 2 && (
        <div className={styles.App}>
          <div className={styles.formWrapper}>
            <div className={styles.counterDiv}>
              2. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>Your Email *</div>
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
                  if(validator.isEmail(temp)){
                    setValidEmail(true)
                  }
                  else{
                    setValidEmail(false)
                  }
                }}
              />
              {!validEmail && <div className={styles.errorMsg}>Please enter a valid email</div>}
              <div className={styles.okBtn} onClick={()=>{
              handlePageUp()
              setValidEmail(true)
            }}>
                OK
              </div>
            </div>
          </div>
        </div>
      )}
      {pagenum === 3 && (
        <div className={styles.App}>
          <div className={styles.formWrapper}>
            <div className={styles.counterDiv}>
              3. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>Your Project Name*</div>
              {/* <div className={styles.secondaryTxt}>Just to stay in touch, no spam guarantee.</div> */}
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="name"
                placeholder="type in your Project Name"
              />
              <div className={styles.okBtn} onClick={()=>{
              handlePageUp()
              setValidEmail(true)
            }}>
                OK
              </div>
            </div>
          </div>
        </div>
      )}

      {pagenum === 4 && (
        <div className={styles.App}>
          <div className={styles.formWrapper}>
            <div className={styles.counterDiv}>
              4. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>
                What service do you need from us ?
              </div>
              <CustomSelect options={options} placeholder={"Select Your Service"} defaultValue={1} />
              {selectedOption && (
                <div className={styles.okBtn} onClick={()=>{
                  handlePageUp()
                  setValidEmail(true)
                }}>
                  OK
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {pagenum === 5 && (
        <div className={styles.App}>
          <div className={styles.formWrapper}>
            <div className={styles.counterDiv}>
              5. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>
                What is your budget for this project ?
              </div>
              <CustomSelect options={options1} placeholder={"Select Your Budget"} defaultValue={1} />
              {selectedOption && (
                <div className={styles.okBtn} onClick={()=>{
                  handlePageUp()
                  setValidEmail(true)
                }}>
                  OK
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      

      {pagenum === 6 && (
        <div className={styles.App}>
          <div className={styles.congratsWrapper}>
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
        </div>
      )}
    </>
  );
}
