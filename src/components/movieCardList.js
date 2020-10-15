import React from "react";

class MovieCardList extends React.Component {
  render() {
    return (
      <div class="col-lg-4">
        <a href="detail.html">
          <div class="card">
            <div class="card-vertical">
              <div class="img-square-wrapper">
                <img class="" src="/img/godFather.png" />
                <div class="like-and-link">
                  <a href="detail.html" class="btn btn-yellow">
                    Biography
                  </a>
                  <a href="favorites.html">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <div class="card-top">
                  <div class="imdb-rate">
                    <img src="img/IMDB-icon.png" alt="" />
                    <span>8.8</span>
                  </div>
                </div>
                <h6 class="yellow">2019</h6>
                <h4 class="card-title">Be Your Self & Never Su..</h4>
                <p class="card-text">
                  The aging patriarch of an organized crime dynasty transfers
                  control of his clandestine empire to his reluctant son.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default MovieCardList;
