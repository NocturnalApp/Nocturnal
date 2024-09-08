import styles from './Navbar.module.css';
import nocturnal_txt from './../../assets/noctural_txt.png';
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <a href="">
        <img className="h-8" src={nocturnal_txt} alt="Nocturnal" />
      </a>
      <ul className="flex space-x-4">
        <li>
          <a href="" className={styles.icon}>
            <CiSearch size={25} />
          </a>
        </li>
        <li>
          <a href="" className={styles.icon}>
            <CiMenuBurger size={25} />
          </a>
        </li>
        <li>
          <a href="" className={styles.icon}>
            <GiSettingsKnobs size={25} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
