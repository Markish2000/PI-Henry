import React, { useState } from 'react';
import GamesCard from '../games/GamesCard';

const CreateGameForm = () => {
  const [createGame, setCreateGame] = useState({
    name: '',
    genres: '',
    platform: '',
    rating: '',
    image: '',
    description: '',
  });

  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    setCreateGame({ ...createGame, name: nameValue });
  };

  const ratingChangeHandler = (event) => {
    const ratingValue = event.target.value;
    setCreateGame({ ...createGame, rating: ratingValue });
  };

  const imageChangeHandler = (event) => {
    const emailValue = event.target.value;
    setCreateGame({ ...createGame, image: emailValue });
  };

  const descriptionChangeHandler = (event) => {
    const descriptionValue = event.target.value;
    setCreateGame({ ...createGame, description: descriptionValue });
  };

  let toDay = new Date();
  let day = String(toDay.getDate()).padStart(2, '0');
  let mount = String(toDay.getMonth() + 1).padStart(2, '0');
  let year = toDay.getFullYear();

  toDay = year + '-' + mount + '-' + day;

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder="Enter the videogame's name"
          onChange={(event) => nameChangeHandler(event)}
        />
        <input
          type='text'
          placeholder="Enter the description's name"
          onChange={(event) => descriptionChangeHandler(event)}
        />
        <label>Genres</label>
        <input type='checkbox' />
        <input
          type='text'
          placeholder="Enter the link's game"
          onChange={(event) => imageChangeHandler(event)}
        />
        <input
          type='number'
          max='5'
          onChange={(event) => ratingChangeHandler(event)}
        />
        <input type='date' max={toDay} />
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
