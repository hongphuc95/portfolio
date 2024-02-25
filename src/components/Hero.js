import React from "react";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <header className="hero" id="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            {/*<div className="underline"></div>*/}
            <h3 style={{ color: "orange" }}>Hi, I am</h3>
            <h1>Hong Phuc</h1>
            <h2>I sculpt the clouds to shape the future of tech.</h2>
            <div className="hero-desc">
              <h4>
                I'm a Cloud and DevOps engineer based in Paris, France, specializing in
                cloud solutions across AWS and Azure platforms with a strong focus in
                Kubernetes for robust cloud.
              </h4>
            </div>

            <Link to="/#projects" className="btn">
              See My Work
            </Link>
            {/*<SocialLinks />*/}
          </div>
        </article>
        {/*<Image fluid={fluid} className="hero-img" />*/}
      </div>
    </header>
  );
};

export default Hero;
