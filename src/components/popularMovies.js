import React from "react";
import MovieListCarousel from "./movieListCarousel";
import Api from "../api";

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    Api.searchMovies("monkey").then((movies) =>
      this.setState({ movies: movies.Search })
    );
  }

  render() {
    return (
      <div>
        <div className="more-info">
          <div className="container">
            <h4>Popular Movies</h4>
            <a className="details" href="detail.html">
              <span>View More</span>
              <span>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>
        <MovieListCarousel movies={this.state.movies} />
      </div>
    );
  }
}

export default PopularMovies;
