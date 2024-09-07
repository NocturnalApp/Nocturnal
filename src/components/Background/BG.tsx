import br1 from './../../assets/br1.jpg'; // Import the image
import styles from './BG.module.css'
import Card from '../Card/Card.tsx';

const BG = () => {
    return (
        <div className={styles.backgroundimage} style={{ backgroundImage: `url(${br1})` }}> 
        <Card />
        </div>
    );
}
export default BG;
