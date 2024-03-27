import React from 'react';
import Footer from './Icons';
import '../styles/Page.css'

export default function Page() {
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPageContent = () => {
    return (
      <div
        className='page-content'
      >
        <Footer />
        <a href='/' target="_self" className='title'>
          <h1 style={{marginTop: `${window.innerWidth > 960 ? '180px' : '120px'}`, marginBottom: '12px', fontSize: '64px'}}>Dimiter Yordanov</h1>
          <h2 style={{marginTop: '8px'}}>Music Composer</h2>
        </a>
        <div className='nav-container'>
          <a href="#video" target="_self">
            VIDEO
          </a>
          <a href="#audio" target="_self">
            AUDIO
          </a>
          <a href="#about" target="_self">
            ABOUT
          </a>
          <a href="#contact" target="_self">
            CONTACT
          </a>
        </div>
        <h2 id='video' style={{marginTop: '200px'}}>Video</h2>
        <div style={{marginTop: '20px'}}>
          <iframe src='https://player.vimeo.com/video/926709263?h=657ef3fd79&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' width={window.innerWidth > 960 ? '960' : '336'} height={window.innerWidth > 960 ? '540' : '189'} frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write' title='Dimiter Yordanov Music Composer Demo Reel'></iframe>
        </div>
        <h2 id='audio' style={{marginTop: '200px'}}>Audio</h2>
        <div style={{marginTop: '20px'}}>
          <iframe
            width={window.innerWidth > 960 ? "960" : "336"}
            height={window.innerWidth > 960 ? "540" : "189"}
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1798534824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}>
            <a
              href="https://soundcloud.com/dimitermusic"
              title="Dimiter"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Dimiter Yordanov
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/dimitermusic/sets/dimiter-music-composer-best"
              title="Dimiter Yordanov Music Composer Best Works"
              target="_blank"
              style={{color: '#cccccc', textDecoration: 'none'}}

            >
              My Best Original TV & Film Music
            </a>
          </div>
        </div>
        <h2 id='about' style={{marginTop: '200px'}}>About</h2>
        <div  style={{marginTop: '20px'}} className='about-container'>
          <p>
          I am a film and TV music composer based in Seattle, known for creating the entire original score for both seasons of Netflix docu-series, 'The Kindness Diaries', most of the original score for David Arquette's biopic, 'You Cannot Kill David Arquette', and some music in Sony Pictures film, 'Bad Country'. My style has been described as peaceful, uplifting, powerful, and heartfelt.
          <br />
          <br />
          While creating the original score for 'The Kindness Diaries', I took a creative detour from my typical instrumental compositions and added an acoustic track with my voice on it called, 'Rain' that received an overwhelmingly positive response from fans worldwide. This spark from my new fans inspired me to break down the barriers that had previously kept me from singing and performing.
          <br />
          <br />
          I now release and perform original music all around the US while continuing to grow my passion for music composition in the film and TV world.
          <br />
          <br />
          – Dimiter
          </p>
        </div>
        <h2 id='contact' style={{marginTop: '200px'}}>Contact</h2>
        <div  style={{marginTop: '20px', marginBottom: '124px'}} className='contact'>
          <a href='mailto:dimitermusic@gmail.com'>dimitermusic@gmail.com</a>
        </div>
        <Footer />
      </div>
    )
  };

  return (
    <div >
      {renderPageContent()}
    </div>
  );
}
