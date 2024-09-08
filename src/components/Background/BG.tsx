import styles from './BG.module.css';
import Card from '../Card/Card.tsx';
import { useState } from 'react';

const BG = () => {
  const [backdropUrl, setBackdropUrl] = useState<string>('');

  return (
    <div className={`${styles.backgroundimage} relative`} style={{ backgroundImage: `url(${backdropUrl})` }}>
      <Card setBackdropUrl={setBackdropUrl} />
    </div>
  );
}

export default BG;
