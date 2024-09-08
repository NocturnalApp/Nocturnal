import styles from './BG.module.css';
import Card from '../Card/Card.tsx';

const BG = () => {
    return (
        <div className={`${styles.backgroundimage} relative`}>
        <Card />
        </div>
    );
}
export default BG;
