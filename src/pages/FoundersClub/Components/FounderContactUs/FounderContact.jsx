import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";

import styles from "./founderContact.module.css"

const FounderContact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        companyname: '',
        hurdle: '',
        wildworld: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call Pabbly API endpoint to add the email to your list
        try {
            const apiURL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzNjA0MzU1MjZlNTUzYzUxMzMi_pc"
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful submission, e.g., show a success message
                console.log('Form submitted successfully!');
                toast.success('Form submitted successfully! Thank You, we will reach you soon', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            } else {
                // Handle errors, e.g., show an error message
                console.log('Error submitting the form. Please try again later.');
                toast.error('Error submitting the form. Please try again later.', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <section className={styles.fcontact} id="founder_contact_form">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h1 className={styles.fcontactHeading}>Contact Us</h1>
            <p className={styles.fcontactDesc}>Share a slice of your founder's journey with us and get a shoutout from us.</p>

            <div className={styles.fcontactFormContent}>
                <div className={styles.fcontactFromwrapper}>
                    <form className={styles.fcontactFrom} onSubmit={handleSubmit}>
                        <div className={styles.fcontactName}>
                            <input required type="text" name='firstname' placeholder='First Name' value={formData.firstname}
                                onChange={handleInputChange} />
                            <input required type="text" name='lastname' placeholder='Last Name' value={formData.lastname}
                                onChange={handleInputChange} />
                        </div>
                        <input required type="text" name="companyname" placeholder='Company Name' className={styles.fcontactCompany} value={formData.companyname}
                            onChange={handleInputChange} />
                        <textarea required name="hurdle" cols="30" rows="6" placeholder="What hurdles are you currently leaping over?" className={styles.fcontactHurdle} value={formData.hurdle}
                            onChange={handleInputChange}></textarea>
                        <textarea required name="wildworld" cols="30" rows="6" placeholder="What drew you yo the wild world of web 3.0?" className={styles.fcontactWildworld} value={formData.wildworld}
                            onChange={handleInputChange}></textarea>

                        <div className={styles.fcontactButton}>
                            <button className='founder_club_button'>Let’s Get Talking</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FounderContact