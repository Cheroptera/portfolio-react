import React from 'react'
import { projectList } from './ProjectList'
import LinkButtons from './LinkButtons'

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-title">
        <h4 className="featured"> Featured Projects </h4>
      </div>
      {projectList.map(({ title, img, alt, description, tags, code, demo, hasBackendCode, footnote }) => {
        return (
          <div className="project" key={title}>
            <div className="project-image-container">
              <img className="project-image" src={img} alt={alt} loading="lazy" />
            </div>
            <div className="project-text-and-icons">
              <div className="project-text-group">
                <h5 className="project-title"> {title} </h5>
                <p className="project-text">{description}</p>
                {footnote ? (
                  <p className="footnote">{footnote}</p>
                ) : (
                )}
              </div>
              <div className="language-buttons">{tags.map((tag) => <span className="language-text" key={tag}>{tag}</span>)}
              </div>
              <LinkButtons code={code} demo={demo} hasBackendCode={hasBackendCode} />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Projects;