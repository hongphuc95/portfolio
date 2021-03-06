import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">{index + 1}</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
        <div className="project-link">
          {github && (
            <a href={github} target="_blank">
              <FaGithubSquare className="project-icon"></FaGithubSquare>
            </a>
          )}
          {url && (
            <a href={url} target="_blank">
              <FaShareSquare className="project-icon"></FaShareSquare>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Project;
