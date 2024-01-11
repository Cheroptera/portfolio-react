/* eslint-disable max-len */
import React from 'react';

const Tech = () => {
  return (
    <div className="tech-section" id="tech">
      <div className="tech-title">
        <h3>Tech</h3>
      </div>
      <p className="tech-text">
        HTML5, CSS3, SASS, Tailwind, <span className="tech-word highlight-1" style={{ backgroundColor: 'white' }}> JavaScript/TypeScript</span>, ES6, JSX,
        <span
          style={{ backgroundColor: 'white' }}
          className="tech-word highlight-2"> React
        </span>, Next.js, Redux,  <span className="tech-word highlight-3" style={{ backgroundColor: 'white' }}> Node.js</span>, Mongo DB, Web Accessibility,
        Github, REST APIs, Google Cloud,  <span className="tech-word highlight-4" style={{ backgroundColor: 'white' }}>Styled Components</span>, Material UI, Daisy UI, Bootstrap, Agile Methodologies.
      </p>
    </div>
  )
}

export default Tech