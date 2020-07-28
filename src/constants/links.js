import React from "react";
import { Link } from "gatsby";

const data = [
  {
    id: 1,
    text: "Home",
    url: "/#hero",
  },
  {
    id: 2,
    text: "About",
    url: "/#about",
  },
  {
    id: 3,
    text: "Experience",
    url: "/#jobs",
  },
  {
    id: 4,
    text: "Projects",
    url: "/#projects",
  },
  {
    id: 5,
    text: "Contact",
    url: "/#future",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link to={link.url} className="el">
        {link.text}
      </Link>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
      <li>
        <a href="/CV_EN.pdf" target="_blank" className="btn">
          Resume
        </a>
      </li>
    </ul>
  );
};
