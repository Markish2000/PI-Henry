const platformsChangeHandler = (event) => {
  const platformCheck = event.target.checked;
  const platformValue = event.target.name;
  const platformArray = [];
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
