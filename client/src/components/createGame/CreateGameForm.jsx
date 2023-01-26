import React, { useEffect, useState } from "react";
import GamesCard from "../games/GamesCard";
import style from "./style/CreateGameForm.module.css";
import {
  getAllGenres,
  getAllPlatforms,
  createGameByPost,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CreateGameForm = () => {
  const infoGame = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllPlatforms());
  }, [dispatch]);

  const [createGame, setCreateGame] = useState({
    name: "",
    genres: "",
    platform: "",
    rating: "",
    image: "",
    released: "",
    description: "",
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

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(createGame);
    dispatch(createGameByPost(createGame));
  };

  let toDay = new Date();
  let day = String(toDay.getDate()).padStart(2, "0");
  let mount = String(toDay.getMonth() + 1).padStart(2, "0");
  let year = toDay.getFullYear();

  toDay = year + "-" + mount + "-" + day;

  return (
    <div className={style.createGameForm__div}>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className={style.createGameForm__div_input}>
          <input
            className={style.createGameForm__div_input_input}
            type='text'
            placeholder="Enter the videogame's name"
            onChange={(event) => nameChangeHandler(event)}
          />
          <input
            className={style.createGameForm__div_input_input}
            type='text'
            placeholder="Enter the description's name"
            onChange={(event) => descriptionChangeHandler(event)}
          />
          <input
            className={style.createGameForm__div_input_input}
            type='text'
            placeholder="Enter the link's game"
            onChange={(event) => imageChangeHandler(event)}
          />
          <input
            className={style.createGameForm__div_input_input}
            type='number'
            min='0'
            max='5'
            onChange={(event) => ratingChangeHandler(event)}
          />
          <input
            onChange={(event) => dateChangeHandler(event)}
            type='date'
            max={toDay}
          />
        </div>
        <div className={style.createGameForm__div_genresAndPlatforms}>
          <div>
            <h3>Genres</h3>
            {infoGame.allGenres.map((element, index) => {
              return (
                <div key={index}>
                  <label>{element.name}</label>
                  <input
                    onChange={(event) => genresChangeHandler(event)}
                    type='checkbox'
                    name={element.name}
                    id={element.id}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <h3>Platforms</h3>
            {infoGame.allPlatforms.map((element, index) => {
              return (
                <div key={index}>
                  <label className={style.createGameForm__div_platforms_label}>
                    {element.name}
                  </label>
                  <input
                    onChange={(event) => platformsChangeHandler(event)}
                    type='checkbox'
                    name={element.name}
                    id={element.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <button type='submit'>CREATE</button>
      </form>
      <GamesCard
        name={createGame.name}
        rating={createGame.rating}
        genres={createGame.genres}
        image={createGame.image}
      />
    </div>
  );
};
export default CreateGameForm;
