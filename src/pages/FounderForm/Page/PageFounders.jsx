import React, { useState, useEffect, useRef } from 'react';
import mainuiImg from '../../../assets//whatsapp.webp';
import { ReactComponent as ArrowIcon } from '../../../assets/images/icon-arrow.svg';
import { ReactComponent as FinalImg } from '../../../assets/images/finalImg.svg';
import { ReactComponent as Whatsapp } from '../../../assets/images/icon-whatsapp.svg';
import styles from './style.module.css';
import validator from 'validator';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const PageFounders = ({ pagenum, handlePageUp, handlePageDown }) => {

  const [linkedIn, setLinkedIn] = useState("") // for linkedin
  const [validLinkedin, setValidLinkedin] = useState(true); // for linkedin
  const [company, setCompany] = useState("") // comaany name
  const [validCompany, setValidCompany] = useState(true); // for company name
  const [role, setRole] = useState("") // role
  const [validRole, setValidRole] = useState(true); // for role
  const [web3, setWeb3] = useState("") // web3
  const [validWeb3, setValidWeb3] = useState(true) //web3
  const [revenue, setRevenue] = useState("") // revenue
  const [validRevenue, setValidRevenue] = useState(true) //revenue
  const [employee, setEmployee] = useState("") // employee
  const [validEmployee, setValidEmployee] = useState(true) //employee
  const [website, setWebsite] = useState("") // company website
  const [validWebsite, setValidWebsite] = useState(true) // company website
  const [funding, setFunding] = useState("") // funding
  const [validFunding, setValidFunding] = useState(true) // funding
  const [membership, setMembership] = useState("")
  const [validMembership, setValidMembership] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [validName, setValidName] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [validCC, setValidCC] = useState(true);
  const emailRef = useRef();


  const data = {
    name: name,
    email: email,
    phoneNo: phoneNo,
    linkedIn: linkedIn,
    company: company,
    role: role,
    web3: web3,
    revenue: revenue,
    employee: employee,
    website: website,
    funding: funding,
    membership: membership,
  };



  const conversionData = {
    name: name,
    email: email,
    phoneNo: phoneNo,
    linkedIn: linkedIn,
    company: company,
    role: role,
    web3: web3,
    revenue: revenue,
    employee: employee,
    website: website,
    funding: funding,
    membership: membership,
  };


  useEffect(() => {
    // User completes the form
    if (pagenum === 13) {
      try {
        sendDataToPably();
      } catch (error) {
        console.log(error)
      }
    }
  }, [pagenum]);



  const sendDataToPably = () => {
    fetch(
      'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzMjA0Mzc1MjY0NTUzMDUxM2Ei_pc',
      {
        // Enter your IP address here
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    ).then((res) => res.json())
      .then((res) => console.log("fetch succesfull..", res))
      .catch((err) => console.log(err));

    fetch(
      'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY5MDYzZTA0MzY1MjZjNTUzNCI_3D_pc',
      {
        // conversion Api webhook
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(conversionData), // body data type must match "Content-Type" header
      }
    )
      .then((res) => res.json())
      .then((res) => console.log("fetching datas..", res))
      .catch((err) => console.log(err));
  };



  useEffect(() => {
    const keyPressHandler = (e) => {
      if (e.key === 'Enter') {
        if (pagenum === 1) {
          if (name === '') {
            setValidName(false);
            return;
          }
        }
        if (pagenum === 2) {
          if (!validator.isEmail(email)) {
            setValidEmail(false);
            return;
          }
        }
        if (pagenum === 3) {
          if (phoneNo === '') {
            setValidPhone(false);
            return;
          }
        }
        if (pagenum === 4) {
          if (linkedIn === '') {
            setValidLinkedin(false);
            return;
          }
        }
        if (pagenum === 5) {
          if (company === '') {
            setValidCompany(false);
            return;
          }
        }
        if (pagenum === 6) {
          if (role === '') {
            setValidRole(false);
            return;
          }
        }
        if (pagenum === 7) {
          if (web3 === '') {
            setValidWeb3(false);
            return;
          }
        }
        if (pagenum === 8) {
          if (revenue === '') {
            setValidRevenue(false);
            return;
          }
        }
        if (pagenum === 9) {
          if (employee === '') {
            setValidEmployee(false);
            return;
          }
        }
        if (pagenum === 10) {
          if (website === '') {
            setValidWebsite(false);
            return;
          }
        }
        if (pagenum === 11) {
          if (funding === '') {
            setValidFunding(false);
            return;
          }
        }
        if (pagenum === 12) {
          if (membership === '') {
            setValidMembership(false);
            return;
          }
        }
        handlePageUp();
      }
    };
    document.addEventListener('keydown', keyPressHandler);
    console.log('useEffect');
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  }, [pagenum, handlePageUp, company, email, employee, funding, linkedIn, membership, name, phoneNo, revenue, role, web3, website]);

  useEffect(() => {
    if (emailRef && emailRef.current) {
      if (validEmail) {
        emailRef.current.style.boxShadow = 'rgba(15, 253, 3, 0.833) 0px 1px';
      } else {
        emailRef.current.style.boxShadow = 'rgb(255, 0, 0) 0px 1px';
      }
    }
  }, [validEmail, emailRef]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Form</title>
        <meta
          name="description"
          content="Contact us today for decentralized innovation and incredible websites."
        />
        <link rel="canonical" href="/form" />
      </Helmet>
      <div className={styles.formContainer}>
        {pagenum === 0 && (
          <div className={styles.mainuiWrapper} data-aos="fade-up">
            <img
              src={mainuiImg}
              className={styles.mainuiImg}
              alt="matrix labs contact"
            />
            <div className={styles.mainuiheading}>
              Unlock Your Potential, Join the Founders Club Today!
            </div>
            <p className={styles.mainuiDesc}>Feeling the weight of web3 complexities on your shoulders? You're not  alone.
              Join us and turn challenges into shared triumphs. Sign up now,  your network of founders awaits.</p>
            <div className={styles.letsGOBtnWrapper}>
              <div
                className={styles.LetsgoBtn}
                onClick={() => {
                  handlePageUp();
                }}
              >
                Let’s Go
              </div>
              <p className={styles.pressEnter}>
                press <span>Enter</span>
              </p>
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
                placeholder="Type in your full name"
                value={name}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidName(true);
                  }
                  setName(e.target.value);
                }}
              />
              {!validName && (
                <div className={styles.errorMsg}>Please enter a valid name</div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (name === '') {
                    setValidName(false);
                    return;
                  }
                  setValidName(true);
                  handlePageUp();
                }}
              >
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
              <div className={styles.secondaryTxt}>
                Just to stay in touch, no spam guarantee.
              </div>
              <input
                className={styles.emailInput}
                type="email"
                autoComplete="off"
                placeholder="Type in your Email"
                ref={emailRef}
                value={email}
                onChange={(e) => {
                  const temp = e.target.value;
                  setEmail(temp);
                  setValidEmail(true);
                }}
              />
              {!validEmail && (
                <div className={styles.errorMsg}>
                  Please enter a valid email
                </div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (!validator.isEmail(email)) {
                    setValidEmail(false);
                    return;
                  }
                  setValidEmail(true);
                  handlePageUp();
                }}
              >
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
              <div className={styles.primaryTxt}>My Phone Number*</div>
              <div className={styles.secondaryTxt}>In the event of urgent matters, please share your direct contact number.</div>
              <div className={styles.phoneNodiv}>

                <select name="countryCode" id="" className={styles.countrySelect} onChange={(e) => { setCountryCode(e.target.value) }}>
                  <option data-countryCode="GB" value="" selected>Select Country</option>
                  <option data-countryCode="GB" value="1" >USA (+1)</option>
                  <option data-countryCode="US" value="44">UK (+44)</option>
                  <optgroup label="Other countries">
                    <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                    <option data-countryCode="AD" value="376">Andorra (+376)</option>
                    <option data-countryCode="AO" value="244">Angola (+244)</option>
                    <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                    <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                    <option data-countryCode="AR" value="54">Argentina (+54)</option>
                    <option data-countryCode="AM" value="374">Armenia (+374)</option>
                    <option data-countryCode="AW" value="297">Aruba (+297)</option>
                    <option data-countryCode="AU" value="61">Australia (+61)</option>
                    <option data-countryCode="AT" value="43">Austria (+43)</option>
                    <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                    <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                    <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                    <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                    <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                    <option data-countryCode="BY" value="375">Belarus (+375)</option>
                    <option data-countryCode="BE" value="32">Belgium (+32)</option>
                    <option data-countryCode="BZ" value="501">Belize (+501)</option>
                    <option data-countryCode="BJ" value="229">Benin (+229)</option>
                    <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                    <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                    <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                    <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                    <option data-countryCode="BW" value="267">Botswana (+267)</option>
                    <option data-countryCode="BR" value="55">Brazil (+55)</option>
                    <option data-countryCode="BN" value="673">Brunei (+673)</option>
                    <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                    <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                    <option data-countryCode="BI" value="257">Burundi (+257)</option>
                    <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                    <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                    <option data-countryCode="CA" value="1">Canada (+1)</option>
                    <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                    <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                    <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                    <option data-countryCode="CL" value="56">Chile (+56)</option>
                    <option data-countryCode="CN" value="86">China (+86)</option>
                    <option data-countryCode="CO" value="57">Colombia (+57)</option>
                    <option data-countryCode="KM" value="269">Comoros (+269)</option>
                    <option data-countryCode="CG" value="242">Congo (+242)</option>
                    <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                    <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                    <option data-countryCode="HR" value="385">Croatia (+385)</option>
                    <option data-countryCode="CU" value="53">Cuba (+53)</option>
                    <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                    <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                    <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                    <option data-countryCode="DK" value="45">Denmark (+45)</option>
                    <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                    <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                    <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                    <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                    <option data-countryCode="EG" value="20">Egypt (+20)</option>
                    <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                    <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                    <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                    <option data-countryCode="EE" value="372">Estonia (+372)</option>
                    <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                    <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                    <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                    <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                    <option data-countryCode="FI" value="358">Finland (+358)</option>
                    <option data-countryCode="FR" value="33">France (+33)</option>
                    <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                    <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                    <option data-countryCode="GA" value="241">Gabon (+241)</option>
                    <option data-countryCode="GM" value="220">Gambia (+220)</option>
                    <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                    <option data-countryCode="DE" value="49">Germany (+49)</option>
                    <option data-countryCode="GH" value="233">Ghana (+233)</option>
                    <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                    <option data-countryCode="GR" value="30">Greece (+30)</option>
                    <option data-countryCode="GL" value="299">Greenland (+299)</option>
                    <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                    <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                    <option data-countryCode="GU" value="671">Guam (+671)</option>
                    <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                    <option data-countryCode="GN" value="224">Guinea (+224)</option>
                    <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                    <option data-countryCode="GY" value="592">Guyana (+592)</option>
                    <option data-countryCode="HT" value="509">Haiti (+509)</option>
                    <option data-countryCode="HN" value="504">Honduras (+504)</option>
                    <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                    <option data-countryCode="HU" value="36">Hungary (+36)</option>
                    <option data-countryCode="IS" value="354">Iceland (+354)</option>
                    <option data-countryCode="IN" value="91">India (+91)</option>
                    <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                    <option data-countryCode="IR" value="98">Iran (+98)</option>
                    <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                    <option data-countryCode="IE" value="353">Ireland (+353)</option>
                    <option data-countryCode="IL" value="972">Israel (+972)</option>
                    <option data-countryCode="IT" value="39">Italy (+39)</option>
                    <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                    <option data-countryCode="JP" value="81">Japan (+81)</option>
                    <option data-countryCode="JO" value="962">Jordan (+962)</option>
                    <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                    <option data-countryCode="KE" value="254">Kenya (+254)</option>
                    <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                    <option data-countryCode="KP" value="850">Korea North (+850)</option>
                    <option data-countryCode="KR" value="82">Korea South (+82)</option>
                    <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                    <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                    <option data-countryCode="LA" value="856">Laos (+856)</option>
                    <option data-countryCode="LV" value="371">Latvia (+371)</option>
                    <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                    <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                    <option data-countryCode="LR" value="231">Liberia (+231)</option>
                    <option data-countryCode="LY" value="218">Libya (+218)</option>
                    <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                    <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                    <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                    <option data-countryCode="MO" value="853">Macao (+853)</option>
                    <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                    <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                    <option data-countryCode="MW" value="265">Malawi (+265)</option>
                    <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                    <option data-countryCode="MV" value="960">Maldives (+960)</option>
                    <option data-countryCode="ML" value="223">Mali (+223)</option>
                    <option data-countryCode="MT" value="356">Malta (+356)</option>
                    <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                    <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                    <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                    <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                    <option data-countryCode="MX" value="52">Mexico (+52)</option>
                    <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                    <option data-countryCode="MD" value="373">Moldova (+373)</option>
                    <option data-countryCode="MC" value="377">Monaco (+377)</option>
                    <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                    <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                    <option data-countryCode="MA" value="212">Morocco (+212)</option>
                    <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                    <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                    <option data-countryCode="NA" value="264">Namibia (+264)</option>
                    <option data-countryCode="NR" value="674">Nauru (+674)</option>
                    <option data-countryCode="NP" value="977">Nepal (+977)</option>
                    <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                    <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                    <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                    <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                    <option data-countryCode="NE" value="227">Niger (+227)</option>
                    <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                    <option data-countryCode="NU" value="683">Niue (+683)</option>
                    <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                    <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                    <option data-countryCode="NO" value="47">Norway (+47)</option>
                    <option data-countryCode="OM" value="968">Oman (+968)</option>
                    <option data-countryCode="PW" value="680">Palau (+680)</option>
                    <option data-countryCode="PA" value="507">Panama (+507)</option>
                    <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                    <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                    <option data-countryCode="PE" value="51">Peru (+51)</option>
                    <option data-countryCode="PH" value="63">Philippines (+63)</option>
                    <option data-countryCode="PL" value="48">Poland (+48)</option>
                    <option data-countryCode="PT" value="351">Portugal (+351)</option>
                    <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                    <option data-countryCode="QA" value="974">Qatar (+974)</option>
                    <option data-countryCode="RE" value="262">Reunion (+262)</option>
                    <option data-countryCode="RO" value="40">Romania (+40)</option>
                    <option data-countryCode="RU" value="7">Russia (+7)</option>
                    <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                    <option data-countryCode="SM" value="378">San Marino (+378)</option>
                    <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                    <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                    <option data-countryCode="SN" value="221">Senegal (+221)</option>
                    <option data-countryCode="CS" value="381">Serbia (+381)</option>
                    <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                    <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                    <option data-countryCode="SG" value="65">Singapore (+65)</option>
                    <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                    <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                    <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                    <option data-countryCode="SO" value="252">Somalia (+252)</option>
                    <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                    <option data-countryCode="ES" value="34">Spain (+34)</option>
                    <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                    <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                    <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                    <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                    <option data-countryCode="SD" value="249">Sudan (+249)</option>
                    <option data-countryCode="SR" value="597">Suriname (+597)</option>
                    <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                    <option data-countryCode="SE" value="46">Sweden (+46)</option>
                    <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                    <option data-countryCode="SI" value="963">Syria (+963)</option>
                    <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                    <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                    <option data-countryCode="TH" value="66">Thailand (+66)</option>
                    <option data-countryCode="TG" value="228">Togo (+228)</option>
                    <option data-countryCode="TO" value="676">Tonga (+676)</option>
                    <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                    <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                    <option data-countryCode="TR" value="90">Turkey (+90)</option>
                    <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                    <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                    <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                    <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                    <option data-countryCode="UG" value="256">Uganda (+256)</option>
                    <option data-countryCode="GB" value="44">UK (+44)</option>
                    <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                    <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                    <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                    <option data-countryCode="US" value="1">USA (+1)</option>
                    <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                    <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                    <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                    <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                    <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                    <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
                    <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                    <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                    <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                    <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                    <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                    <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                  </optgroup>
                </select>

                <input
                  className={styles.phoneInput}
                  type="number"
                  autoComplete="off"
                  placeholder="Enter Your Phone Number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
              {!validPhone && (
                <div className={styles.errorMsg}>
                  Please enter a valid Phone Number
                </div>
              )}
              {!validCC && (
                <div className={styles.errorMsg}>
                  Please enter a valid Country Code
                </div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (phoneNo === '') {
                    setValidPhone(false);
                    return;
                  }
                  if (countryCode === '') {
                    setValidCC(false);
                    return;
                  }
                  setValidPhone(true);
                  setValidCC(true);
                  handlePageUp();
                }}
              >
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
              <div className={styles.primaryTxt}>LinkedIn Profile</div>
              <div className={styles.secondaryTxt}>
                If you're present on LinkedIn, we would appreciate your profile link for professional networking.
              </div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Paste your Profile link"
                value={linkedIn}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidLinkedin(true);
                  }
                  setLinkedIn(e.target.value);
                }}
              />
              {!validLinkedin && (
                <div className={styles.errorMsg}>
                  Please enter a valid Linkedin URL <br />
                  if not applicable <bold>N/A</bold>
                </div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (linkedIn === '') {
                    setValidLinkedin(false);
                    return;
                  }
                  setValidLinkedin(true);
                  handlePageUp();
                }}
              >
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
              <div className={styles.primaryTxt}>Company or Organization (if applicable)</div>
              <div className={styles.secondaryTxt}>
                Which distinguished organization do you represent?
              </div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Your Company or Organization name"
                value={company}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidCompany(true);
                  }
                  setCompany(e.target.value);
                }}
              />
              {!validCompany && (
                <div className={styles.errorMsg}>
                  Please enter a valid Company or Organization name <br />
                  if not applicable <bold>N/A</bold>
                </div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (company === '') {
                    setValidCompany(false);
                    return;
                  }
                  setValidCompany(true);
                  handlePageUp();
                }}
              >
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
              <div className={styles.primaryTxt}>Current Role or Position*</div>
              <div className={styles.secondaryTxt}>
                Could you kindly share your current designation. (proof of designation will be required)
              </div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Enter your current Role or Position"
                value={role}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidRole(true);
                  }
                  setRole(e.target.value);
                }}
              />
              {!validRole && (
                <div className={styles.errorMsg}>
                  Please enter a valid Current Role or Position
                </div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (role === '') {
                    setValidRole(false);
                    return;
                  }
                  setValidRole(true);
                  handlePageUp();
                }}
              >
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
              <div className={styles.primaryTxt}>Experience in Web3 Space (if any)</div>
              <div className={styles.secondaryTxt}>
                We are interested in learning about your expertise in the web3 domain.
              </div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Please share your experiences in Web3 Space"
                value={web3}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidWeb3(true);
                  }
                  setWeb3(e.target.value);
                }}
              />
              {!validWeb3 && (
                <div className={styles.errorMsg}>
                  Please enter a valid Answer <br />
                  if not applicable <bold>N/A</bold>
                </div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (web3 === '') {
                    setValidWeb3(false);
                    return;
                  }
                  setValidWeb3(true);
                  handlePageUp();
                }}
              >
                Next
              </div>
            </div>
          </div>
        )}

        {pagenum === 8 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              8. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>Annual Revenue in USD*</div>
              <div className={styles.secondaryTxt}>To understand the scope of your operations, may we inquire about your company's annual revenue in USD?</div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Enter your Annual Revenue in USD"
                value={revenue}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidRevenue(true);
                  }
                  setRevenue(e.target.value);
                }}
              />
              {!validRevenue && (
                <div className={styles.errorMsg}>Please enter a valid Revenue in USD</div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (revenue === '') {
                    setValidRevenue(false);
                    return;
                  }
                  setValidRevenue(true);
                  handlePageUp();
                }}
              >
                Next
              </div>
            </div>
          </div>
        )}

        {pagenum === 9 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              9. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>Total Employees*</div>
              <div className={styles.secondaryTxt}>For a comprehensive overview, how many employees are currently employed within your organization?</div>
              <input
                className={styles.nameInput}
                type="number"
                autoComplete="off"
                placeholder="Enter your Total Employees"
                value={employee}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidEmployee(true);
                  }
                  setEmployee(e.target.value);
                }}
              />
              {!validEmployee && (
                <div className={styles.errorMsg}>Please enter a valid Total Employees</div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (employee === '') {
                    setValidEmployee(false);
                    return;
                  }
                  setValidEmployee(true);
                  handlePageUp();
                }}
              >
                Next
              </div>
            </div>
          </div>
        )}

        {pagenum === 10 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              10. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>Company Website</div>
              <div className={styles.secondaryTxt}>If your organization maintains an official website, kindly share the URL for our reference.</div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Enter your Website url"
                value={website}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidWebsite(true);
                  }
                  setWebsite(e.target.value);
                }}
              />
              {!validWebsite && (
                <div className={styles.errorMsg}>Please enter a valid Company Website link</div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (website === '') {
                    setValidWebsite(false);
                    return;
                  }
                  setValidWebsite(true);
                  handlePageUp();
                }}
              >
                Next
              </div>
            </div>
          </div>
        )}

        {pagenum === 11 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              11. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>Funding Received (if applicable)</div>
              <div className={styles.secondaryTxt}>Has your organization received funding? If so, please provide details regarding the total amount received in USD</div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Enter your Funding Received amount"
                value={funding}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidFunding(true);
                  }
                  setFunding(e.target.value);
                }}
              />
              {!validFunding && (
                <div className={styles.errorMsg}>
                  Please enter a valid Answer<br />
                  if not applicable <bold>N/A</bold>
                </div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (funding === '') {
                    setValidFunding(false);
                    return;
                  }
                  setValidFunding(true);
                  handlePageUp();
                }}
              >
                Next
              </div>
            </div>
          </div>
        )}

        {pagenum === 12 && (
          <div className={styles.formWrapper} data-aos="fade-up">
            <div className={styles.counterDiv}>
              12. <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.questionWrapper}>
              <div className={styles.primaryTxt}>Exclusive Club Membership Fee (100 $/month)</div>
              <div className={styles.secondaryTxt}>Are you amenable to the monthly fee of INR 8000 to participate in our exclusive club?</div>
              <input
                className={styles.nameInput}
                type="text"
                autoComplete="off"
                placeholder="Enter your answer"
                value={membership}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setValidMembership(true);
                  }
                  setMembership(e.target.value);
                }}
              />
              {!validMembership && (
                <div className={styles.errorMsg}>Please enter a valid Answer</div>
              )}
              <div
                className={styles.okBtn}
                onClick={() => {
                  if (membership === '') {
                    setValidMembership(false);
                    return;
                  }
                  setValidMembership(true);
                  handlePageUp();
                }}
              >
                Next
              </div>
            </div>
          </div>
        )}

        {pagenum === 13 && (
          <div className={styles.congratsWrapper} data-aos="fade-up">
            <FinalImg />
            <div className={styles.congratsTxt}>
              Form Submitted Successfully
            </div>
            <p className={styles.congratsDesc}>
              Thank you for taking the first step towards joining the inner circle of  extraordinary founders. You're one step closer to unlocking the  exclusive world of web3 excellence. We'll be in touch soon!
            </p>

          </div>
        )}
      </div>
    </>
  );
}

export default PageFounders