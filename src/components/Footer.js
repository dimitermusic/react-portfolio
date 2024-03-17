import React from 'react';
import '../styles/Footer.css'
import { FaGithub, FaInstagram, FaEnvelope, FaImdb, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <>
      <div className="icons">
        <a
          target="_blank"
          href="https://www.imdb.com/name/nm1812085"
          rel="noreferrer"
        >
          <div>
            <FaImdb />
          </div>
        </a>
        {/* <a
          target="_blank"
          href="https://github.com/dimitermusic"
          rel="noreferrer"
        >
          <div>
            <FaGithub />
          </div>
        </a> */}
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
          href="https://www.youtube.com/channel/UCfu37nGmXSfgaMsUS5yO85g"
          rel="noreferrer"
        >
          <div>
            <FaYoutube />
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
