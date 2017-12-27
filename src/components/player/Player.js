import React, { Component } from 'react';
import './style.css';
import Life from './life/Life';
import Poison from './poison/Poison';

import blackImg from '../../assets/black.svg';
import blueImg from '../../assets/blue.svg';
import greenImg from '../../assets/green.svg';
import incolorImg from '../../assets/incolor.svg';
import redImg from '../../assets/red.svg';
import whiteImg from '../../assets/white.svg';
import Dice from '../dice/Dice';

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
  black:	'#1C2627',
  red: '#AC4546',
  white: '#fffbd5',

}

const colorImage = {
  green: greenImg,
  blue: blueImg,
  black: blackImg,
  white: whiteImg,
  red: redImg
}


const tabs = ['Life', 'Poison', 'Dice'];

export default class Player extends Component {
  state = {
    counters: {
      life: 20,
      poison: 0
    },
    tab: 'life'
  };

  constructor(props){
    super(props);
  }

  updateCounter(counter, points){
    var counters = this.state.counters;
    counters[counter] = counters[counter] + points;

    this.setState({
      counters: counters
    });
  }

  colorBackgroud(){
    const colors = this.props.colors;

    if(colors.length > 1){
      const colorText = colors.map((color)=>{
        return colorList[color];
      }).join(',');

      return `linear-gradient(-45deg, ${colorText})`;
    }else{
      return colorList[colors[0]];
    }
  }

  colorNames(){
    return this.props.colors.join(' | ');
  }

  renderImages(){
    return this.props.colors.map((color)=>{
      return (<img
        className='Player-background-image'
        title={colorDescription[color]}
        src={colorImage[color]} />)
    });
  }

  renderLife(){
    if(this.state.tab == 'life'){
      return (
        <Life
          counter={this.state.counters.life}
          onChange={(value)=>{this.updateCounter('life', value)}} />
      );
    }
  }

  renderPoison(){
    if(this.state.tab == 'poison'){
      return (
        <Poison
          counter={this.state.counters.poison}
          onChange={(value)=>{this.updateCounter('poison', value)}} />
      );
    }
  }

  renderDice(){
    if(this.state.tab == 'dice'){
      return (
        <Dice/>
      );
    }

  }

  renderTabs(){
    return tabs.map((tab)=>{
      const tabLower = tab.toLowerCase();
      const active = tabLower == this.state.tab ? 'active' : '';

      return (
        <div className={`Player-tab-item ${active}`}
          onClick={()=>{
            this.setState({
              tab: tabLower
            });
          }}>
          {tab} {this.state.counters[tabLower] != undefined ?
            (<small>({this.state.counters[tabLower]})</small>) : ''}
        </div>
      )
    })
  }

  render() {
    return (
      <div className={`Player`} style={{background: this.colorBackgroud()}}>
        <div className='Player-header'>
          <strong>P{this.props.index}</strong>
          {this.props.name}

          <span className='Player-info'>
            {this.renderImages()}
          </span>
        </div>
        {this.renderLife()}
        {this.renderPoison()}
        {this.renderDice()}

        <div className='Player-tab'>
          {this.renderTabs()}
        </div>
      </div>
    );
  }
}
