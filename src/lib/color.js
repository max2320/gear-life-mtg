import blackImg from '../assets/black.svg';
import blueImg from '../assets/blue.svg';
import greenImg from '../assets/green.svg';
import colorlessImg from '../assets/colorless.svg';
import redImg from '../assets/red.svg';
import whiteImg from '../assets/white.svg';

export const colorDescription = {
  white: 'Peace, law, structured, selflessness, equality',
  blue: 'Knowledge, deceit, cautious, deliberate, perfecting',
  black: 'Power, self-interest, death, sacrifice, uninhibited',
  red: 'Freedom, emotion, active, impulsive, destructive',
  green: 'Nature, wildlife, connected, spiritual, tradition',
  colorless: ''
}

export const colorList = {
  green:	'#50a36d',
  blue:	'#3d7fb9',
  black:	'#1c2627',
  red: '#ac4546',
  white: '#fff6a6',
  colorless: '#b3a195'
}

export const colorImage = {
  green: greenImg,
  blue: blueImg,
  black: blackImg,
  white: whiteImg,
  red: redImg,
  colorless: colorlessImg
};

export const colorOrder = ['white','blue','black','red','green','colorless'];


export const colorBackground = (colors)=>{
  if(colors.length > 0){
    if(colors.length > 1){
      const colorText = colorOrder.filter((color)=>(colors.includes(color))).map((color)=>{
        return colorList[color];
      }).join(',');

      return `linear-gradient(-45deg, ${colorText})`;
    }else{
      return colorList[colors[0]];
    }
  }else{
    return 'rgba(255,255,255,0.4)';
  }
}
