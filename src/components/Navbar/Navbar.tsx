import nocturnal_txt from './../../assets/noctural_txt.png';
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between sticky top-0 p-2 bg-gradient-to-r from-[#070707] to-[#6D6D6D] bg-opacity-10 shadow-md backdrop-blur-md z-50"
      style={{
        background: 'linear-gradient(to right, #070707, rgba(109, 109, 109, 0.15))',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 4px 12px rgba(7, 7, 7, 0.5)',
        backdropFilter: 'blur(5px)',
        height: '48px', // Adjust height as needed
      }}
    >
      <a href="">
        <img
          className="h-6 transition-transform transform hover:scale-105"
          src={nocturnal_txt}
          alt="Nocturnal"
        />
      </a>
      <ul className="flex space-x-4 items-center">
        <li>
          <a
          href=""
          className="text-white transition-colors duration-300 hover:text-gray-400 "
          >
          <CiSearch
            size={20}
            style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
            className="text-white transition-colors duration-300 hover:text-gray-400 "
          />
          </a>
          
        </li>
        <li>
          <a
            href=""
            className="text-white transition-colors duration-300 hover:text-gray-400"
          >
            <CiMenuBurger 
            size={20} 
            style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
            />
          </a>
        </li>
        <li>
          <a
            href=""
            className="text-white transition-colors duration-300 hover:text-gray-400"
          >
            <GiSettingsKnobs 
            size={20} 
            style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

