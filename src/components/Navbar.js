import React, { Component } from "react";
import logo from "../assets/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import { Link } from "gatsby";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: 0,
      visible: true,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    if (typeof window !== "undefined") {
      const { prevScrollpos } = this.state;

      const maxScroll = document.body.clientHeight - window.innerHeight;
      const currentScrollPos = window.pageYOffset;
      //const visible = prevScrollpos > currentScrollPos;
      let visible = true;
      if (
        (maxScroll > 0 &&
          prevScrollpos > currentScrollPos &&
          prevScrollpos <= maxScroll) ||
        (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
        (prevScrollpos <= 0 && currentScrollPos <= 0)
      ) {
        visible = true;
      } else {
        visible = false;
      }

      this.setState({
        prevScrollpos: currentScrollPos,
        visible: visible,
      });
    }
  };

  render() {
    return (
      <nav className={`navbar ${!this.state.visible ? "navbar--hidden" : ""}`}>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              type="button"
              className="toggle-btn"
              onClick={this.props.toggleSidebar}
            >
              <FaAlignRight></FaAlignRight>
            </button>
          </div>
          <PageLinks styleClass="nav-links"></PageLinks>
        </div>
      </nav>
    );
  }
}

/*const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;*/
