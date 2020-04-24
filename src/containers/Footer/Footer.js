import React from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Logo from "../../assets/imgs/DSL_Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container Footer">
      <hr />
      <div className="LogoContainer">
        <Link to={appRoutes.home}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <br />
      <div className="SourceContainer">
        Information about Discover Student Loans at {" "}
        <a
          href="https://www.discover.com/student-loans/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.discover.com/student-loans/
        </a>
      </div>
      <div className="SourceContainer">
        Visit the MHCI medium posts at {" "}
        <a
          href="https://medium.com/mhci-2020-capstone-team-discover/stories/unlisted"
          target="_blank"
          rel="noopener noreferrer"
        >
            https://medium.com/mhci-2020-capstone-team-discover/stories/unlisted
        </a>
      </div>
    </div>
  );
};

export default Footer;
