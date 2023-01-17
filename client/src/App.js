import style from './app.module.css';
import { Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import NavBarContainer from './components/navBar/NavBarContainer';
import GamesContainer from './components/games/GamesContainer';
import ItemDetail from './components/itemDetail/ItemDetail';

// import WelcomeContainer from './components/welcome/WelcomeContainer';

function App() {
  return (
    // <div>
    //   <WelcomeContainer />
    // </div>
    <div className={style.videoGamesContainer__div}>
      <div className={style.videoGamesContainer__navBarContainer}>
        <NavBarContainer />
      </div>
      <div className={style.videoGamesContainer__homeContainer}>
        <Route exact path='/'>
          <HomeContainer />
        </Route>
        <Route exact path='/games'>
          <GamesContainer />
        </Route>
        <Route path='/games/:id'>
          <ItemDetail />
        </Route>
      </div>
    </div>
  );
}

export default App;
