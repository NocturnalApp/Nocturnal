import { Movie as MovieType } from './../../useMovies'; // Importing the Movie interface

interface MovieProps {
  item: MovieType; // Using the Movie type for the item prop
}

const Movie: React.FC<MovieProps> = ({ item }) => {
  const movieTitle = item?.title || item?.original_name; // Use title if available, otherwise use original_name
  return (
    <div className="relative inline-block cursor-pointer p-2 group">
      {/* Movie Poster */}
      <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
        <img
          className="w-[200px] h-[330px] object-cover"
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} // Change to poster_path
          alt={item?.title}
        />
      </div>
      {/* Movie Title */}
      <div className="mt-2 text-white text-center text-sm">{item?.title || item?.original_name}</div>
    </div>
  );
};

export default Movie;
