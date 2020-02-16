import {
  DefaultImg,
  TwoHeadGiantImg,
  EmperorImg
} from '../../assets/formats';


const matchTypes = {
  default: {
    id: 'default',
    name: "Free-for-all",
    life: 20,
    poison: 10,
    teams: 2,
    teamMembers: 1,
    allowCustom: true,
    Icon: DefaultImg
  },
  twoHeadedGiant: {
    id: 'twoHeadedGiant',
    name: "Two-Headed Giant",
    life: 30,
    poison: 15,
    teams: 2,
    teamMembers: 2,
    allowCustom: false,
    Icon: TwoHeadGiantImg
  },
  emperor: {
    id: 'emperor',
    name: "Emperor",
    life: 20,
    poison: 10,
    teams: 2,
    teamMembers: 3,
    allowCustom: false,
    Icon: EmperorImg
  }
};

export {
  matchTypes
};
