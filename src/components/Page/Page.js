import React from "react";
import Icons from "../Icons/Icons";
import {
  NAME,
  FIRST_NAME,
  SUB_HEADING,
  ABOUT_HEADING,
  CONTACT_HEADING,
  AUDIO_LINK_TEXT,
  ABOUT_LINK_TEXT,
  CONTACT_LINK_TEXT,
  ABOUT_TEXT,
  EMAIL_ADDRESS,
  EMAIL_LINK,
  AUDIO_HEADING,
  FILM_TV_PLAYLIST_DESCRIPTION_TEXT,
  ARTIST_PLAYLIST_DESCRIPTION_TEXT,
  SOUNDCLOUD_LINK,
} from "../../constants";
import "./Page.css";

export default function Page() {
  const renderHeroReel = (vimeoId) => {
    return (
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Dimiter Yordanov Music Composer Demo Reel"
      />
    );
  };

  // Lazy-loaded iframe for secondary audio content
  const renderAudioIframe = (playlistId, setId, description) => {
    return (
      <>
        <iframe
          loading="lazy" // LAZY LOAD
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlistId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
        />
        <div className="playlist-description">
          <a
            href={SOUNDCLOUD_LINK}
            title={FIRST_NAME}
            target="_blank"
            rel="noopener noreferrer"
          >
            {FIRST_NAME}
          </a>{" "}
          ·{" "}
          <a
            href={`https://soundcloud.com/dimitermusic/sets/${setId}`}
            title={description}
            target="_blank"
            rel="noopener noreferrer"
          >
            {description}
          </a>
        </div>
      </>
    );
  };

  return (
    <div className="page-content">
      <Icons />
      <div className="heading-container">
        <h1 className="heading">{NAME}</h1>
        <h2 className="sub-heading">{SUB_HEADING}</h2>
      </div>
      <div className="nav-container">
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
      <div className="hero-reel-container">{renderHeroReel("926709263")}</div>
      <h2 id="listen" className="section-heading">
        {AUDIO_HEADING}
      </h2>
      <div className="content-container">
        {renderAudioIframe(
          "1798534824",
          "dimiter-music-composer-best",
          FILM_TV_PLAYLIST_DESCRIPTION_TEXT
        )}
      </div>

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
