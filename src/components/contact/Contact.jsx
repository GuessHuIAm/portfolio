import {React, useRef} from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

import './contact.css'

const ContactOption = ({icon: Icon, title, subtitle, link, message}) => {
  return (
    <article className='contact__option'>
      <Icon className='contact__option-icon'/>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <a href={link} target='_blank' rel='noreferrer'>{message}</a>
    </article>
  )
}

const contactOptions = [
  {
    icon: MdOutlineEmail,
    title: 'Email',
    subtitle: 'michaelhu.tech@gmail.com',
    link: 'mailto:michaelhu.tech@gmail.com',
    message: 'Send me an email!'
  },
  {
    icon: RiMessengerLine,
    title: 'Messenger',
    subtitle: '',
    link: 'https://m.me/AHHHHHHHGH',
    message: "Let's chat!"
  },
  {
    icon: BsWhatsapp,
    title: 'WhatsApp',
    subtitle: '',
    link: 'https://api.whatsapp.com/send?phone=16468817197',
    message: "Send me a message!"
  },
]

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t8a4hsh', 'template_694egcd', form.current, 'brEp7ghRvSkGt8ZHA');
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          {contactOptions.map(item => <ContactOption {...item} />)}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='text' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
