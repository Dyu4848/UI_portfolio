import React, {useState} from 'react';

function Contact() {
    return (
      <section className="contact-me" id="contact-me">
      <h2 className="contact-header">Contact</h2>
      <div className="contact-content">
        <h3>
          Contact me through e-mail with the button below!
        </h3>
        <p>Email: dyu4848@gmail.com</p>
        <br/>
        <a href="mailto:dyu4848@gmail.com" >
        <div className='btn-container'>
          <button className="email-btn">Email Me!</button>
          </div>
        </a>
        </div>
        </section>
    )}

    export default Contact;