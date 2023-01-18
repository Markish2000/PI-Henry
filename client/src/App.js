import style from './app.module.css';
import { Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import NavBarContainer from './components/navBar/NavBarContainer';
import GamesContainer from './components/games/GamesContainer';
import ItemDetail from './components/itemDetail/ItemDetail';
import CreateGameContainer from './components/createGame/CreateGameContainer';
import WelcomeContainer from './components/welcome/WelcomeContainer';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      {open && <WelcomeContainer />}
      <div className={style.videoGamesContainer__div}>
        <div className={style.videoGamesContainer__navBarContainer}>
          {!open && <NavBarContainer />}
        </div>
        <div className={style.videoGamesContainer__homeContainer}>
          {!open && <Route exact path='/' render={() => <HomeContainer />} />}
          <Route exact path='/games' render={() => <GamesContainer />} />
          <Route
            path='/games/:id'
            render={({ match }) => <ItemDetail id={match.params.id} />}
          />
          <Route
            exact
            path='/createGame'
            render={() => <CreateGameContainer />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
