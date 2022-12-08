import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
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

    var projects1 = data.projects1.map(function (projects1) {
      var projectImage = "images/portfolio/" + projects1.image;
      return (
        <div key={projects1.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects1.url} title={projects1.title}>
              <img alt={projects1.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects1.title}</h5>
                  <p>{projects1.category}</p>
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

    var projects2 = data.projects2.map(function (projects2) {
      var projectImage = "images/portfolio/" + projects2.image;
      return (
        <div key={projects2.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects2.url} title={projects2.title}>
              <img alt={projects2.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects2.title}</h5>
                  <p>{projects2.category}</p>
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
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>React.js And Node.js Projects</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
          <h1>Wordpress Projects</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-thirds cf"
          >
            {projects1}
          </div>
          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-thirds cf"
          >
            {projects2}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
