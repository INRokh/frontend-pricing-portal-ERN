import React, { Component } from "react";

import "bootswatch/dist/minty/bootstrap.min.css";

class NavBar extends Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/signin">
                  Sign In
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    if (user.is_admin) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/images">
                  Apartments
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/users">
                  Users
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/annotations">
                  Review List
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/logout">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    if (!user.is_admin) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/annotations">
                  Annotation
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/logout">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default NavBar;
