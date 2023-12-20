/* eslint-disable max-len */
import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section" id="top">
      <header className="top-section">
        <div className="logo-container">
          <div className="logo" alt="logo" />
        </div>
        <div className="header">
          <div className="header-content">
            <section className="header-image-and-text">
              <div className="header-image">
                <img className="profile-picture" title="profile-pic" src="./images/frida_rosa.webp" loading="lazy" alt="Frida" />
              </div>
              <div className="header-text">
                <h1 className="frida">Frida M. Gustavson</h1>
                <h3 className="job-title">Front-End Developer</h3>
                <h4 className="extra-job-title">with a passion for creative solutions
                </h4>
              </div>
            </section>
            <section>
              <p className="presentation">I&apos;m a driven, curious and tech-savvy Swede with a background in languages, who decided to switch careers when turning 40 and dive head-first into web development. I love problem-solving, new tech, design and using my creativity to create visually appealing and user-friendly websites and apps. </p>
            </section>
            <section className="socialmedia-icons">
              <a href="https://github.com/Cheroptera" target="_blank" rel="noreferrer">
                <img className="sm-icon" src="./images/github.svg" alt="Github icon" />
              </a>
              <a href="https://linkedin.com/in/freedahsoul" target="_blank" rel="noreferrer">
                <img className="sm-icon" src="./images/linkedin.svg" alt="Linkedin icon" />
              </a>
              {/* <a href="https://stackoverflowteams.com/c/technigo/users/464/" target="_blank" rel="noreferrer">
              <img className="sm-icon" src="./images/stackoverflow.svg" alt="Stack overflow icon" />
            </a> */}
            </section>
          </div>
        </div>
      </header>
      <div className="arrow-section">
        <img className="arrow" src="./images/pngegg.png" alt="arrow indicating that you should scroll downwards" />
      </div>
    </div>
  )
}
export default Hero