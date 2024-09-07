import br1 from './assets/br1.jpg'; // Import the image
import Card from './Card.tsx';

function BG() {
    return (
        <div className="bb-background-image" style={{ backgroundImage: `url(${br1})` }}> 
        <Card />
        </div>
    );
}
export default BG;
