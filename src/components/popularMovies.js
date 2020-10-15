import React from "react";
import MovieListCarousel from "./movieListCarousel";

class PopularMovies extends React.Component {
  render() {
    return (
      <div>
        <div class="more-info">
          <div class="container">
            <h4>Popular Movies 3</h4>
            <a class="details" href="detail.html">
              <span>View More</span>
              <span>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>
        <MovieListCarousel />
      </div>
    );
  }
}

export default PopularMovies;
