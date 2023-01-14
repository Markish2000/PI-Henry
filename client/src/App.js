import HomeContainer from './components/home/HomeContainer';
import NavBarContainer from './components/navBar/NavBarContainer';
import style from './app.module.css';

function App() {
  return (
    <div className={style.videoGamesContainer__div}>
      <div className={style.videoGamesContainer__navBarContainer}>
        <NavBarContainer />
      </div>
      <div className={style.videoGamesContainer__homeContainer}>
        <HomeContainer />
      </div>
    </div>
  );
}

export default App;
