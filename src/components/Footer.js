import React from 'react';

const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="footer-title-section">
        <div class="footer-title">
          <h4> Let's talk! </h4>
        </div>
      </div>
      <article class="contact-wrapper">
        <section class="contact-card">
          <div class="footer-image">
            <img class="profile-picture" title="profile-pic" src="./images/frida-randig.JPG" alt="Picture of Frida" />
          </div>
          <div tabindex="0" class="footer-text">
            <h1 class="frida">Frida M. Gustavson</h1>
            <h3 class="job-title">Front-End Developer</h3>
            <h4 class="extra-job-title">with a passion for creative solutions</h4>
          </div>
        </section>
        <div tabindex="0" class="contact-details">
          <h6 class="contact-info">+47 92570046</h6>
          <h6 class="contact-info">f.munther.gustavson@gmail.com</h6>
        </div>
        <div class="socialmedia-icons-footer">
          <a href="https://github.com/Cheroptera" target="_blank">
            <img class="sm-icon" src="./assets/github.svg" alt="Github icon" />
          </a>
          <a href="https://linkedin.com/freedahsoul" target="_blank">
            <img class="sm-icon" src="./assets/linkedin.svg" alt="Linkedin icon" />
          </a>
          <a href="https://stackoverflowteams.com/c/technigo/users/464/" target="_blank">
            <img class="sm-icon" src="./assets/stackoverflow.svg" alt="Stack overflow icon" />
          </a>
        </div>
      </article>
    </footer>
  );
}

export default Footer;