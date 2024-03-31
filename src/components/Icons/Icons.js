import React from "react";
import "./Icons.css";
import { FaInstagram, FaEnvelope, FaImdb, FaYoutube } from "react-icons/fa";
import {
  IMDB_LINK,
  INSTAGRAM_LINK,
  YOUTUBE_LINK,
  EMAIL_LINK,
} from "../../constants";

function Icons() {
  return (
    <>
      <div className="icons">
        <a target="_blank" href={IMDB_LINK} rel="noreferrer">
          <div>
            <FaImdb />
          </div>
        </a>
        <a target="_blank" href={INSTAGRAM_LINK} rel="noreferrer">
          <div>
            <FaInstagram />
          </div>
        </a>
        <a target="_blank" href={YOUTUBE_LINK} rel="noreferrer">
          <div>
            <FaYoutube />
          </div>
        </a>
        <a target="_blank" href={EMAIL_LINK} rel="noreferrer">
          <div>
            <FaEnvelope />
          </div>
        </a>
      </div>
    </>
  );
}

export default Icons;
