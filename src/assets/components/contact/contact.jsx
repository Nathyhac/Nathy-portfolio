import React from "react";
import './contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {BiLogoTelegram} from 'react-icons/bi'

export default function contact(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useRef (0);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_isv0lep', 'template_7geb9w8', form.current, 'VPYFS0RiEFISzcNFs')
             
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          },
          alert('message sent')
          );
      };
    return(
        <section id="contact">
       <h5>Get in touch</h5>
       <h2>contact me</h2>

       <div className="container contact__container">
       <div className="contact__options">
       <article className="contact__option">
        <AiOutlineMail  className="contact__option-icon"/>
       <h5>E-mail</h5>
       <p>nathanielabebe32@gmail.com</p>
       <a href="mailto:nathanielabebe32@gmail.com" target="_blank">Contact me on email</a>
       </article>

       <article className="contact__option">
        <BiLogoTelegram className="contact__option-icon"/>
       <h5>Telegram</h5>
       <a href="https://t.me/@Nathaman7" target="_blank">send a message</a>
       </article>

       <article className="contact__option">
        <AiOutlineLinkedin  className="contact__option-icon"/>
       <h5>Linkedin</h5>
       <a href="https://www.linkedin.com/in/nathaniel-abebe-991791227/" target="_blank">send a message</a>
       </article>
       
       </div>

       <form ref={form} onSubmit={sendEmail}>
       <input type="text" name="name" placeholder="Your full name" required/>
       <input type="text" name="email" placeholder="your Email" rewuired />
       <textarea name="message" id="text" cols="30" rows="7" placeholder="YOUR MESSAGE" required></textarea>
       <button type="submit" className="btn btn-primary">Send message </button>
       </form>
       </div>
        </section>
    )
}