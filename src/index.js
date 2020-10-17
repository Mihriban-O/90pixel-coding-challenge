import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/css/bundle.sass";
import Home from "./containers/home";
import Favorites from "./containers/favorites";
import MovieDetail from "./containers/movieDetail";
import SearchResults from "./containers/searchResults";
import FavoritesStore from "./favoritesStore";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider FavoritesStore={FavoritesStore}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/search/:year/:type/:title">
            <SearchResults />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
