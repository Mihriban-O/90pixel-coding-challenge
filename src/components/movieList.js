import React from "react";
import MovieCardList from "./movieCardList";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          {this.props.movies && this.props.movies.map((movie) => (
            <MovieCardList Movie={movie} key={movie.imdbID} />
          ))}
        </div>
        <br />
        <div className={this.props.pageCount ? "row" : "row d-none"}>
          <div className="col-lg-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li
                  className={
                    this.props.currentPage === 1
                      ? "page-item disabled"
                      : "page-item"
                  }
                >
                  <a
                    className="page-link"
                    tabIndex="-1"
                    aria-disabled="true"
                    onClick={() =>
                      this.props.fetchData(this.props.currentPage - 1)
                    }
                  >
                    Previous
                  </a>
                </li>
                {this.props.pageCount && Array.from(
                  { length: this.props.pageCount },
                  (v, k) => k + 1
                ).map((page) => (
                  <li key={page} className="page-item">
                    <a
                      className={
                        page === this.props.currentPage
                          ? "page-link active"
                          : "page-link"
                      }
                      onClick={() => this.props.fetchData(page)}
                    >
                      {page}
                    </a>
                  </li>
                ))}
                <li
                  className={
                    this.props.currentPage === this.props.pageCount
                      ? "page-item disabled"
                      : "page-item"
                  }
                >
                  <a
                    className="page-link"
                    onClick={() =>
                      this.props.fetchData(this.props.currentPage + 1)
                    }
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
