import BG from './components/Background/BG';
import Navbar from './components/Navbar/Navbar';
import MovieBrowsingUI from './Pages/Catalogs'
import "./index.css";

const App = () => {
  return (
    <>
    <div>
      <Navbar />
      <BG />   
      <MovieBrowsingUI />   
    </div>
    </>
  );
}

export default App;
