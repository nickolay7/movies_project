import Movie from "./Movie";

export default function MoviesList(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length
      ? movies.map((movie) => <Movie key={ movie.imdbID } {...movie} />)
      : <h3>Sorry, movies didn't find :(</h3>}
    </div>
  );
}