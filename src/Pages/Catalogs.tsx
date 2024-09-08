import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

const MovieCard = () => (
  <div className="relative w-32 h-48 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
    <div className="absolute inset-0 flex items-center justify-center">
      <FaPlay className="w-12 h-12 text-white opacity-75 hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black via-black to-transparent">
      <div className="bg-green-500 text-black font-bold text-xs py-0.5 px-1.5 rounded-full inline-block">
        New
      </div>
    </div>
    <p className="absolute bottom-0 left-0 right-0 text-center text-white text-sm py-1 bg-black bg-opacity-50">
      Movie 1
    </p>
  </div>
);

const MovieSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Featured Movies</h2>
        <button className="text-gray-400 hover:text-white">More</button>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto pb-4 scroll-smooth"
        >
          {/* Add multiple MovieCard components here */}
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
        >
          <FaChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
        >
          <FaChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

const MovieBrowsingUI = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <MovieSection />
    </div>
  );
};

export default MovieBrowsingUI;
