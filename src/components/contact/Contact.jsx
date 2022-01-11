import React,{useContext} from "react";
import './Contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import {useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../Context";




function Contact() {
    const formRef=useRef()
const [done, setDone] = useState(false)
const theme=useContext(ThemeContext)
const darkMode=theme.state.darkMode;

    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs
        .sendForm(
            'service_kjl9v8h', 
            'template_3na79p9', 
            formRef.current, 
            'user_SBPAVsAmtaAnu4LppkrSh'
            )
        .then((result) => 
        {
            console.log(result.text);
            setDone(true)
        }, (error) =>
        {
            console.log(error.text);
        });
    };
    

    return (
        <div className='contact'>
            <div className='contact-bg'></div>
            <div className='contact-wrapper'>
                <div className='contact-left'>
                    <h1 className='contact-title'>Let's discuss your Project</h1>
                    <div className='contact-info'>
                        <div className='contact-info-item'>
                            <img
                            src={Phone}
                            alt=''
                            className='contact-icon'
                             />
                             +91 995 960 8677
                        </div>
                        <div className='contact-info-item'>
                            <img
                            src={Email}
                            alt=''
                            className='contact-icon'
                             />
                             pusamsaikumar302@gmail.com
                        </div>
                        <div className='contact-info-item'>
                            <img
                            src={Address}
                            alt=''
                            className='contact-icon'
                             />
                             H.no:1-68,kusumanapally village, yatapaka mandal,east godavari district,Ap state
                        </div>
                    </div>



                </div>
                <div className='contact-right'>
                        <p className="contact-description">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && "white"}} type='text' placeholder='Name' name='user_name' />
                            <input  style={{backgroundColor: darkMode && "white"}} type='text' placeholder='Subject' name='user_Subject' />
                            <input style={{backgroundColor: darkMode && "white"}} type='text' placeholder='Email' name='user_email' />
                            <textarea style={{backgroundColor: darkMode && "white"}} rows="5" placeholder="Message" name="message" />
                            <button>Submit</button>
                            {done && "Thank you..."}
                        </form>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Contact
