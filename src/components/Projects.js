import React from "react";
import Title from "./Title";
import Project from "./Project";

const Projects = ({ projects, showLink, title, showGithub }) => {
  return (
    <section className="section projects" id="projects">
      <Title title={title} />
      <div className="section-center project-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
        })}
      </div>
      {showLink && (
        <a href="/projects" className="btn center-btn">
          See All Projects
        </a>
      )}
    </section>
  );
};

export default Projects;
