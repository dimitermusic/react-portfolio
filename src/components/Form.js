import React, { useState } from 'react';
import '../styles/Form.css'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';
import Swal from 'sweetalert2';
init('user_3JaLO91na8xwgEsuHE5qB')



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
    const SERVICE_ID = 'service_skppuri';
    const TEMPLATE_ID = 'template_exgi7w3';
    const USER_ID = 'user_3JaLO91na8xwgEsuHE5qB';
    const form = document.querySelector('.form')

    if (!validateEmail(email)) {
      setErrorMessage('* Email is invalid');
    } else if (name === '' || message === '') {
      setErrorMessage('* All fields are required');
    } else {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
        .then((result) => {
          console.log(result.text);
          // If successful, we want to clear out the input after registration.
          Swal.fire({
            icon: 'success',
            iconColor: '#92cccd',
            background: "#30343d",
            title: '<h5 class="alert-text">Message Sent Successfully</h5>',
            confirmButtonColor: '#92cccd'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            iconColor: '#92cccd',
            background: "#30343d",
            title: '<p class="alert-text">Oops, something went wrong</p>',
            confirmButtonColor: '#92cccd',
            text: error.text,
          })
        });

      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage('')
    };
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
}

export default Form;
