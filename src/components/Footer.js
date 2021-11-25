import React from 'react';
import '../styles/Footer.css'
import { FaLinkedin, FaGithub, FaSpotify, FaInstagram, FaImdb, FaYoutube } from "react-icons/fa";


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
          href="https://open.spotify.com/artist/6QfYumUXMvevU1TR729Jrr?si=1fd38264b7464034"
          rel="noreferrer"
        >
          <div>
            <FaSpotify />
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
          href="https://www.imdb.com/name/nm1812085/"
          rel="noreferrer"
        >
          <div>
            <FaImdb />
          </div>
        </a>
      </div>
    </>
  );
}

export default Footer;
