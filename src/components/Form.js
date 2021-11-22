import React, { useState } from 'react';
import '../styles/Form.css'
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';
import AboutMe from './pages/AboutMe';

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
    // If successful, we want to clear out the input after registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('')
    if (!validateEmail(email)) {
      setErrorMessage('* Email is invalid');
    } else {
      alert(`Message sent successfully!
      
Thank you for your message, ${name}! I will get back to you as soon as possible.`);
    }
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
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
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
      </form>
    </div>
  );
};

export default Form;
