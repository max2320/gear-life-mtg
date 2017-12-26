import React, { Component } from 'react';
import './style.css';
import Life from './life/Life';

import blackImg from '../../assets/black.svg';
import blueImg from '../../assets/blue.svg';
import greenImg from '../../assets/green.svg';
import incolorImg from '../../assets/incolor.svg';
import redImg from '../../assets/red.svg';
import whiteImg from '../../assets/white.svg';


const colorDescription = {
  'white': 'Peace, law, structured, selflessness, equality',
  'blue': 'Knowledge, deceit, cautious, deliberate, perfecting',
  'black': 'Power, self-interest, death, sacrifice, uninhibited',
  'red': 'Freedom, emotion, active, impulsive, destructive',
  'green': 'Nature, wildlife, connected, spiritual, tradition'
}

const colorList = {
  // green: '#9bd3ae',
  // blue: '#aae0fa',
  // black: '#cbc2bf',
  // white: '#fffbd5',
  // red: '#f9aa8f'
  green:	'#50A36D',
  blue:	'#3D7FB9',
  black:	'#000000',
  red: '#AC4546',
  white:	'#FFFFFF'
}

const colorImage = {
  green: greenImg,
  blue: blueImg,
  black: blackImg,
  white: whiteImg,
  red: redImg
}

export default class Player extends Component {
  state = {
    lifeCounter: 20
  };

  constructor(props){
    super(props);
  }

  updateLife(points){
    this.setState({
      lifeCounter: this.state.lifeCounter + points
    });
  }

  onDamage(){
    if(this.props.onDamage){
      this.props.onDamage();
    }

    this.updateLife(-1);
  }

  onHeal(){
    if(this.props.onHeal){
      this.props.onHeal()
    }

    this.updateLife(1);
  }

  colorBackgroud(color){
    return
  }
  // const colorImg = `url('${colorImage[colors[0]]}') 50% 50%`;

  colorBackgroud(){
    const colors = this.props.color;

    if(colors.length > 1){
      const colorText = colors.map((color)=>{
        return colorList[color];
      }).join(',');

      return `linear-gradient(-45deg, ${colorText})`;
    }else{
      return colorList[colors[0]];
    }
  }


  render() {
    return (
      <div className={`Player`} style={{background: this.colorBackgroud()}}>
        <img className='Player-background-image' src={colorImage[this.props.color[0]]} />
        <div className='Player-info'>
          <h1 className="Player-name">
            {this.props.name}
          </h1>
          <Life
            counter={this.state.lifeCounter}
            onDamage={()=>{
              this.onDamage()
            }}
            onHeal={()=>{
              this.onHeal()
            }}/>
        </div>
      </div>
    );
  }
}
