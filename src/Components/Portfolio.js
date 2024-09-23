import React from "react";

const Portfolio = ({ data }) => {
  if (!data) return null; // Return null if no data

  const renderProjects = (projects) => {
    return projects.map((project) => {
      const projectImage = "images/portfolio/" + project.image;
      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a
              href={project.url}
              title={project.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div>
          <h1>MERN Stack Projects</h1>
          <div className="project-wrapper">
            {renderProjects(data.mernProject1)}
          </div>
          <div className="project-wrapper">
            {renderProjects(data.mernProject2)}
          </div>
          <div className="project-wrapper">
            {renderProjects(data.mernProject3)}
          </div>
          <h1>Others</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-thirds cf"
          >
            {renderProjects(data.projects1)}
          </div>
          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-thirds cf"
          >
            {renderProjects(data.projects2)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
