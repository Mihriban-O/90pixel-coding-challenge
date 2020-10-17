import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import FilterBar from "../components/filterBar";
import MovieList from "../components/movieList";
import Api from "../api";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);

    this.state = {
      params: this.props.match.params,
      currentPage: 0,
      pagerCount: 10,
      totalMovieCount: 0,
      movies: [],
    };
  }

  loadData(pageNum) {
    if (pageNum === this.state.currentPage) return;

    this.setState({ currentPage: pageNum }, () => {
      Api.searchMovies(
        this.state.params.title,
        this.state.currentPage,
        this.state.params.year,
        this.state.params.type
      ).then((movies) => {
        this.setState({
          totalMovieCount: movies.totalResults,
          movies: movies.Search,
        });
      });
    });
  }

  componentDidMount() {
    this.loadData(1);
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="breadcrumb">
          <div className="container">
            <Link to="/">Home / </Link>
            <span>Search results</span>
          </div>
        </div>

        <FilterBar HomePage={false} />

        <div className="more-info">
          <div className="container">
            <div className="d-flex">
              <h4>Search Results</h4>
              <h4 className="yellow ml-3">{this.state.params.title}</h4>
            </div>
          </div>
        </div>

        <MovieList
          movies={this.state.movies}
          pageCount={Math.round(
            this.state.totalMovieCount / this.state.pagerCount
          )}
          currentPage={this.state.currentPage}
          fetchData={this.loadData}
        />
      </div>
    );
  }
}

export default withRouter(SearchResults);
