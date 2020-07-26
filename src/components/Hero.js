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
            <h2>I solve puzzles in the data.</h2>
            <div className="hero-desc">
              <h4>
                I'm a data scientist based in Paris, France, specializing in
                information systems, cloud computing, and business intelligence.
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
