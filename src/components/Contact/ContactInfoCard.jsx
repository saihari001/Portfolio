import React from 'react';
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className='contact-details-card'>
        <div className="icon-image">
            <img src={iconUrl} alt={text} />
        </div>

        <p><a href={text}>{text}</a></p>
    </div>
  )
}

export default ContactInfoCard