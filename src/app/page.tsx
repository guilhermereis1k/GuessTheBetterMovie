"use client";

import Movie from "./components/Movie";
import styles from "./page.module.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import idList from "./idsList";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [movies, setMovies] = useState();

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

  const generateMovieHandler = () => {
    useSelectRandomMovie();

    if (movies != undefined) {
      setMoviesList([...moviesList, movies]);
    }
    console.log("rodando generateMovieHandler", moviesList);
  };

  console.log("outside", moviesList);
  return (
    <main className={styles.main}>
      <Movie movieData={moviesList[0]} />
      <Movie movieData={moviesList[1]} />
      <button onClick={generateMovieHandler}>Generate</button>
    </main>
  );

  //js pegando ids
}
