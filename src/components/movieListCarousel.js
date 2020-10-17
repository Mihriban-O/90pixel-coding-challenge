import React from "react";
import MovieCardCarousel from "./movieCardCarousel";

class MovieListCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {this.props.movies && this.props.movies.map((movie, i) => (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={i}
              className={i === 0 ? "active" : ""}
              key={i}
            ></li>
          ))}
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="container">
            {this.props.movies && this.props.movies.map((movie, i) => (
              <MovieCardCarousel
                Movie={movie}
                key={movie.imdbID}
                active={i === 0 ? true : false}
              />
            ))}
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default MovieListCarousel;
