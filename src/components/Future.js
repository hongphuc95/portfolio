import React from "react";
import { Link } from "gatsby";
import Title from "./Title";

const Future = () => {
  return (
    <div className="section future" id="future">
      <Title title="Get In Touch" />
      <div className="section-center future-center">
        <p>
          Intrigued by my work? I'm currently looking for a new opportunity, let
          talk about the next amazing things we can do together in the future by
          contacting me. I'll do my best to get back to you.
        </p>
        <p>
          Have a question or just want to send funny things online, feel free to
          write me a message, my inbox is open for anything.
        </p>
      </div>
      <div>
        <Link to="/contact" className="btn">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Future;
