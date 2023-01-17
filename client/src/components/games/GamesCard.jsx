const GamesCard = ({ id, name, image, genres, rating, platforms }) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>{genres}</h3>
      <h3>{rating}</h3>
      <h3>{platforms}</h3>
    </div>
  );
};
export default GamesCard;
