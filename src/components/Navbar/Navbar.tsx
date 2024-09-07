import styles from './Navbar.module.css'
import nocturnal_txt from './../../assets/noctural_txt.png'
import settings_icon from './../../assets/settings_icon.png'
import hamburger_menu from './../../assets/hamburger-menu.png'
import search_icon from './../../assets/search_icon.png'

const Navbar = () => {
    return <nav className={styles.Navbar}>
    <a href=""><img className={styles.logo} src={nocturnal_txt} alt="Nocturnal" /></a>
    <ul>
        <li>
            <a href=""><img className={styles.search} src={search_icon} alt="menu" /></a>
        </li>       
        <li>
            <a href=""><img className={styles.hamburger} src={hamburger_menu} alt="menu" /></a>
        </li>
        <li>
            <a href=""><img className={styles.settings} src={settings_icon} alt="settings" /></a>
        </li>
    </ul>


    </nav>
}
export default Navbar