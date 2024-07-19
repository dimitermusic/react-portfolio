import React from 'react';
import Icons from '../Icons/Icons';
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
	FILM_TV_PLAYLIST_DESCRIPTION_TEXT,
	ARTIST_PLAYLIST_DESCRIPTION_TEXT,
	SOUNDCLOUD_LINK
} from '../../constants';
import './Page.css';

export default function Page() {
	const renderVimeoIframe = (src) => {
		return (
			<iframe
				src={src}
				frameBorder="0"
				allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
				title="Dimiter Yordanov Music Composer Demo Reel"
			/>
		);
	};

	const renderYouTubeIframe = (src) => {
		return (
			<iframe
				width="560"
				height="315"
				src={src}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		);
	};

	const renderAudioIframe = (playlistId, setId, description) => {
		return (
			<>
				<iframe
					scrolling="no"
					frameBorder="no"
					allow="autoplay"
					src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlistId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
				/>
				<div className="playlist-description">
					<a href={SOUNDCLOUD_LINK} title={FIRST_NAME} target="_blank">
						{FIRST_NAME}
					</a>{' '}
					·{' '}
					<a
						href={`https://soundcloud.com/dimitermusic/sets/${setId}`}
						title={description}
						target="_blank"
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
			<div className="content-container">
				{renderYouTubeIframe('https://www.youtube.com/embed/HXfG1HekV2Y?si=R9g6D1uv9b8ezcik&amp;start=163')}
			</div>
			<div className="content-container">
				{renderYouTubeIframe('https://www.youtube.com/embed/cqhcESG2yVg?si=PEscSLcPlIY3o7hc')}
			</div>
			<div className="content-container">
				{renderYouTubeIframe('https://www.youtube.com/embed/aHnj_LQ0b9o?si=fh_VCZOsaQyP9SJq')}
			</div>
      <div className="content-container">
				{renderVimeoIframe(
					'https://player.vimeo.com/video/984691330?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
				)}
			</div>
			<div className="content-container">
				{renderVimeoIframe(
					'https://player.vimeo.com/video/926709263?h=657ef3fd79&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
				)}
			</div>
			<h2 id="listen" className="section-heading">
				{AUDIO_HEADING}
			</h2>
			<div className="content-container">{renderAudioIframe('1145138608', 'spotlight', ARTIST_PLAYLIST_DESCRIPTION_TEXT)}</div>
			<div className="content-container">{renderAudioIframe('1798534824', 'dimiter-music-composer-best', FILM_TV_PLAYLIST_DESCRIPTION_TEXT)}</div>
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
