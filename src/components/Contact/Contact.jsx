import { useState } from 'react';
import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import MapChart from '../Map/Map';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);

  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_a91dif7', 
        'template_gjntv3t', 
        ref.current, 
        'xb-_tDkQl8ccBPoxM'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <form ref={ref} className="contact-form" onSubmit={handleSubmit}>
            <h1 className="contact-head">Contact Us :)</h1>
            <input type="text" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
            <textarea name="message" placeholder="Write your message" rows={8} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit" className="contact-btn">Send</button>
            {success !== null && (
              <div className={success ? 'success-message' : 'error-message'}>
                {success ? "Your message has been sent. We'll get back to you soon!" : 'Failed to send message. Please try again later.'}
              </div>
            )}
          </form>
        </div>
        <div className="contact-right">
          <MapChart />
        </div>
      </div>
    </div>
  );
}
