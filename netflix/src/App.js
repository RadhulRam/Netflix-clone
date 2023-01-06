import React from 'react' 
import './App.css'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {orginals,actions,trending,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './Components/urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={trending} title='Trending Now'  />
      <RowPost url={orginals} title='Netflix Orginals' isSmall />     
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall />
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall />
      <RowPost url={RomanceMovies} title='Romantic Movies' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
