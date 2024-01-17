import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  const form = useRef();
let notFilled = true; 


  const sendEmail = (e) => {
    e.preventDefault();
    if (document.getElementById('nameArea').value.length > 0 && document.getElementById('emailArea').value.length > 0 && document.getElementById('messageArea').value.length > 0) {notFilled = false}
 if(notFilled) {alert('Please fill all fields'); return}
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID).then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Sent!')
      document.getElementById('contactForm').reset();
  };

  return (
    <form id="contactForm" ref={form} onSubmit={sendEmail}>
      <label>Your name</label>
      <input id="nameArea" type="text" name="user_name" placeholder="Your name"/>
      <label>Your email address</label>
      <input id="emailArea" type="email" name="user_email" placeholder="Your email address"/>
      <label>Your message (it's OK to just say hi)</label>
      <textarea id="messageArea" name="message" placeholder="Your message (it's OK to just say hi)"/>
      <p>I'll get back to you asap 👍🏽</p>
      <input id="submitButton" type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
