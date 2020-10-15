import React from "react";
import Navbar from "../components/navbar";
import FilterBar from "../components/filterBar";
import MovieList from "../components/movieList";

function SearchResults() {
  return (
    <div>
      <Navbar />

      <div class="breadcrumb">
        <div class="container">
          <a href="/">Home /</a>
          <span>Search results</span>
        </div>
      </div>

      <FilterBar HomePage={false} />

      <div class="more-info">
        <div class="container">
          <div class="d-flex">
            <h4>Search Results</h4>
            <h4 class="yellow ml-3">The Godfather</h4>
          </div>
        </div>
      </div>

      <MovieList />
    </div>
  );
}

export default SearchResults;
