import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Navbar from "../components/navbar";
import RelatedMovies from "../components/relatedMovies";
import Api from "../api";
import imdbIcon from "../assets/img/imdbIcon.png";

@inject("FavoritesStore")
@observer
class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isFavorite: false,
    };
  }

  componentDidMount() {
    Api.getMovie(this.props.match.params.id).then((movie) => {
      this.setState({ movie }, () => {
        this.setState({
          isFavorite: this.props.FavoritesStore.isFavorite(
            this.state.movie.imdbID
          ),
        });
      });
    });
  }

  setFavorite = (val) => {
    if (val) {
      this.props.FavoritesStore.addToFavorites(this.state.movie.imdbID);
      this.setState({ isFavorite: true });

      return;
    }

    this.props.FavoritesStore.removeFromFavorites(this.state.movie.imdbID);
    this.setState({ isFavorite: false });
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="breadcrumb">
          <div className="container">
            <Link to="/">Home / </Link>
            <span>{this.state.movie.Title}</span>
          </div>
        </div>

        <div className="container mb-3">
          <div className="card">
            <div className="card-horizontal row">
              <div className="col-lg-4">
                <div className="img-square-wrapper">
                  <img className="" src={this.state.movie.Poster} />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card-body">
                  <div className="card-top">
                    <div>
                      <h6 className="text-secondary ml-2 mb-0">Rating</h6>
                      <div className="imdb-rate">
                        <img src={imdbIcon} alt="" />
                        <span>{this.state.movie.imdbRating}</span>
                      </div>
                    </div>
                    <div className="links add-to-fav">
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
                        <i className="fa fa-heart" aria-hidden="true"></i>Added
                        to favorites
                      </a>
                    </div>
                  </div>
                  <h6 className="yellow">{this.state.movie.Year}</h6>
                  <h4 className="card-title">{this.state.movie.Title}</h4>
                  <p className="card-text">{this.state.movie.Plot}</p>

                  <div className="links">
                    {this.state.movie.Genre &&
                      this.state.movie.Genre.split(",").map((genre) => (
                        <span className="btn btn-yellow" key={genre}>
                          {genre}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RelatedMovies />
      </div>
    );
  }
}

export default withRouter(MovieDetail);
