import br2 from './../../assets/br2.jpg'; // Import the image
import styles from './Card.module.css';

function Card() {
  return (<img className = {styles.cardbb} src={br2} alt="Breaking Bad Card Component" />);
}
export default Card;
