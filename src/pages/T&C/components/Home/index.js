import React from 'react'
import IconLocation from "../assests/images/icon-location.svg";
import IconPhone from "../assests/images/icon-phone.svg";
import IconMail from "../assests/images/icon-mail.svg";
import styles from "./style.module.css";

export default function Home() {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.mainTitleDiv}>
                <div className={styles.mainTitle}>
                    <h1>Terms and Conditions </h1></div>
                <p>Please read these Terms & Conditions carefully, as it contains important information.</p>
            </div>
            {/* <div className={styles.noticeDesc}>
                The English version of legal agreements and policies is considered as the only current and valid version of this document. Any translated version is provided for your convenience only, to facilitate reading and understanding of the English version. Any translated versions are not legally binding and cannot replace the English versions. In the event of disagreement or conflict, the English language legal agreements and policies shall prevail.
            </div> */}
            {/* <div className={styles.effeDate}>Effective Date: January 9, 2023</div> */}

            <div className={styles.policyTnc}>
                <div className={styles.policyTncContent}>
                    <div className={styles.titles}>
                        <h1>Introduction</h1></div>
                    <div className={styles.desc}>
                        <p> Welcome to TheMatrixLabs ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website located at TheMatrixLabs.com ("Website") and any related services, products, and software provided by TheMatrixLabs ("Services").</p>
                    </div>
                    <div className={styles.desc}>
                        <p>By accessing or using the Website and our Services, you agree that you have read, understood, and are bound by these Terms. If you do not agree with these Terms, please do not use the Website or our Services.</p>
                    </div>
                </div>
                <div className={styles.policyTncContent}>
                    <div className={styles.titles}>
                        <h1>Services </h1></div>
                    <div className={styles.descWrapper}>
                        <div className={styles.desc}>
                            <p>TheMatrixLabs specializes in providing landing page design and development services, particularly for cryptocurrency and blockchain projects. Our Services may include, but are not limited to, design consultation, development, analytics, and customer support.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.policyTncContent}>
                    <div className={styles.titles}>
                        <h1>Payment Terms </h1></div>
                    <div className={styles.descWrapper}>
                        <div className={styles.desc}>
                            <p>Upfront Payment: Payments for our Services are generally to be made upfront unless otherwise agreed upon in writing between you and TheMatrixLabs.  </p>
                        </div>
                        <div className={styles.desc} style={{ marginTop: "40px" }}>
                           <p> Late Fees: Failure to make payment within the stipulated time may result in late fees and the termination of Services.</p>
                        </div>

                        <div className={styles.desc} style={{ marginTop: "40px" }}>
                           <p> Payment Methods: We accept payments through </p>
                        </div>

                        <ol>
                            <li>
                                1. Crypto Transfer
                            </li>
                            <li>
                                2. US bank Transfer
                            </li>
                        </ol>
                    </div>
                </div>
                <div className={styles.policyTncContent}>
                    <div className={styles.titles}>
                        <h1>Refund Policy </h1></div>
                    <div className={styles.descWrapper}>
                        <div className={styles.desc}>
                           <p> No Refunds: All sales are final unless otherwise stated.</p>
                        </div>
                        <ol>
                            <li>
                                Discretionary Refunds: Refunds are at the sole discretion of TheMatrixLabs and will only be considered in exceptional circumstances.
                            </li>
                            <li>
                                Intellectual Property
                                Ownership: The Website, Services, and all original content are the sole property of TheMatrixLabs and are protected by copyright and other intellectual property rights laws.
                            </li>
                            <li>
                                License: By using our Services, you are granted a limited, non-exclusive, non-transferable license to use the content and resources. No other rights are granted to you by implication or otherwise.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className={styles.policyTncContent}>
                    <div className={styles.titles}>
                        <h1>Limitation of Liability </h1></div>
                    <div className={styles.descWrapper}>
                        <div className={styles.desc}>
                          <p> TheMatrixLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, due to your use or inability to use our Services. </p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contentDiv}>
                <div className={styles.titles}>
                    <h1>Termination </h1></div>
                <div className={styles.desc}>
                 <p>  We reserve the right to terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason whatsoever, including but not limited to a breach of these Terms. </p> 
                </div>

                <div className={styles.titles}>
                    <h1>Changes to These Terms </h1></div>
                <div className={styles.desc}>
                  <p> We reserve the right to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. </p> 
                </div>

                <div className={styles.titles}>
                    <h1>Governing Law </h1></div>
                <div className={styles.desc}>
                  <p>  These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your Jurisdiction] for the resolution of any disputes. </p>
                </div>


                <div className={styles.contact}>
                    <div className={styles.location}>
                        <div className={styles.contactDesc}>
                            <img className={styles.contactLocationIcon} src={IconLocation} alt="icon-location" />
                            <div className={styles.locationTxt}>
                                The Matrix Lab<br />
                                Head Office US<br />
                                <div style={{ fontSize: '14px' }}>
                                    <p>3191, 1603 Capitol Avenue, Suite 413A, Cheyenne, WY, Laramie, US, 82001 </p></div>
                            </div>
                        </div>
                        <div style={{ marginTop: "10px" }} className={styles.contactDesc}>
                            <img className={styles.contactEmailIcon} src={IconMail} alt="icon-email" />
                            <div className={styles.contactEmail}>
                               <a href=''>contact@thematrixlabs.com</a> 
                            </div>
                        </div>
                        <div style={{ marginTop: "10px" }} className={styles.contactDesc}>
                            <img className={styles.contactPhoneIcon} src={IconPhone} alt="icon-phone" />
                            <div>
                                <a href="tel:+12342559266">+1 (234) 255-9266</a>
                            </div>
                        </div>
                        <div style={{ marginTop: "10px" }} className={styles.contactDesc}>
                            <div>
                                <p>EIN &nbsp; &nbsp; 320721211 </p></div>
                        </div>
                    </div>


                    <div style={{ marginTop: "30px" }} className={styles.location}>
                        <div className={styles.contactDesc}>
                            <img className={styles.contactLocationIcon} src={IconLocation} alt="icon-location" />
                            <div className={styles.locationTxt}>
                                The Matrix Lab<br />
                                Head Office India<br />
                                <div style={{ fontSize: '14px' }}>
                                    <p>304/A1, Prospera, Bhopal, india </p></div>
                            </div>
                        </div>
                        <div style={{ marginTop: "10px" }} className={styles.contactDesc}>
                            <img className={styles.contactEmailIcon} src={IconMail} alt="icon-email" />
                            <div className={styles.contactEmail}>
                            <a href=''>contact@thematrixlabs.com</a> 
                            </div>
                        </div>
                        <div style={{ marginTop: "10px" }} className={styles.contactDesc}>
                            <img className={styles.contactPhoneIcon} src={IconPhone} alt="icon-phone" />
                            <div>
                                <a href="tel:+917999378952">+91 7999378952</a>
                            </div>
                        </div>
                        <div style={{ marginTop: "10px" }} className={styles.contactDesc}>
                            <div>
                                <p>GST &nbsp; &nbsp; 23BWVPJ4749M1ZQ</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}