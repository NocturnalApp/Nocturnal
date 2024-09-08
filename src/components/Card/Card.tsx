import br2 from './../../assets/br2.jpg'; // Import the image
import './Card.module.css';
import { FaPlay } from 'react-icons/fa'; // Import the play icon


const Card = () => {
    return (
      <div className="relative h-screen">
        <div className="absolute top-[35%] left-1/3 transform -translate-x-1/2 -translate-y-[25%] w-[400px] h-[600px] md:w-[18vw] md:h-[50vh] max-w-[400px] max-h-[650px] 
                        bg-cover bg-center rounded-[100px] drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"

             style={{ backgroundImage: `url(${br2})` }}>
        <div className="absolute inset-0 flex items-center justify-center">
        <FaPlay 
            className="text-white text-7xl rounded-[50px]cursor-pointer opacity-80 hover:opacity-100 drop-shadow-lg transition duration-300 ease-in-out"/>
          </div>
        </div>
      </div>
    );
  }
export default Card;
