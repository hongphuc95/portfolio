import React from "react";
import Image from "gatsby-image";
import Title from "./Title";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const data = useStaticQuery(query);
  const {
    about: { nodes },
  } = data;
  const { stack, info, image } = nodes[0];

  return (
    <section className="section about" id="about">
      <Title title="About Me" />
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img" />
        <article className="about-text">
          <ReactMarkdown source={info} />
          <div className="about-stack">
            {stack.map((item) => {
              return <span key={item.id}>{item.title}</span>;
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        strapiId
        info
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

export default About;
