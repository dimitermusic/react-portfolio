import React from 'react';
import '../styles/Footer.css'
import { FaLinkedin, FaGithub, FaYoutube} from "react-icons/fa";


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
          href="https://www.youtube.com/channel/UCfu37nGmXSfgaMsUS5yO85g"
          rel="noreferrer"
        >
          <div>
            <FaYoutube />
          </div>
        </a>
      </div>
    </>
  );
}

export default Footer;
