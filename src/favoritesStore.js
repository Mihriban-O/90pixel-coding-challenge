import { observable, action } from "mobx";

class FavoritesStore {
  @observable favorites = [];

  @action buildFavorites() {
    if (!localStorage.getItem("favorites"))
      localStorage.setItem("favorites", "");

    let favorites = localStorage.getItem("favorites");

    if (favorites.toString().trim().length === 0) return;

    this.favorites = favorites.split(",");
  }

  @action addToFavorites(movieId) {
    this.favorites.push(movieId);

    localStorage.setItem("favorites", this.favorites.join(","));
  }

  @action removeFromFavorites(movieId) {
    const index = this.favorites.indexOf(movieId);

    if (index < 0) return;

    this.favorites.splice(index, 1);
    localStorage.setItem("favorites", this.favorites.join(","));
  }

  @action isFavorite(movieId) {
    const index = this.favorites.indexOf(movieId);

    return index >= 0;
  }
}

const favoritesStore = new FavoritesStore();
favoritesStore.buildFavorites();

export default favoritesStore;
