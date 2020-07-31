import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Logo from "../../assets/imgs/logo-2.png";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
    };
    this.setDropdownFalse = this.setDropdownFalse.bind(this);
    this.setDropdownTrue = this.setDropdownTrue.bind(this);
  }
  setDropdownFalse() {
    this.setState({
      dropdown:false
    })
  }
  setDropdownTrue() {
    // console.log('set to true');
    this.setState({
      dropdown:true
    })
  }
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <NavLink className="navbar-brand" to={appRoutes.home} onClick={this.setDropdownFalse}>
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
                    <NavLink className="nav-link" to={appRoutes.home} exact onClick={this.setDropdownFalse}>
                       Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                      <a className={"nav-link dropdown-toggle" + (this.state.dropdown === true ? ' active': '')} href="#" id="navbarDropdownMenuLink"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Process
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink className="nav-link dropdown-item" to={appRoutes.problem} onClick={this.setDropdownTrue}><span className="bold">01 </span> Problem Space</NavLink>
                        <NavLink className="nav-link dropdown-item" to={appRoutes.exploratory} onClick={this.setDropdownTrue}><span className="bold">02 </span> Exploratory Research</NavLink>
                        <NavLink className="nav-link dropdown-item" to={appRoutes.generative} onClick={this.setDropdownTrue}><span className="bold">03 </span> Generative Research</NavLink>
                        <NavLink className="nav-link dropdown-item" to={appRoutes.need} onClick={this.setDropdownTrue}><span className="bold">04 </span> Design For User Needs</NavLink>
                        <NavLink className="nav-link dropdown-item" to={appRoutes.mvp} onClick={this.setDropdownTrue}><span className="bold">05 </span> Design For Guidance</NavLink>
                      </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={appRoutes.solution} onClick={this.setDropdownFalse}>
                      Solution
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={appRoutes.about} onClick={this.setDropdownFalse}>
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
