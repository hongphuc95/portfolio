import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site(siteMetadata: {}) {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query);
  const { siteDesc, image, siteUrl, siteTitle, twitterUsername } = siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title || `${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />;
      <meta name="image" content={image} />
      <meta name="siteUrl" content={siteUrl} />
      {/* Twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
