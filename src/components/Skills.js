import React from 'react';

const Skills = () => {
  return (
    <section>
      <div className="skills-section" id="skills">
        <h4 className="skills-title"> Skills</h4>
        <section className="skills-container">
          <ul className="skills-list" id="codeList">
            <li> <span className="code">Code</span></li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>Styled Components</li>
            <li>GitHub</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Express.js</li>
          </ul>
          <ul className="skills-list" id="toolboxList">
            <li> <span className="toolbox">Toolbox </span></li>
            <li>VS Code</li>
            <li>Stack Overflow</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>ChatGPT</li>
            <li>Postman</li>
            <li>Compass</li>
            <li>Atlas</li>
            <li>Notion</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
            <li>Pro Tools</li>
          </ul>
          <ul className="skills-list" id="moreList">
            <li> <span className="more"> More </span></li>
            <li>Music Production</li>
            <li>Marketing</li>
            <li>Entrepreneurship</li>
            <li>Social Media</li>
            <li>Copywriting</li>
            <li>Design</li>
            <li>Layouts</li>
            <li>Teaching</li>
            <li>Translation</li>
            <li>Sales</li>

          </ul>
          <ul className="skills-list" id="upcomingList">
            <li> <span className="upcoming"> Upcoming </span></li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>SASS/SCSS</li>
            <li>Sanity</li>
            <li>React Native</li>
          </ul>
        </section>
      </div>
    </section>
  )
};

export default Skills;