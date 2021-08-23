import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import githubgrey from "../images/githubgrey.png";
import rocket from "../images/rocket.png";

import projectsData from "../data/data";
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings} className="container-slider">
        {projectsData.map((project) => (
          <div className="project" key={projectsData.indexOf(project)}>
            <h3 className="project__header">{project.name}</h3>
            <div className="project__structure">
              <img
                className="project__image"
                src={project.img}
                alt="project image"
              />
              <div>
                <div className="project__icons">
                  <img
                    className="project__icons--piece"
                    src={rocket}
                    alt="rocket image"
                  />
                  <img
                    className="project__icons--piece"
                    src={githubgrey}
                    alt="github image"
                  />
                </div>
                <p className="project__text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
