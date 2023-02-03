import axios from 'axios';
import React, { useState } from 'react';
import GamesCard from '../games/GamesCard';
import style from './style/CreateGameForm.module.css';
import { createGameByPost } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CreateGameForm = () => {
  const infoGame = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const [createGame, setCreateGame] = useState({
    name: '',
    description: '',
    image: '',
    rating: '',
    released: '',
    genres: [],
    platform: [],
  });

  const [createGameError, setCreateGameError] = useState({
    name: '',
    description: '',
    image: '',
    rating: '',
    released: 'Invalid released',
    genres: '',
    platform: '',
  });

  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    if (nameValue === '') {
      setCreateGameError({ ...createGameError, name: '' });
    } else if (nameValue.length < 4) {
      setCreateGameError({ ...createGameError, name: 'Invalid name' });
    } else {
      setCreateGameError({ ...createGameError, name: null });
    }
    setCreateGame({ ...createGame, name: nameValue });
  };

  const descriptionChangeHandler = (event) => {
    const descriptionValue = event.target.value;
    if (descriptionValue === '') {
      setCreateGameError({ ...createGameError, description: '' });
    } else if (descriptionValue.length < 4) {
      setCreateGameError({
        ...createGameError,
        description: 'Invalid description',
      });
    } else {
      setCreateGameError({ ...createGameError, description: null });
    }
    setCreateGame({ ...createGame, description: descriptionValue });
  };

  const imageChangeHandler = (event) => {
    const imageValue = event.target.value;
    setCreateGame({ ...createGame, image: imageValue });
  };

  const ratingChangeHandler = (event) => {
    const ratingValue = event.target.value;
    if (ratingValue < 0.25 || ratingValue > 5) {
      setCreateGameError({ ...createGameError, rating: 'Invalid rating' });
    } else {
      setCreateGameError({ ...createGameError, rating: null });
    }
    setCreateGame({ ...createGame, rating: ratingValue });
  };
  const getDateActually = () => {
    let toDay = new Date();
    let day = String(toDay.getDate()).padStart(2, '0');
    let mount = String(toDay.getMonth() + 1).padStart(2, '0');
    let year = toDay.getFullYear();
    toDay = `${year}-${mount}-${day}`;
    return toDay;
  };

  const getDateActuallyOrder = () => {
    let toDay = new Date();
    let day = String(toDay.getDate()).padStart(2, '0');
    let mount = String(toDay.getMonth() + 1).padStart(2, '0');
    let year = toDay.getFullYear();
    toDay = `${day}-${mount}-${year}`;
    return toDay;
  };

  const dateChangeHandler = (event) => {
    const dateValue = event.target.value;
    if (dateValue) {
      setCreateGameError({ ...createGameError, released: null });
    }
    setCreateGame({ ...createGame, released: dateValue });
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
    if (createGame.genres === '') {
      setCreateGameError({ ...createGameError, genres: '' });
    } else if (createGame.genres.length < 4) {
      setCreateGameError({
        ...createGameError,
        genres: 'Invalid genres',
      });
    } else {
      setCreateGameError({ ...createGameError, genres: null });
    }
  };

  const platformsChangeHandler = (event) => {
    const platformCheck = event.target.checked;
    const platformValue = event.target.name;
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
    if (createGame.platform === '') {
      setCreateGameError({ ...createGameError, platform: '' });
    } else if (createGame.platform.length < 4) {
      setCreateGameError({
        ...createGameError,
        platform: 'Invalid platform',
      });
    } else {
      setCreateGameError({ ...createGameError, platform: null });
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        url: 'http://localhost:3001/games',
        method: 'POST',
        data: createGame,
      });
    } catch (error) {
      console.log(error);
    }
    alert('videogame created');
    history.push('/');
    history.go(0);
  };

  return (
    <div className={style.createGameForm__div}>
      <div className={style.createGameForm__div_h1}>
        <h1>create Game</h1>
      </div>
      <div className={style.createGameForm__form__prev}>
        <form
          className={style.createGameForm__form}
          onSubmit={(event) => submitHandler(event)}
        >
          <div className={style.createGameForm__form__input}>
            <div className={style.createGameForm__div__flex}>
              <div className={style.createGameForm__div__flex_label_input}>
                <label>enter videogame's name</label>
                <input
                  className={style.createGameForm__div_input_input}
                  type='text'
                  placeholder="enter videogame's name"
                  onChange={(event) => nameChangeHandler(event)}
                />
              </div>
              <div className={style.createGameForm__div_input_p_wd}>
                {createGameError.name === 'Invalid name' ? (
                  <p
                    className={style.createGameForm__div_input_p_error}
                  >{`you are missing ${
                    4 - createGame.name.length
                  } letters to make your name's videogame correct`}</p>
                ) : createGameError.name === null ? (
                  <p className={style.createGameForm__div_input_p_validate}>
                    name's videogame correct
                  </p>
                ) : (
                  <p>the name's videogame must have more than 4 letters</p>
                )}
              </div>
            </div>
            <div className={style.createGameForm__div__flex}>
              <div className={style.createGameForm__div__flex_label_input}>
                <label>enter description's videogame</label>
                <input
                  className={style.createGameForm__div_input_input}
                  type='text'
                  placeholder="enter description's videogame"
                  onChange={(event) => descriptionChangeHandler(event)}
                />
              </div>
              <div className={style.createGameForm__div_input_p_wd}>
                {createGameError.description === 'Invalid description' ? (
                  <p
                    className={style.createGameForm__div_input_p_error}
                  >{`you are missing ${
                    4 - createGame.description.length
                  } letters to make your description's videogame correct`}</p>
                ) : createGameError.description === null ? (
                  <p className={style.createGameForm__div_input_p_validate}>
                    description's videogame correct
                  </p>
                ) : (
                  <p>
                    the description's videogame must have more than 4 letters
                  </p>
                )}
              </div>
            </div>
            <div className={style.createGameForm__div__flex}>
              <div className={style.createGameForm__div__flex_label_input}>
                <label>enter image's videogame</label>
                <input
                  className={style.createGameForm__div_input_input}
                  type='text'
                  placeholder="enter image's videogame"
                  onChange={(event) => imageChangeHandler(event)}
                />
              </div>
              <div className={style.createGameForm__div_input_p_wd}>
                {createGameError.rating === 'Invalid rating' ? (
                  <p className={style.createGameForm__div_input_p_error}>
                    the rating should be between 0,25 and 5
                  </p>
                ) : createGameError.rating === null ? (
                  <p className={style.createGameForm__div_input_p_validate}>
                    rating's videogame correct
                  </p>
                ) : (
                  <p>the rating should be between 0,25 and 5</p>
                )}
              </div>
            </div>
            <div className={style.createGameForm__div__flex}>
              <div className={style.createGameForm__div__flex_label_input}>
                <label>enter rating's videogame</label>
                <input
                  className={style.createGameForm__div_input_input}
                  type='number'
                  placeholder="enter rating's videogame"
                  min='0.25'
                  max='5'
                  step='0.25'
                  onChange={(event) => ratingChangeHandler(event)}
                />
              </div>
              <div className={style.createGameForm__div_input_p_wd}>
                {createGameError.rating === 'Invalid rating' ? (
                  <p className={style.createGameForm__div_input_p_error}>
                    the rating should be between 0,25 and 5
                  </p>
                ) : createGameError.rating === null ? (
                  <p className={style.createGameForm__div_input_p_validate}>
                    rating's videogame correct
                  </p>
                ) : (
                  <p>the rating should be between 0,25 and 5</p>
                )}
              </div>
            </div>
            <div className={style.createGameForm__div__flex}>
              <div className={style.createGameForm__div__flex_label_input}>
                <label>enter released's videogame</label>
                <input
                  className={style.createGameForm__input_date}
                  onChange={(event) => dateChangeHandler(event)}
                  type='date'
                  max={getDateActually()}
                />
              </div>
              <div className={style.createGameForm__div_input_p_wd}>
                {createGameError.rating === 'Invalid rating' ? (
                  <p className={style.createGameForm__div_input_p_error}>
                    {`the released game must be maximum: ${getDateActuallyOrder()}`}
                  </p>
                ) : createGameError.rating === null ? (
                  <p className={style.createGameForm__div_input_p_validate}>
                    released's videogame correct
                  </p>
                ) : (
                  <p>{`the released game must be maximum: ${getDateActuallyOrder()}`}</p>
                )}
              </div>
            </div>
          </div>
          <div>
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
                        className={
                          style.createGameForm__div_genres_map_div_input
                        }
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
            <div>
              <div>
                <h3 className={style.createGameForm__div_genres_h3}>
                  platforms
                </h3>
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
                        className={
                          style.createGameForm__div_genres_map_div_input
                        }
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
            <button
              className={
                (createGameError.name !== null,
                createGameError.description !== null,
                createGameError.image !== null,
                createGameError.rating !== null,
                createGameError.released !== null,
                createGameError.genres !== null,
                createGameError.platform !== null)
                  ? style.createGameForm_buttonSubmit__error
                  : style.createGameForm_buttonSubmit
              }
              type='submit'
              disabled={
                (createGameError.name !== null,
                createGameError.description !== null,
                createGameError.image !== null,
                createGameError.rating !== null,
                createGameError.released !== null,
                createGameError.genres !== null,
                createGameError.platform !== null)
              }
            >
              create
            </button>
          </div>
        </form>
        <div className={style.createGameForm_gamesCard}>
          <GamesCard
            name={createGame.name}
            rating={createGame.rating}
            genres={createGame.genres.join(', ')}
            image={createGame.image}
          />
        </div>
      </div>
    </div>
  );
};
export default CreateGameForm;
