import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiProjects: { nodes: projects },
  } = data;

  return (
    <Layout>
      <section className="project-page">
        <Projects projects={projects} title="All Projects" />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        description
        feature
        github
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

export default ProjectsPage;
