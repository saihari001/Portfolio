import React from 'react';
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className='contact-form-container'>
        <form name='contact' netlify>
            <div className='name-container'>
              <p>
              <label>First name <br />
                <input type="text" name='firstname' placeholder='First Name'/>
              </label>
              </p>
              <p>
              <label>Last name <br />
                <input type="text" name='Lastname' placeholder='Last Name'/>
              </label>
              </p>
            </div>
            <p>
            <label htmlFor="email">
              <input type="text" name='email' id='email' placeholder='Email'/>
            </label>
            </p>
            <p>
            <label>Comments
              <textarea type='text' name='message' placeholder='Message' rows={3} />
            </label>
            </p>
            <p>
            <button type='submit'>SEND</button>
            </p>
        </form>
    </div>
  )
}

export default ContactForm