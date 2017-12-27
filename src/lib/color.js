import blackImg from '../assets/black.svg';
import blueImg from '../assets/blue.svg';
import greenImg from '../assets/green.svg';
import incolorImg from '../assets/incolor.svg';
import redImg from '../assets/red.svg';
import whiteImg from '../assets/white.svg';

export const colorDescription = {
  'white': 'Peace, law, structured, selflessness, equality',
  'blue': 'Knowledge, deceit, cautious, deliberate, perfecting',
  'black': 'Power, self-interest, death, sacrifice, uninhibited',
  'red': 'Freedom, emotion, active, impulsive, destructive',
  'green': 'Nature, wildlife, connected, spiritual, tradition'
}

export const colorList = {
  // green: '#9bd3ae',
  // blue: '#aae0fa',
  // black: '#cbc2bf',
  // white: '#fffbd5',
  // red: '#f9aa8f'
  green:	'#50A36D',
  blue:	'#3D7FB9',
  black:	'#1C2627',
  red: '#AC4546',
  white: '#FFF6A6',

}

export const colorImage = {
  green: greenImg,
  blue: blueImg,
  black: blackImg,
  white: whiteImg,
  red: redImg
}


export const colorBackground = (colors)=>{
  if(colors.length > 1){
    const colorText = colors.map((color)=>{
      return colorList[color];
    }).join(',');

    return `linear-gradient(-45deg, ${colorText})`;
  }else{
    return colorList[colors[0]];
  }
}
