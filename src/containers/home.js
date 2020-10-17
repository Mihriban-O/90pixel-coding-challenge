import React from "react";
import Navbar from "../components/navbar";
import FilterBar from "../components/filterBar";
import PopularMovies from "../components/popularMovies";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="banner-img-container">
          <div className="yellow-opacity"></div>
          <div className="container">
            <div className="banner-text-area">
              <p className="welcome">Welcome to</p>
              <h1>MovieUP.</h1>
              <p className="text">
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
}

export default Home;
