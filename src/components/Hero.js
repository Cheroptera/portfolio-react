/* eslint-disable max-len */
import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section">
      <header className="top-section">
        <div className="logo-container">
          <img className="logo" src="./images/stripes.jpg" alt="logo" />
        </div>
        <div className="header">
          <section className="header-image-and-text">
            <div className="header-image">
              <img className="profile-picture" title="profile-pic" src="./images/frida-randig.JPG" alt="Frida" />
            </div>
            <div className="header-text">
              <h1 className="frida">Frida M. Gustavson</h1>
              <h3 className="job-title">Front-End Developer</h3>
              <h4 className="extra-job-title">with a passion for creative solutions
              </h4>
            </div>
          </section>
          <section>
            <h6 className="presentation">I&apos;m a driven, curious and tech-savvy Swede who decided to switch careers when turning
              40 and dive head-first into web development. I love problem-solving, new tech, design and using my creativity
              to create visually appealing and user-friendly websites and apps.

            </h6>
          </section>
          <section className="socialmedia-icons">
            <a href="https://github.com/Cheroptera" target="_blank" rel="noreferrer">
              <img className="sm-icon" src="./assets/github.svg" alt="Github icon" />
            </a>
            <a href="https://linkedin.com/freedahsoul" target="_blank" rel="noreferrer">
              <img className="sm-icon" src="./assets/linkedin.svg" alt="Linkedin icon" />
            </a>
            <a href="https://stackoverflowteams.com/c/technigo/users/464/" target="_blank" rel="noreferrer">
              <img className="sm-icon" src="./assets/stackoverflow.svg" alt="Stack overflow icon" />
            </a>
          </section>
        </div>
      </header>
      <div className="arrow-section">
        <img className="arrow" src="./assets/pngegg.png " alt="arrow indicating that you should scroll downwards" />
      </div>
    </div>
  )
}
export default Hero