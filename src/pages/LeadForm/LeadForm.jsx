import React, { useState } from 'react'
import styles from "./LeadForm.module.css"
import axios from 'axios';
import Navbar from '../Homev2/components/Navbar';
const LeadForm = () => {
    const obj = {
        name: "",
        email: "",
        number: "",
        country: "",
        experience: "",
        budget: "",
        deadline: "",
        website: "",
        details: "",
        comment: "",
    }
    const [val, setVal] = useState(obj)
    const handleChange = (e) => {
        const { name, value } = e.target
        setVal({ ...val, [name]: value })
    }
    console.log(val,"val")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(val , "OBJ")
        axios.post("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzMzA0MzE1MjZmNTUzYzUxMzQi_pc", val)
            .then((res) => console.log(res,
                'res'))
            .catch((err) => console.log(err));
    }


    return (
        <div>
            <Navbar />
            <div className={styles.formMainDiv}>
                <h1 className={styles.heading}>Looking for a reliable Software solutions</h1>

                <p className={styles.para}>We provide blockchain services from Smart Contract Development and Audit to creating Launchpads, Marketplaces and any kind of unique DAPPs
                    Get Your’s Now
                </p>

                <div className={styles.formDiv}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.nameEmailBox}>
                            <div className={styles.nameDiv}>
                                <label className={styles.label}>Full Name*</label>
                                <input type='text' placeholder='Full Name' className={styles.name} onChange={handleChange} value={val.name} name='name' />
                            </div>

                            <div className={styles.nameDiv}>
                                <label className={styles.label}>Email Address*</label>
                                <input type='text' placeholder='Enter Your Email' className={styles.name} onChange={handleChange} value={val.email} name='email' />
                            </div>
                        </div>

                        <div className={styles.numCountryBox}>
                            <div className={styles.nameDiv}>
                                <label className={styles.label}>Phone Number*</label>
                                <input type='text' placeholder='Full Name' className={styles.name} onChange={handleChange} value={val.number} name='number' />
                            </div>

                            <div className={styles.nameDiv}>
                                <label className={styles.label}>Country*</label>
                                <select className={styles.select} onChange={handleChange} value={val.country} name='country'>
                                    <option data-countryCode="GB" value="" Selected>Select Country</option>
                                    <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                    <option data-countryCode="DZ" value="213">Algeria (+213)</option><option data-countryCode="DZ" value="213">Algeria (+213)</option>

                                </select>
                            </div>
                        </div>


                        <div className={styles.expBudgetBox}>
                            <div className={styles.expDiv}>
                                <label className={styles.label}>Experience*</label>
                                <p>Have you worked with a blockchain development team or agency before?
                                </p>
                                <select className={styles.select} onChange={handleChange} name='experience' value={val.experience}>
                                    {/* Less than ₹ 1,50,000
                                    ₹ 1,50,000 - ₹ 3,00,000
                                    ₹ 3,00,000 - ₹ 4,50,000
                                    ₹ 4,50,000 - ₹ 5,00,000
                                    ₹ 5,00,000 - ₹ 6,50,000
                                    ₹ 6,50,000 + */}
                                    <option data-countryCode="GB" value="" Selected>Select</option>
                                    <option>Less than ₹ 1,50,000</option>
                                    <option>₹ 1,50,000 - ₹ 3,00,000</option>
                                    <option>₹ 3,00,000 - ₹ 4,50,000</option>
                                    <option>₹ 4,50,000 - ₹ 5,00,000</option>
                                    <option>  ₹ 5,00,000 - ₹ 6,50,000</option>
                                    <option>₹ 6,50,000 + </option>


                                </select>
                            </div>

                            <div className={styles.budgetDiv}>
                                <label className={styles.label}>Budget*</label>
                                <p>What is your budget range for this project, considering its complexity and scope?
                                </p>
                                <select className={styles.select} onChange={handleChange} value={val.budget} name='budget'>
                                    <option data-countryCode="GB" value="" Selected>Select</option>
                                    <option>Less than ₹ 1,50,000</option>
                                    <option>₹ 1,50,000 - ₹ 3,00,000</option>
                                    <option>₹ 3,00,000 - ₹ 4,50,000</option>
                                    <option>₹ 4,50,000 - ₹ 5,00,000</option>
                                    <option>  ₹ 5,00,000 - ₹ 6,50,000</option>
                                    <option>₹ 6,50,000 + </option>

                                </select>
                            </div>
                        </div>


                        <div className={styles.deadlineLinkbox}>
                            <div className={styles.deadlineDiv}>
                                <label className={styles.label}>Deadline*</label>
                                <p>When would you like the project development to start? and estimated Deadlline
                                </p>
                                <select className={styles.select} onChange={handleChange} name='deadline' value={val.deadline}>
                                    <option data-countryCode="GB" value="" Selected>Select</option>
                                    <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                    <option data-countryCode="DZ" value="213">Algeria (+213)</option><option data-countryCode="DZ" value="213">Algeria (+213)</option>

                                </select>
                            </div>

                            <div className={styles.websiteDiv}>
                                <label className={styles.label}>Website Link*</label>
                                <input type='text' placeholder='Enter Details' className={styles.details} onChange={handleChange} value={val.website} name='website' />
                            </div>
                        </div>

                        <div className={styles.websiteMainDiv}>
                            <div className={styles.websiteDiv}>
                                <p>Could you provide comprehensive details about the blockchain project you intend to build or have in mind ? (Max 250 Words)
                                </p>
                                <textarea placeholder='Enter Your Answer' value={val.details} name='details' onChange={handleChange}>
                                </textarea>

                            </div>
                        </div>

                        <div className={styles.messMainDiv}>
                            <div className={styles.messDiv}>
                                <p>Message/Comment </p>
                                <textarea placeholder='Enter Your Answer' value={val.comment} name='comment' onChange={handleChange}>
                                </textarea>
                            </div>
                        </div>

                        <div className={styles.submitForm}>
                            <div className={styles.btn}>
                                <input type='submit' value={"Submit Form"} className={styles.inputBtn} />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default LeadForm