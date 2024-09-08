import styles from './BG.module.css';
import Card from '../Card/Card.tsx';
import { useState } from 'react';

const BG = () => {
  const [backdropUrl, setBackdropUrl] = useState<string>('');
  const [blurAmount] = useState<number>(4); // Default blur amount

  return (
    <div className={styles.backgroundContainer}>
      <div 
        className={styles.backgroundLayer} 
        style={{ backgroundImage: `url(${backdropUrl})`, filter: `blur(${blurAmount}px)` }}
      />
      <div className={styles.contentLayer}>
        <Card setBackdropUrl={setBackdropUrl} />
      </div>
    </div>
  );
}
export default BG;
