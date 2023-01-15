import style from './app.module.css';
import { Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import NavBarContainer from './components/navBar/NavBarContainer';
import GamesContainer from './components/games/GamesContainer';

function App() {
  return (
    <div className={style.videoGamesContainer__div}>
      <div className={style.videoGamesContainer__navBarContainer}>
        <NavBarContainer />
      </div>
      <Route exact path='/'>
        <div className={style.videoGamesContainer__homeContainer}>
          <HomeContainer />
        </div>
      </Route>
      <Route exact path='/games'>
        <div className={style.videoGamesContainer__homeContainer}>
          <GamesContainer />
        </div>
      </Route>
    </div>
  );
}

export default App;
