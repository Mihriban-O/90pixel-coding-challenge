import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav-custom">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <span>Movie</span>
            <span class="yellow">UP</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="favorites.html">
                  Favorites
                </a>
              </li>
            </ul>

            <form class="form-inline search-bar-container">
              <div class="form-group">
                <input
                  class="form-control search-bar header-search"
                  type="search"
                  placeholder="Enter movie name here"
                  aria-label="Search"
                />
                <div class="search-icon">
                  <i class="fa fa-search" aria-hidden="true"></i>
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
