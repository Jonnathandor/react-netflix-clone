import './App.css';
import Row from './Row';
import Banner from './Banner'
import requests from './requests'
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="TOP RATED" fetchURL={requests.fetchTrending} isLargeRow />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
