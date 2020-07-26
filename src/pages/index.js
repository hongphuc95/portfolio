import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Future from "../components/Future";
import SEO from "../components/SEO";
import { graphql, useStaticQuery } from "gatsby";

export default () => {
  const data = useStaticQuery(query);
  const {
    allStrapiProjects: { nodes: projects },
  } = data;

  return (
    <Layout>
      <SEO description="HongPhuc | Data Scientist" />
      <Hero />
      <About />
      {/*<Services />*/}
      <Jobs />
      <Projects projects={projects} showLink title="Featured Projects" />
      <Blogs />
      <Future />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: { feature: { eq: true } }) {
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
