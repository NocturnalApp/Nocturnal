import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieComponent from './../components/Movie/Movie';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Movie } from './../useMovies'; // Importing the Movie interface

interface RowProps {
  title: string;
  fetchURL: string;
  rowID: string | number;
}

const Row: React.FC<RowProps> = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState<Movie[]>([]); // Using the Movie type from useMovies.ts

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowID);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById('slider' + rowID);
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <>
      <h2 className="text-shadow-lg text-gradient font-medium text-xl xl:text-4xl p-4 text-center "> {/* Updated title style */}
        {title}
      </h2>
      <div className="relative flex items-center group">
        <IoIosArrowBack
          onClick={slideLeft}
          className="left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          color="white"
        />
        <div
          id={'slider' + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative slider"
        >
          {movies.map((item) => (
            <MovieComponent key={item.id} item={item} />
          ))}
        </div>
        <IoIosArrowForward
          onClick={slideRight}
          className="right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          color="white"
        />
      </div>
    </>
  );
};
export default Row;
