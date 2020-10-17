import React from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("FavoritesStore")
@observer

class MovieCardList extends React.Component {
  constructor(props) {
    super(props);
    // ToDo: read if its fav
  }
  render() {
    return (
      <div className="col-lg-4">
        <Link to={`/movie/${this.props.Movie.imdbID}`}>
          <div className="card">
            <div className="card-vertical">
              <div className="img-square-wrapper">
                <img className="" src={this.props.Movie.Poster} />
                <div className="like-and-link">
                  <span>
                    <i
                      className={
                        this.props.FavoritesStore.isFavorite(this.props.Movie.imdbID)
                          ? "fa fa-heart"
                          : "fa fa-heart-o"
                      }
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="yellow">{this.props.Movie.Year}</h6>
                <h4 className="card-title">{this.props.Movie.Title}</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default MovieCardList;
