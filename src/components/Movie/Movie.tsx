import { Movie as MovieType } from './../../useMovies'; // Importing the Movie interface

interface MovieProps {
  item: MovieType; // Using the Movie type for the item prop
}

const Movie: React.FC<MovieProps> = ({ item }) => {
  return (
    <div className="relative inline-block cursor-pointer p-10">
      {/* Movie Poster */}
      <div className="relative overflow-hidden rounded-[20px] transform transition-transform duration-300 hover:scale-105"> {/* Isolated hover effect */}
        <img
          className="w-[300px] h-[450px] object-cover"
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} // Change to poster_path
          alt={item?.title}
        />
        {/* Individual Opacity Effect */}
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      {/* Movie Title */}
      <div className="mt-4 text-white text-center text-lg text-shadow-md font-medium" style={{ fontFamily: 'Roboto Light, sans-serif' }}>
        {item?.title || item?.original_name}
      </div>
    </div>
  );
};

export default Movie;
