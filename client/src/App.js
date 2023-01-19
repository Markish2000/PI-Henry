import style from './app.module.css';
import { Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import NavBarContainer from './components/navBar/NavBarContainer';
import GamesContainer from './components/games/GamesContainer';
import ItemDetail from './components/itemDetail/ItemDetail';
import CreateGameContainer from './components/createGame/CreateGameContainer';
import WelcomeContainer from './components/welcome/WelcomeContainer';
import { useSelector } from 'react-redux';

function App() {
  const modalBoolean = useSelector((state) => state);

  return (
    <div>
      {modalBoolean.modal ? (
        <WelcomeContainer />
      ) : (
        <div className={style.videoGamesContainer__div}>
          <div className={style.videoGamesContainer__navBarContainer}>
            <NavBarContainer />
          </div>
          <div className={style.videoGamesContainer__homeContainer}>
            <Route exact path='/' render={() => <HomeContainer />} />
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
      )}
    </div>
  );
}

export default App;
