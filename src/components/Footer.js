import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-title-section">
        <div className="footer-title">
          <h4> Let&apos;s talk! </h4>
        </div>
      </div>
      <article className="contact-wrapper">
        <section className="contact-card">
          <div className="footer-image">
            <img className="profile-picture" title="profile-pic" src="./images/frida-randig.JPG" alt="Frida" />
          </div>
          <div className="footer-text">
            <h1 className="frida">Frida M. Gustavson</h1>
            <h3 className="job-title">Front-End Developer</h3>
            <h4 className="extra-job-title">with a passion for creative solutions</h4>
          </div>
        </section>
        <div className="contact-details">
          <h6 className="contact-info">+47 92570046</h6>
          <h6 className="contact-info">f.munther.gustavson@gmail.com</h6>
        </div>
        <div className="socialmedia-icons-footer">
          <a href="https://github.com/Cheroptera" target="_blank" rel="noreferrer">
            <img className="sm-icon" src="./images/github.svg" alt="Github icon" />
          </a>
          <a href="https://linkedin.com/freedahsoul" target="_blank" rel="noreferrer">
            <img className="sm-icon" src="./images/linkedin.svg" alt="Linkedin icon" />
          </a>
          <a href="https://stackoverflowteams.com/c/technigo/users/464/" target="_blank" rel="noreferrer">
            <img className="sm-icon" src="./images/stackoverflow.svg" alt="Stack overflow icon" />
          </a>
        </div>
      </article>
    </footer>
  );
}

export default Footer;