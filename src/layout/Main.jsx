import React from 'react';
import FilmsSearch from "../components/FilmsSearch";
import MoviesList from "../components/MoviesList";
import Preloader from "../components/Preloader";
// import Filter from "../components/Filter";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    const href = `https://www.omdbapi.com/?apikey=${API_KEY}&s=fate`;
    fetch(href)
      .then((response) => response.json())
      .then((data) => this.setState({movies: data.Search, loading: false}));
  }

  searchMovies = (str, type = '') => {
    this.setState({loading: true});
    const href = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`;
    fetch(href)
      .then((response) => response.json())
      .then((data) => this.setState({movies: data.Search, loading: false}));
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <FilmsSearch cb={this.searchMovies} />
        {
          loading
            ? <Preloader />
            : <MoviesList movies={movies} />
        }
      </main>
    );
  }
}
