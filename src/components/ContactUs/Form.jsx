import React from 'react';
import styles from './Form.module.css';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/images/icon-linkedIn.svg';
import { ReactComponent as Twitter } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as Telegram } from '../../assets/images/icon-telegram-vector.svg';
import { ReactComponent as Mail } from '../../assets/images/icon-mail.svg';
import Select from './Select.jsx';

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
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.box1}>
                <div>
                    <h1>Have a project?</h1>
                    <p>We would love to hear from you</p>
                </div>
                <div>
                    <p>Stay updated in the industry with our socials</p>
                    <div className={styles.media}>
                        <Instagram height="23" fill="white" />
                        <Linkedin height="23" fill="white" />
                        <Twitter height="23" fill="white" />
                        <Telegram height="23" fill="white" />
                        <Mail height="23" fill="white" />
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
                        <span>Tel. number</span> - +91 7999378952
                    </p>
                    <p>
                        <span>Email</span> - careers@thematrixlabs.com
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
