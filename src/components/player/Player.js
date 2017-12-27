import React, { Component } from 'react';
import './style.css';
import Life from './life/Life';
import Poison from './poison/Poison';

import Dice from '../dice/Dice';
import {colorBackground, colorDescription, colorImage} from '../../lib/color';


const tabs = ['Life', 'Poison', 'Dice'];

export default class Player extends Component {
  state = {
    counters: {
      life: 20,
      poison: 0
    },
    tab: 'life'
  };

  updateCounter(counter, points){
    var counters = this.state.counters;
    counters[counter] = counters[counter] + points;

    this.setState({
      counters: counters
    });
  }

  colorNames(){
    return this.props.colors.join(' | ');
  }

  renderImages(){
    return this.props.colors.map((color)=>{
      return (<img
        className='Player-background-image'
        title={colorDescription[color]}
        alt={color}
        src={colorImage[color]} />)
    });
  }

  renderLife(){
    if(this.state.tab === 'life'){
      return (
        <Life
          counter={this.state.counters.life}
          onChange={(value)=>{this.updateCounter('life', value)}} />
      );
    }
  }

  renderPoison(){
    if(this.state.tab === 'poison'){
      return (
        <Poison
          counter={this.state.counters.poison}
          onChange={(value)=>{this.updateCounter('poison', value)}} />
      );
    }
  }

  renderDice(){
    if(this.state.tab === 'dice'){
      return (
        <Dice/>
      );
    }

  }

  renderTabs(){
    return tabs.map((tab)=>{
      const tabLower = tab.toLowerCase();
      const active = tabLower === this.state.tab ? 'active' : '';

      return (
        <div className={`Player-tab-item ${active}`}
          onClick={()=>{
            this.setState({
              tab: tabLower
            });
          }}>
          {tab} {this.state.counters[tabLower] !== undefined ?
            (<small>({this.state.counters[tabLower]})</small>) : ''}
        </div>
      )
    })
  }

  render() {
    return (
      <div className={`Player`} style={{background: colorBackground(this.props.colors)}}>
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
