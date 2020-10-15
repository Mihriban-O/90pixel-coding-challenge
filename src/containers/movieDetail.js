import React from "react";
import Navbar from "../components/navbar";
import RelatedMovies from "../components/relatedMovies";

function MovieDetail() {
  return (
    <div>
      <Navbar />

      <div class="breadcrumb">
        <div class="container">
          <a href="index.html">Home /</a>
          <span>The Godfather</span>
        </div>
      </div>

      <div class="container mb-3">
        <div class="card">
          <div class="card-horizontal row">
            <div class="col-lg-4">
              <div class="img-square-wrapper">
                <img class="" src="/img/godFather.png" />
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card-body">
                <div class="card-top">
                  <div>
                    <h6 class="text-secondary ml-2 mb-0">Rating</h6>
                    <div class="imdb-rate">
                      <img src="img/IMDB-icon.png" alt="" />
                      <span>8.8</span>
                    </div>
                  </div>
                  <div class="links add-to-fav">
                    <a href="favorites.html" class="btn btn-yellow">
                      <i class="fa fa-heart" aria-hidden="true"></i>Add to
                      favorites
                    </a>
                    <a
                      href="favorites.html"
                      class="btn btn-yellow btn-yellow-outline"
                    >
                      <i class="fa fa-heart" aria-hidden="true"></i>Added to
                      favorites
                    </a>
                  </div>
                </div>
                <h6 class="yellow">2019</h6>
                <h4 class="card-title">The Godfather</h4>
                <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <div class="links">
                  <a href="favorites.html" class="btn btn-yellow">
                    Action
                  </a>
                  <a href="detail.html" class="btn btn-yellow">
                    Biography
                  </a>
                  <a href="favorites.html" class="btn btn-yellow">
                    Action
                  </a>
                  <a href="detail.html" class="btn btn-yellow">
                    Biography
                  </a>
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

export default MovieDetail;
