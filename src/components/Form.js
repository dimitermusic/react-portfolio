import React, { useState } from 'react';
import '../styles/Form.css'
import emailjs from 'emailjs-com';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';
import Swal from 'sweetalert2';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, and message.
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // Using EmailJS to send email with input from form to me
    const SERVICE_ID = process.env.SERVICE_ID;
    const TEMPLATE_ID = process.env.TEMPLATE_ID;
    const USER_ID = process.env.TEMPLATE_ID;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '.form', USER_ID)
      .then((result) => {
        console.log(result.text);

        // If successful, we want to clear out the input after registration.
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('')
        if (!validateEmail(email)) {
          setErrorMessage('* Email is invalid');
        } else if (name === '' || message === '') {
          setErrorMessage('* All fields are required');
        } else {
          alert(`Message sent successfully!
      
Thank you for your message, ${name}! I will get back to you as soon as possible.`);
        };
        e.target.reset()
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
  }

  return (
    <div className="form-container">
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          rows="5"
          cols="50"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Write your message here...">
        </textarea>
        <button className="button" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;