const axios = require("axios").default;
import idList from "../../idsList";

const useSelectRandomMovie = () => {
  const fetchMovie = () => {
    const movieNumber = Math.floor(Math.random() * idList.length);
    const movieId = idList[movieNumber];

    try {
      const response = axios.get(
        `http://www.omdbapi.com/?i=${movieId}&apikey=8837ce1d`
      );
      let movieData = response.data;

      setMovies(() => {
        return movieData;
      });
    } catch (error) {
      throw new Error();
    }
  };

  return {
    movies,
    fetchMovie,
  };
};

export default useSelectRandomMovie;
