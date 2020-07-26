import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";

const Blog = ({ id, title, image, stack, description, github, url }) => {
  return (
    <div className="blog">
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
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
        </div>
      </article>
    </div>
  );
};

Blog.propTypes = {};

export default Blog;
