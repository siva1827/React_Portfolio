import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g4s74en', 'template_e421v7f', form.current, 'phKNWuCeYp3CUwUHj')
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">

        <div className="contact_options">

          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>sivaravinadhan
              @gmail.com</h5>
            <a href="mailto:sivaravinadhan@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+918072415537</h5>
            {/* <a href="https:api.whatsapp.com/send?phone=+918072415537" target='_blank'>Send a Message</a> */}
          </article>

          <article className="contact_option">
            <AiOutlineInstagram className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>Siva_ravinadhan</h5>
            <a href="https://www.instagram.com/shiva_ravinadhan/?igshid=Yjk4NWM2ZWVkMw%3D%3D" target='_blank'>Send a Message</a>
          </article>
        </div>

        {/* end of of contacts*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required /><textarea />
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;