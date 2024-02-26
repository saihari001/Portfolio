import React from 'react';
import "./ContactMe.css";
import ContactInfoCard from './ContactInfoCard';
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <section id='contact' className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{ flex: 1 }}>
                <ContactInfoCard 
                    iconUrl="./assets/icons/email.png"
                    text="mailto:hariprasanth3196@gmail.com"
                />
                <ContactInfoCard 
                    iconUrl="./assets/icons/github.png"
                    text= {"https://github.com/saihari001/"}
                />
            </div>
            <div style={{ flex: 1 }}>
                <ContactForm
                />
            </div>
        </div>
    </section>
  )
}

export default ContactMe