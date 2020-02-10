import {
  BlackImg,
  BlueImg,
  GreenImg,
  ColorlessImg,
  RedImg,
  WhiteImg
} from '../../assets/symbols';

export const colors = {
  black:{
    description: "Power,\n self-interest,\n death,\n sacrifice,\n uninhibited",
    color:	'#1c2627',
    Symbol: BlackImg
  },
  blue:{
    description: 'Knowledge, deceit, cautious, deliberate, perfecting',
    color:	'#3d7fb9',
    Symbol: BlueImg
  },
  colorless:{
    description: '',
    color: '#b3a195',
    Symbol: ColorlessImg
  },
  green:{
    description: 'Nature, wildlife, connected, spiritual, tradition',
    color:	'#50a36d',
    Symbol: GreenImg
  },
  red:{
    description: 'Freedom, emotion, active, impulsive, destructive',
    color: '#ac4546',
    Symbol: RedImg
  },
  white:{
    description: 'Peace, law, structured, selflessness, equality',
    color: '#fff6a6',
    Symbol: WhiteImg
  }
};

export const order = ['white', 'blue', 'black', 'red', 'green', 'colorless']

export default {
  order,
  colors
}
