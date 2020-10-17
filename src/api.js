const Api = {
  apiKey: "1e05e41f",
  searchMovies: async (title, page, year, type) => {
    let url = `http://www.omdbapi.com/?apikey=${Api.apiKey}&s=${title}`;

    if (page) url += `&page=${page}`;
    if (year) url += `&y=${year}`;
    if (type) url += `&type=${type}`;

    const response = await fetch(url);
    const movies = response.json();

    return movies;
  },
  getMovie: async (id) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${Api.apiKey}&i=${id}`
    );
    const movie = response.json();

    return movie;
  },
};

export default Api;
