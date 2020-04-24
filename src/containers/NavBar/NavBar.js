import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Logo from "../../assets/imgs/DSL_Logo.png";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <NavLink className="navbar-brand" to={appRoutes.home}>
                <img src={Logo} alt="logo" />
              </NavLink>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={appRoutes.home} exact>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={appRoutes.problem}>
                      Research
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={appRoutes.solution}>
                      Solution
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={appRoutes.about}>
                      About Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
};

export default NavBar;
