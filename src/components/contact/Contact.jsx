import React, { useState } from "react";
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoLogoInstagram } from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';

import emailjs from '@emailjs/browser';
import "./Contact.css"
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfu4m63', 'template_jymu1bu', form.current, 'gMPglvj8Z_zwUFzLI')
      .then((result) => {
        console.log(result.text);
        alert("Message sent succesfully")
      }, (error) => {
        console.log(error.text);
        alert("System Error ! Message not sent please try again ")

      });
    e.target.reset();
  };

  return (
    <>

      <section id='contact'>

        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMailOutline className='contact__option-icon' />
              <h4>Email</h4>
              <h5>To Vishal Sathawara</h5>

              <a href="mailto:sathawaravishal10@gmail.com">Send a message</a>
            </article>

            <article className="contact__option">
              <IoLogoInstagram className='contact__option-icon' />
              <h4>Instagram</h4>
              <h5>Vishal Sathawara</h5>
              <a href="https://www.instagram.com/vishal_sathawara_2001/" target='_blank' rel="noreferrer">Go to Insta</a>
            </article>

            <article className="contact__option">
              <BsLinkedin className='contact__option-icon' />
              <h4>LinkedIn</h4>
              <h5>Vishal Sathawara</h5>
              <a href="https://www.linkedin.com/in/sathawara-vishal-1b2859194" target='_blank' rel="noreferrer">Go to LinkedIn</a>
            </article>
          </div>


          <form ref={form} onSubmit={sendEmail}>

            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>

          </form>

        </div>

      </section>
    </>
  )
}
export default Contact;












