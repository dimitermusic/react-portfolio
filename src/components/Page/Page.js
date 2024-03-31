import React from "react";
import Icons from "../Icons/Icons";
import {
  NAME,
  FIRST_NAME,
  SUB_HEADING,
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
  PLAYLIST_DESCRIPTION_TEXT,
  SOUNDCLOUD_LINK,
  PLAYLIST_LINK,
} from "../../constants";
import "./Page.css";

export default function Page() {
  const renderVideoIframe = () => {
    return (
      <iframe
        src="https://player.vimeo.com/video/926709263?h=657ef3fd79&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Dimiter Yordanov Music Composer Demo Reel"
      />
    );
  };

  const renderAudioIframe = () => {
    return (
      <>
        <iframe
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1798534824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <div className="playlist-description">
          <a href={SOUNDCLOUD_LINK} title={FIRST_NAME} target="_blank">
            {FIRST_NAME}
          </a>{" "}
          ·{" "}
          <a
            href={PLAYLIST_LINK}
            title={PLAYLIST_DESCRIPTION_TEXT}
            target="_blank"
          >
            {PLAYLIST_DESCRIPTION_TEXT}
          </a>
        </div>
      </>
    );
  };

  return (
    <div className="page-content">
      <Icons />
      <a href="/" target="_self" className="heading-container">
        <h1 className="heading">{NAME}</h1>
        <h2 className="sub-heading">{SUB_HEADING}</h2>
      </a>
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
      <div className="about-container">
        <p className="about-text">{ABOUT_TEXT}</p>
      </div>
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
