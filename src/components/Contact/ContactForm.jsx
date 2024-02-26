import React from 'react';
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className='contact-form-container'>
        <form name='contact v1' method='POST' data-netlify='true' onSubmit='submit'>
            <div className='name-container'>
              <label>First name <br />
                <input type="text" name='firstname' placeholder='First Name'/>
              </label>
              <label>Last name <br />
                <input type="text" name='Lastname' placeholder='Last Name'/>
              </label>
            </div>
            <label htmlFor="email">
              <input type="text" name='email' id='email' placeholder='Email'/>
            </label>
            <label>Comments
              <textarea type='text' name='message' placeholder='Message' rows={3} />
            </label>

            <button type='submit'>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm