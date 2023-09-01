import React from "react";

const Hero = () => {
  return (
    <div class="hero-section">
      <header class="top-section">
        <div class="logo-container">
          <img class="logo" src="./images/stripes.jpg" alt="logo" />
        </div>
        <div class="header">
          <section class="header-image-and-text">
            <div class="header-image">
              <img class="profile-picture" title="profile-pic" src="./images/frida-randig.JPG" alt="Picture of Frida" />
            </div>
            <div class="header-text">
              <h1 class="frida">Frida M. Gustavson</h1>
              <h3 class="job-title">Front-End Developer</h3>
              <h4 class="extra-job-title">with a passion for creative solutions
              </h4>
            </div>
          </section>
          <section tabindex="0">
            <h6 class="presentation">I'm a driven, curious and tech-savvy Swede who decided to switch careers when turning
              40 and dive head-first into web development. I love problem-solving, new tech, design and using my creativity
              to create visually appealing and user-friendly websites and apps.

            </h6>
          </section>
          <section class="socialmedia-icons">
            <a href="https://github.com/Cheroptera" target="_blank">
              <img class="sm-icon" src="./assets/github.svg" alt="Github icon" />
            </a>
            <a href="https://linkedin.com/freedahsoul" target="_blank">
              <img class="sm-icon" src="./assets/linkedin.svg" alt="Linkedin icon" />
            </a>
            <a href="https://stackoverflowteams.com/c/technigo/users/464/" target="_blank">
              <img class="sm-icon" src="./assets/stackoverflow.svg" alt="Stack overflow icon" />
            </a>
          </section>
        </div>
      </header>
      <div class="arrow-section">
        <img class="arrow" src="./assets/pngegg.png " alt="arrow indicating that you should scroll downwards" />
      </div>
    </div>
  )
}
export default Hero