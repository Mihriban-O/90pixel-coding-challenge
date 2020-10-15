import React from "react";
import MovieCardList from "./movieCardList";

class MovieList extends React.Component {
  render() {
    return (
      <div class="container mb-5">
        <div class="row">
          <MovieCardList />
          <MovieCardList />
          <MovieCardList />
          <MovieCardList />
          <MovieCardList />
        </div>
        <br />
        <div class="row">
          <div class="col-lg-12">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
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
