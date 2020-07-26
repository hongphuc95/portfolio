import React from "react";
import Title from "./Title";
import Blog from "./Blog";
import { graphql, useStaticQuery } from "gatsby";

export const Blogs = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiProjects: { nodes: projects },
  } = data;

  return (
    <section className="section">
      <Title title="Other Projects"></Title>
      <div className="section-center blogs-center">
        {projects.map((project) => {
          return <Blog key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: { feature: { eq: false } }) {
      nodes {
        id
        title
        description
        feature
        github
        url
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Blogs;
