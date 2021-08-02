import React, { useState, useEffect } from 'react';
import FilmsSearch from "../components/FilmsSearch";
import MoviesList from "../components/MoviesList";
import Preloader from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();

  const searchMovies = (str = 'fate', type = '') => {
    setLoading(true);
    const href = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`;
    fetch(href)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }

  useEffect(() => {
    const href = `https://www.omdbapi.com/?apikey=${API_KEY}&s=fate`;
    fetch(href)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
    })}, []);

  return (
    <main className="container content">
      <FilmsSearch cb={searchMovies} />
      {
        loading
          ? <Preloader />
          : <MoviesList movies={movies} />
      }
    </main>
  );
}
