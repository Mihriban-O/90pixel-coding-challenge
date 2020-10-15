import React from "react";
import Navbar from "../components/navbar";
import MovieList from "../components/movieList";

function Favorites() {
  return (
    <div>
      <Navbar />

      <div class="breadcrumb">
        <div class="container">
          <a href="/">Home /</a>
          <span>Favorites</span>
        </div>
      </div>

      <div class="more-info">
        <div class="container">
          <div class="d-flex">
            <h4>Favorites</h4>
          </div>
        </div>
      </div>

      <MovieList />
    </div>
  );
}

export default Favorites;
