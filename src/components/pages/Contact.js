import React from 'react';
import Form from '../Form'
import '../../styles/Contact.css'
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <Form className="form" />
      <div className="email">
        <p>
          <FaEnvelope className="email-icon" />
          <a
            target="_blank"
            href="mailto:info@dimitermusic.com"
            rel="noreferrer"
          >
            info@dimitermusic.com
          </a>
        </p>
      </div>
    </div>
  );
}
