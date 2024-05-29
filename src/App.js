import React, { useState } from 'react';
import './App.css';

//defining component consultationForm
const ConsultationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission 
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    //Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2>Get Free Consultation</h2>
      <p>WELCOME SEND YOU MESSAGE AND AGRICULTURE EXPERTS WILL HELP YOU ACCORDINGLLY</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter a valid email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};



export default ConsultationForm;
