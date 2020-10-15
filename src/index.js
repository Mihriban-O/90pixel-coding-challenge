import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/css/bundle.sass";
import Home from "./containers/home";
import Favorites from "./containers/favorites";
import MovieDetail from "./containers/movieDetail";
import SearchResults from "./containers/searchResults";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
        <Route path="/movie-detail">
          <MovieDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
