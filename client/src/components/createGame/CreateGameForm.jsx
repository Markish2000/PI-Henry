import axios from 'axios';
import React, { useState } from 'react';
import GamesCard from '../games/GamesCard';
import style from './style/CreateGameForm.module.css';
import { createGameByPost } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const CreateGameForm = () => {
  const infoGame = useSelector((state) => state);
  const dispatch = useDispatch();

  const [createGame, setCreateGame] = useState({
    name: '',
    genres: '',
    platform: '',
    rating: '',
    image: '',
    released: '',
    description: '',
  });

  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    setCreateGame({ ...createGame, name: nameValue });
  };

  const genresChangeHandler = (event) => {
    const genresCheck = event.target.checked;
    const genresValue = event.target.name;
    if (genresCheck) {
      setCreateGame({
        ...createGame,
        genres: [...createGame.genres, genresValue],
      });
    } else {
      setCreateGame({
        ...createGame,
        genres: createGame.genres.filter((element) => element !== genresValue),
      });
    }
  };

  const platformsChangeHandler = (event) => {
    const platformCheck = event.target.checked;
    const platformValue = event.target.name;
    console.log(createGame.platform);
    if (platformCheck) {
      setCreateGame({
        ...createGame,
        platform: [...createGame.platform, platformValue],
      });
    } else {
      setCreateGame({
        ...createGame,
        platform: createGame.platform.filter(
          (element) => element !== platformValue
        ),
      });
    }
  };

  const ratingChangeHandler = (event) => {
    const ratingValue = event.target.value;
    setCreateGame({ ...createGame, rating: ratingValue });
  };

  const imageChangeHandler = (event) => {
    const imageValue = event.target.value;
    setCreateGame({ ...createGame, image: imageValue });
  };

  const descriptionChangeHandler = (event) => {
    const descriptionValue = event.target.value;
    setCreateGame({ ...createGame, description: descriptionValue });
  };

  const dateChangeHandler = (event) => {
    const dateValue = event.target.value;
    setCreateGame({ ...createGame, released: dateValue });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        url: 'http://localhost:3001/games',
        method: 'POST',
        data: createGame,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  let toDay = new Date();
  let day = String(toDay.getDate()).padStart(2, '0');
  let mount = String(toDay.getMonth() + 1).padStart(2, '0');
  let year = toDay.getFullYear();

  toDay = year + '-' + mount + '-' + day;

  return (
    <div className={style.createGameForm__div}>
      <div className={style.createGameForm__div_h1}>
        <h1>create Game</h1>
      </div>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className={style.createGameForm__div_input}>
          <input
            className={style.createGameForm__div_input_input}
            type='text'
            placeholder="enter videogame's name"
            onChange={(event) => nameChangeHandler(event)}
          />
          <input
            className={style.createGameForm__div_input_input}
            type='text'
            placeholder="enter description's name"
            onChange={(event) => descriptionChangeHandler(event)}
          />
          <input
            className={style.createGameForm__div_input_input}
            type='text'
            placeholder="enter link's game"
            onChange={(event) => imageChangeHandler(event)}
          />
          <input
            className={style.createGameForm__div_input_input}
            type='number'
            placeholder="enter rating's game"
            min='0'
            max='5'
            onChange={(event) => ratingChangeHandler(event)}
          />
          <input
            className={style.createGameForm__input_date}
            onChange={(event) => dateChangeHandler(event)}
            type='date'
            max={toDay}
          />
        </div>
        <div className={style.createGameForm__div_genresAndPlatforms}>
          <div>
            <div>
              <h3 className={style.createGameForm__div_genres_h3}>genres</h3>
            </div>
            <div className={style.createGameForm__div_genres}>
              {infoGame.allGenres.map((element, index) => {
                return (
                  <div
                    className={style.createGameForm__div_genres_map}
                    key={index}
                  >
                    <div>
                      <label>{element.name}</label>
                    </div>
                    <div
                      className={style.createGameForm__div_genres_map_div_input}
                    >
                      <input
                        onChange={(event) => genresChangeHandler(event)}
                        type='checkbox'
                        name={element.name}
                        id={element.id}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr className={style.createGameForm_hr} />
          <div className={style.createGameForm__div_genresAndPlatforms}>
            <div>
              <h3 className={style.createGameForm__div_genres_h3}>platforms</h3>
            </div>
            <div className={style.createGameForm__div_genres}>
              {infoGame.allPlatforms.map((element, index) => {
                return (
                  <div
                    className={style.createGameForm__div_genres_map}
                    key={index}
                  >
                    <div>
                      <label>{element.name}</label>
                    </div>
                    <div
                      className={style.createGameForm__div_genres_map_div_input}
                    >
                      <input
                        onChange={(event) => platformsChangeHandler(event)}
                        type='checkbox'
                        name={element.name}
                        id={element.id}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={style.createGameForm_div_buttonSubmit}>
          <button className={style.createGameForm_buttonSubmit} type='submit'>
            create
          </button>
        </div>
      </form>
      <div className={style.createGameForm_gamesCard}>
        <GamesCard
          name={createGame.name}
          rating={createGame.rating}
          genres={createGame.genres}
          image={createGame.image}
        />
      </div>
    </div>
  );
};
export default CreateGameForm;
