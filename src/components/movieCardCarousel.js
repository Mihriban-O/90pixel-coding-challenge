import React from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("FavoritesStore")
@observer
class MovieCardCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    };
  }

  componentDidMount() {
    this.setState({
      isFavorite: this.props.FavoritesStore.isFavorite(this.props.Movie.imdbID),
    });
  }

  setFavorite = (val) => {
    if (val) {
      this.props.FavoritesStore.addToFavorites(this.props.Movie.imdbID);
      this.setState({ isFavorite: true });

      return;
    }

    this.props.FavoritesStore.removeFromFavorites(this.props.Movie.imdbID);
    this.setState({ isFavorite: false });
  };

  render() {
    return (
      <div
        className={this.props.active ? "carousel-item active" : "carousel-item"}
      >
        <div className="card">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
              <img className="" src={this.props.Movie.Poster} />
            </div>
            <div className="card-body">
              <h6 className="yellow">{this.props.Movie.Year}</h6>
              <h4 className="card-title">{this.props.Movie.Title}</h4>

              <div className="card-body-footer">
                <div className="links">
                  <a
                    href="javascript:void(0)"
                    className={
                      this.state.isFavorite
                        ? "btn btn-yellow d-none"
                        : "btn btn-yellow"
                    }
                    onClick={() => this.setFavorite(true)}
                  >
                    <i className="fa fa-heart" aria-hidden="true"></i>Add to
                    favorites
                  </a>
                  <a
                    href="javascript:void(0)"
                    className={
                      this.state.isFavorite
                        ? "btn btn-yellow btn-yellow-outline"
                        : "btn btn-yellow btn-yellow-outline d-none"
                    }
                    onClick={() => this.setFavorite(false)}
                  >
                    <i className="fa fa-heart" aria-hidden="true"></i>Added to
                    favorites
                  </a>
                  <Link
                    to={`/movie/${this.props.Movie.imdbID}`}
                    className="details"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCardCarousel;
