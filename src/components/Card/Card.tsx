import br2 from './../../assets/br2.jpg'; // Import the image
import './Card.module.css';
import { FaPlay } from 'react-icons/fa'; // Import the play icon

const Card = () => {
  return (
    <div className="relative flex h-screen">
      {/* Card Component */}
      <div className="relative w-[50%] h-full">
        <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-[25%] w-[400px] h-[600px] md:w-[18vw] md:h-[50vh] max-w-[400px] max-h-[650px] 
                        bg-cover bg-center rounded-[100px] drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"
             style={{ backgroundImage: `url(${br2})` }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaPlay 
                className="text-white text-7xl rounded-[50px]cursor-pointer opacity-80 hover:opacity-100 drop-shadow-lg transition duration-300 ease-in-out"/>
          </div>
        </div>
      </div>

     {/* Sidebar with Title, Buttons, and Synopsis
      <div className="absolute w-[50%] bottom-10 top-96 left-1/4">
        <h1 className="text-4xl font-bold text-white mb-4">Breaking Bad</h1>
        <div className="flex space-x-4 mb-4">
          <button className="px-4 py-2 bg-transparent border border-white text-white rounded-md backdrop-blur-md transition duration-300 ease-in-out hover:bg-white hover:text-black">
            Category 1
          </button>
          <button className="px-4 py-2 bg-transparent border border-white text-white rounded-md backdrop-blur-md transition duration-300 ease-in-out hover:bg-white hover:text-black">
            Category 2
          </button>
        </div>
        <p className="text-white text-lg">
          Breaking Bad follows Walter White, a high school chemistry teacher turned methamphetamine manufacturer, as he navigates the dangerous world of drug trafficking. Faced with a terminal cancer diagnosis, Walter partners with former student Jesse Pinkman to secure his family’s future while battling moral dilemmas and enemies both internal and external.
        </p>
      </div> */}
      </div> 
  );
}

export default Card;
