import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import MovieList from "../components/movieList";
import Api from "../api";

@inject("FavoritesStore")
@observer
class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      pagerCount: 10,
      totalMovieCount: 0,
      movies: [],
    };
  }
  async componentDidMount() {
    for (const fav of this.props.FavoritesStore.favorites) {
      const movie = await Api.getMovie(fav);
      const movieList = this.state.movies;

      movieList.push(movie);
      this.setState({
        movies: movieList,
        totalMovieCount: movieList.length,
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar />

        <div className="breadcrumb">
          <div className="container">
            <Link to="/">Home / </Link>
            <span>Favorites</span>
          </div>
        </div>

        <div className="more-info">
          <div className="container">
            <div className="d-flex">
              <h4>Favorites</h4>
            </div>
          </div>
        </div>

        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default Favorites;
