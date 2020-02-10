const matchTypes = {
  standard: {
    name: "Standard",
    life: 20,
    poison: 10,
    teams: 2,
    teamMembers: 1,
    allowCustom: true
  },
  twoHeadedGiant: {
    name: "Two-Headed Giant",
    life: 30,
    poison: 15,
    teams: 2,
    teamMembers: 2,
    allowCustom: false
  },
  emperor: {
    name: "Emperor",
    life: 20,
    poison: 10,
    teams: 2,
    teamMembers: 3,
    allowCustom: false
  }
};

export {
  matchTypes
};
