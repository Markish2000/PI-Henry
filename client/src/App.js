import style from './app.module.css';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import NavBarContainer from './components/navBar/NavBarContainer';
import GamesContainer from './components/games/GamesContainer';
import ItemDetail from './components/itemDetail/ItemDetail';
import CreateGameContainer from './components/createGame/CreateGameContainer';
import WelcomeContainer from './components/welcome/WelcomeContainer';
import FilterSearchContainer from './components/filterSearch/FilterSearchContainer';
import { useSelector } from 'react-redux';
import HeaderContainer from './components/header/HeaderContainer';
import Error404 from './components/error404/Error404';
import SpinnerContainer from './components/spinner/SpinnerContainer';
import { useState } from 'react';

function App() {
  const modalBoolean = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {modalBoolean.modal ? (
        <WelcomeContainer setLoading={setLoading} />
      ) : loading ? (
        <SpinnerContainer />
      ) : (
        <div className={style.videoGamesContainer__div}>
          <div className={style.videoGamesContainer__navBarContainer}>
            <NavBarContainer />
          </div>
          <div className={style.videoGamesContainer__homeContainer}>
            <HeaderContainer />
            <Switch>
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
              <Route
                exact
                path='/search'
                render={() => <FilterSearchContainer />}
              />
              <Route exact path='*' render={() => <Error404 />} />
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
