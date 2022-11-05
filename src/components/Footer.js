import React from 'react';
import '../styles/Footer.css'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";


function Footer() {
  return (
    <>
      <div className="icons">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/dimitermusic/"
          rel="noreferrer"
        >
          <div>
            <FaLinkedin />
          </div>
        </a>
        <a
          target="_blank"
          href="https://github.com/dimitermusic"
          rel="noreferrer"
        >
          <div>
            <FaGithub />
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/dimitermusic/"
          rel="noreferrer"
        >
          <div>
            <FaInstagram />
          </div>
        </a>
        <a
          target="_blank"
          href="mailto:dimitermusic@gmail.com"
          rel="noreferrer"
        >
          <div>
            <FaEnvelope />
          </div>
        </a>
      </div>
    </>
  );
}

export default Footer;
