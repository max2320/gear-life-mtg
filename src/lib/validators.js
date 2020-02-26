const validators = {
  colors: (colors) => {
    return colors.length > 0;
  },
  name: (name) => {
    return name.trim() !== "";
  },
  teamsSizes: (teams, players) => {
    const teamSizes = teams.map(({ id }) => {
      return players.filter(({ teamId }) => teamId === id).length > 0;
    });

    return new Set(teamSizes).size === 1
  },
  even: (list) =>{
    return !!list && list.length % 2 === 0;
  }
};

export {
  validators
};
