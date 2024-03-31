import React from "react";
import Icons from "../Icons/Icons";
import {
  NAME,
  SUBHEADING,
  VIDEO_HEADING,
  ABOUT_HEADING,
  CONTACT_HEADING,
  VIDEO_LINK_TEXT,
  AUDIO_LINK_TEXT,
  ABOUT_LINK_TEXT,
  CONTACT_LINK_TEXT,
  ABOUT_TEXT,
  EMAIL_ADDRESS,
  EMAIL_LINK,
  AUDIO_HEADING,
} from "../../constants";
import "./Page.css";

export default function Page() {
  const renderVideoIframe = () => {
    return (
      <iframe
        src="https://player.vimeo.com/video/926709263?h=657ef3fd79&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        width="960"
        height="540"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Dimiter Yordanov Music Composer Demo Reel"
      />
    );
  };

  const renderAudioIframe = () => {
    return (
      <iframe
        width="960"
        height="540"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1798534824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    );
  };

  return (
    <div className="page-content">
      <Icons />
      <h1 className="name">{NAME}</h1>
      <h3 className="subheading">{SUBHEADING}</h3>
      <div className="nav-container">
        <a href="#watch" target="_self">
          {VIDEO_LINK_TEXT}
        </a>
        <a href="#listen" target="_self">
          {AUDIO_LINK_TEXT}
        </a>
        <a href="#about" target="_self">
          {ABOUT_LINK_TEXT}
        </a>
        <a href="#contact" target="_self">
          {CONTACT_LINK_TEXT}
        </a>
      </div>
      <h2 id="watch" className="section-heading">
        {VIDEO_HEADING}
      </h2>
      <div className="content-container">{renderVideoIframe()}</div>
      <h2 id="listen" className="section-heading">
        {AUDIO_HEADING}
      </h2>
      <div className="content-container">{renderAudioIframe()}</div>
      <h2 id="about" className="section-heading">
        {ABOUT_HEADING}
      </h2>
      <div className="about-container">{ABOUT_TEXT}</div>
      <h2 id="contact" className="section-heading">
        {CONTACT_HEADING}
      </h2>
      <div className="email-container">
        <a href={EMAIL_LINK}>{EMAIL_ADDRESS}</a>
      </div>
      <Icons />
    </div>
  );
}
