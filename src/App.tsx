import BG from './components/Background/BG';
import Navbar from './components/Navbar/Navbar';
import Row from './Pages/Row';
import "./index.css";
import requests from './request_api';

const App = () => {
  return (
    <>
    <div>
      <Navbar />
      <BG />
      <Row rowID='1' title='New Releases' fetchURL={requests.requestUpcoming}/>
      <Row rowID='2' title='Trending Movies' fetchURL={requests.requestTrending}/>
      <Row rowID='3' title='Highest Rated' fetchURL={requests.requestTopRated}/>
      <Row rowID='4' title='TV Shows' fetchURL={requests.requestTVShows}/>
      <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>
      <Row rowID='6' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID='7' title='Animes' fetchURL={requests.requestAnimes}/>

    </div>
    </>
  );
}
export default App;
