// Card.tsx
import './Card.module.css';
import { FaPlay } from 'react-icons/fa';
import { useMovies } from './../../useMovies';
import { useEffect } from 'react';


const Card = ({ setBackdropUrl }: { setBackdropUrl: (url: string) => void }) => {
  const { movie, getGenres } = useMovies();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const backdropUrl = movie ? `${baseUrl}${movie.backdrop_path}` : '';

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

      {/* Sidebar with Title, Genres, and Synopsis */}
      <div className="absolute top-[43%] left-[48%] transform -translate-y-1/2">
        <h1 className="text-shadow-md font-robot text-6xl lg:text-6xl font-bold text-white mb-4">{movie?.title}</h1>
        <div className="flex space-x-4 mb-4">
          {/* Display the first two genres (if available) */}
          {movie?.genre_ids.slice(0, 2).map(id => (
            <button key={id} className="shadow-md font-roboto px-6 py-2 border border-white text-white rounded-[50px] bg-white/30 backdrop-blur-2xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105">
              {getGenres([id])}
            </button>
          ))}
        </div>
        <p className="text-shadow-lg font-roboto text-white bold lg:text-lg max-w-lg">
          {movie?.overview}
        </p>
      </div>
    </div>
  );
}

export default Card;
