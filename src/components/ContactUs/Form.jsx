import React from 'react';
import styles from './Form.module.css';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/images/icon-linkedIn.svg';
import { ReactComponent as Twitter } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as Telegram } from '../../assets/images/icon-telegram-vector.svg';
import { ReactComponent as Mail } from '../../assets/images/icon-mail.svg';
import Select from './Select.jsx';
import {Lottie, triggerLottie} from '../../components/Lottie/Lottie'

const Form = () => {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        service: '',
        msg: ''
    });
    const handleOnClickSubmit = (e) => {
        e.preventDefault();
        try{
            fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTY0MDYzMDA0M2Q1MjZiNTUzZCI_3D_pc", {  // Enter your IP address here
        
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        
        })
        triggerLottie();
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className={styles.container}>
            <Lottie text={"Thanks for reaching out! We'll be in touch soon." } />
            <div className={styles.box1}>
                <div>
                    <h1>Have a project?</h1>
                    <p>We would love to hear from you</p>
                </div>
                <div>
                    <p>Stay updated in the industry with our socials</p>
                    <div className={styles.media}>
                        <a href="https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ="><Instagram height="23" fill="white" /></a>
                        <a href="https://www.linkedin.com/company/thematrixlabs/"><Linkedin height="23" fill="white" /></a>
                        <a href="https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09"><Twitter height="23" fill="white" /></a>
                        <a href="https://t.me/brickMatrix"><Telegram height="23" fill="white" /></a>
                        <a href="mailto:contact@thematrixlabs.com"><Mail height="23" fill="white" /></a>
                    </div>
                </div>
            </div>
            <div className={styles.box2}>
                <div className={styles.location}>
                    <h3>Head office</h3>
                    <p>
                        <span>Location</span> - 3191, 1603 Capitol Avenue, Suite 413A, Cheyenne, WY, Laramie, US, 82001
                    </p>
                    <p>
                        <span>Tel. number</span> - <a style={{color: "black"}} href="tel:+917999378952">+91 7999378952</a>
                    </p>
                    <p>
                        <span>Email</span> - <a href="mailto:careers@thematrixlabs.com" style={{color: "black"}}>careers@thematrixlabs.com</a>
                    </p>
                    <p>
                        <span>EIN</span> - 320721211
                    </p>
                </div>
                <form>
                    <input type="text" placeholder="Enter your name" value={data.name} onChange={(e)=>{
                        setData((state)=>{
                            return {
                                ...state,
                                name: e.target.value
                            }
                        })
                    }}/>
                    <input type="text" placeholder="Enter you email" value={data.email} onChange={(e)=>{
                        setData((state)=>{
                            return {
                                ...state,
                                email: e.target.value
                            }
                        })
                    }}/>
                    <Select service={setData}/>
                    <textarea type="text" placeholder="Enter your message" value={data.msg} onChange={(e)=>{
                        setData((state)=>{
                            return {
                                ...state,
                                msg: e.target.value
                            }
                        })
                    }}/>
                    <button onClick={handleOnClickSubmit} >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
