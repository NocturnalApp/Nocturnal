import styles from './Navbar.module.css'
import nocturnal_txt from './../../assets/noctural_txt.png'
/*import settings_icon from './../../assets/settings_icon.png'
import hamburger_menu from './../../assets/hamburger-menu.png'
import search_icon from './../../assets/search_icon.png' */
import { CiMenuBurger } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
    return <nav className={styles.Navbar}>
    <a href=""><img className={styles.logo} src={nocturnal_txt} alt="Nocturnal" /></a>

    <ul>
        <li>
            <a href=""><CiSearch size={25}/></a>
        </li>  

        <li>
            <a href=""><CiMenuBurger size={23}/></a>
        </li>
        <li>
            <a href=""> <CiSettings size={25}/> </a>
        </li>
    </ul>
    </nav>
}
export default Navbar