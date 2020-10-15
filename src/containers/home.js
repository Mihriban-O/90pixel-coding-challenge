import React from "react";
import Navbar from "../components/navbar";
import FilterBar from "../components/filterBar";
import PopularMovies from "../components/popularMovies";

function Home() {
  return (
    <div>
      <Navbar />

      <div class="banner-img-container">
        <div class="yellow-opacity"></div>
        <div class="container">
          <div class="banner-text-area">
            <p class="welcome">Welcome to</p>
            <h1>MovieUP.</h1>
            <p class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
              dolor asperiores! Ipsum quibusdam distinctio ipsam, sed maxime a
              nesciunt qui ea deserunt, non veritatis eveniet voluptas
              temporibus rerum vitae iste?
            </p>
          </div>
        </div>
        <FilterBar HomePage={true} />
      </div>

      <PopularMovies />
    </div>
  );
}

export default Home;
