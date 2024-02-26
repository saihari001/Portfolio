import React from 'react';
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className='contact-form-container'>
        <form name='contact' method='POST' data-netlify='true' onSubmit='submit'>
            <div className='name-container'>
                <input type="text" name='firstname' placeholder='First Name'/>
                <input type="text" name='Lastname' placeholder='Last Name'/>
            </div>
            <input type="text" name='email' placeholder='Email'/>
            <textarea type='text' name='message' placeholder='Message' rows={3} />

            <button type='submit'>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm