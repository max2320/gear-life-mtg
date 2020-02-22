import {
  StandardSvg,
  TwoHeadGiantSvg,
  EmperorSvg
} from '../../assets/formats';

export const matchTypes = {
  default: {
    id: 'default',
    name: "Free-for-all",
    life: 20,
    poison: 10,
    teams: 2,
    teamMembers: 1,
    allowCustom: true,
    leaders: [],
    Symbol: StandardSvg
  },
  twoHeadedGiant: {
    id: 'twoHeadedGiant',
    name: "Two-Headed Giant",
    life: 30,
    poison: 15,
    teams: 2,
    teamMembers: 2,
    allowCustom: false,
    leaders: [],
    Symbol: TwoHeadGiantSvg
  },
  emperor: {
    id: 'emperor',
    name: "Emperor",
    life: 20,
    poison: 10,
    teams: 6,
    teamMembers: 1,
    allowCustom: false,
    leaders: [1, 4],
    Symbol: EmperorSvg
  }
};


export default {
  matchTypes
};
