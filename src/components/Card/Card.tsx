import './Card.module.css';
import { FaPlay } from 'react-icons/fa';
import axios from "axios";
import { useEffect, useState } from 'react';
import request from './../../request_api';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
}

const Card = ({ setBackdropUrl }: { setBackdropUrl: (url: string) => void }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // Pick a random movie from the list, if available
  const movie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;

  useEffect(() => {
    axios.get(request.requestTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const baseUrl = "https://image.tmdb.org/t/p/original";
  const backdropUrl = movie ? `${baseUrl}${movie.backdrop_path}` : '';

  // Pass the backdrop URL to the parent component
  useEffect(() => {
    setBackdropUrl(backdropUrl);
  }, [backdropUrl, setBackdropUrl]);

  return (
    <div className="relative z-0 flex h-screen p-8">
      {/* Card Component */}
      <div className="relative w-[50%] h-full">
        <div
          className="shadow-2xl absolute top-[35%] left-[75%] transform -translate-x-1/2 -translate-y-[25%] w-[400px] h-[600px] md:w-[18vw] md:h-[50vh] max-w-[400px] max-h-[650px] 
                     bg-cover bg-center rounded-[100px] drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"
          style={{ backgroundImage: `url(${backdropUrl})` }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaPlay 
              className="text-white text-7xl rounded-[50px]cursor-pointer opacity-80 hover:opacity-100 drop-shadow-lg transition duration-300 ease-in-out"/>
          </div>
        </div>
      </div>

      {/* Sidebar with Title, Buttons, and Synopsis */}
      <div className="absolute top-[43%] left-[48%] transform -translate-y-1/2">
        <h1 className="text-shadow-md font-robot text-6xl lg:text-6xl font-bold text-white mb-4">{movie?.title}</h1>
        <div className="flex space-x-4 mb-4">
          <button className="shadow-md font-roboto px-6 py-2  border border-white text-white rounded-[50px] bg-white/30 backdrop-blur-2xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105">
            Category 1
          </button>
          <button className="shadow-xl font-roboto px-6 py-2 border border-white text-white rounded-[50px] bg-white/30 backdrop-blur-2xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105">
            Category 2
          </button>
        </div>
        <p className="text-shadow-lg font-roboto text-white bold lg:text-lg max-w-lg">
          {movie?.overview}
        </p>
      </div>
    </div>
  );
}

export default Card;
