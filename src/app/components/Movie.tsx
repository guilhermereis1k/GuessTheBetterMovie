const Movie = ({ movieData }) => {
  return (
    <div>
      {movieData && (
        <div>
          <img
            src={movieData.Poster}
            alt={`Poster of the film ${movieData.Title}`}
          />
          <h1>{movieData.Title}</h1>
          <h3>{movieData.imdbRating}</h3>
        </div>
      )}
      {!movieData && <p>loading</p>}
    </div>
  );
};

export default Movie;
