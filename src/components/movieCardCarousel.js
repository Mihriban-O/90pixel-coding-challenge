import React from "react";

class MovieCardCarousel extends React.Component {
  render() {
    return (
      <div class="carousel-item active">
        <a href="detail.html">
          <div class="card">
            <div class="card-horizontal">
              <div class="img-square-wrapper">
                <img class="" src="/img/godFather.png" />
              </div>
              <div class="card-body">
                <div class="card-top">
                  <div class="imdb-rate">
                    <img src="img/IMDB-icon.png" alt="" />
                    <span>8.8</span>
                  </div>
                  <div class="links">
                    <a href="favorites.html" class="btn btn-yellow">
                      Action
                    </a>
                    <a href="detail.html" class="btn btn-yellow">
                      Biography
                    </a>
                  </div>
                </div>
                <h6 class="yellow">2019</h6>
                <h4 class="card-title">The Godfather</h4>
                <p class="card-text">
                  The aging patriarch of an organized crime dynasty transfers
                  control of his clandestine empire to his reluctant son.
                </p>

                <div class="card-body-footer">
                  <div class="links">
                    <a href="favorites.html" class="btn btn-yellow">
                      <i class="fa fa-heart" aria-hidden="true"></i>Add to
                      favorites
                    </a>
                    <a href="detail.html" class="details">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default MovieCardCarousel;
