import { useEffect, useState } from 'react';
import axios from 'axios';
import request from './request_api';

export interface Movie {  // Ensure the Movie interface is exported
  id: number;
  title: string;
  original_name: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
}

// Mapping of genre IDs to genre names
const genreMap: { [key: number]: string } = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    axios.get(request.requestTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setSelectedMovie(randomMovie);
    }
  }, [movies]);

  const getGenres = (genreIds: number[]) => {
    return genreIds.map(id => genreMap[id]).filter(Boolean).join(", ");
  };

  return { movie: selectedMovie, getGenres };
};
