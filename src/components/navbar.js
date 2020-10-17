import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  search = (e) => {
    if (this.state.title.length < 3) return;

    document.location.href = `/search/2020/movie/${this.state.title}`

  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-custom">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span>Movie</span>
            <span className="yellow">UP</span>
          </Link>
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/favorites" className="nav-link">
                  Favorites
                </Link>
              </li>
            </ul>

            <form className="form-inline search-bar-container">
              <div className="form-group">
                <input
                  className="form-control search-bar header-search"
                  type="search"
                  placeholder="Enter movie name here"
                  aria-label="Search"
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
                <div className="search-icon" onClick={this.search}>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
