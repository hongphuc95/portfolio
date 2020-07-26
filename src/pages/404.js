import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="404 Page Not Found" />
      <main className="error-page">
        <div className="error-container">
          <h1>404 - This is a dead end</h1>
          <Link to="/" className="btn">
            Go Back Home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
