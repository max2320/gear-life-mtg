import React, { Component } from 'react';
import './style.css';
import {colorBackground, colorDescription, colorImage} from '../../lib/color';

const colorNames = ['white','blue','black','red','green','colorless'];

export default class EditPlayer extends Component {
  colors= {
    white: false,
    blue: false,
    black: false,
    red: false,
    green: false,
    colorless: false
  }

  state= {
    name: '',
    colors: []
  }

  constructor(props){
    super(props);

    props.colors.forEach((color)=>{
      this.colors[color] = true
    });

    this.state.name = props.name
  }

  updateName(name){
    this.setState({
      name: name
    });
  }

  updateColors(){
    this.setState({
      colors: this.selectedColors()
    });
  }

  componentDidUpdate(){
    this.props.onUpdate(this.state);
  }

  renderImages(){
    return colorNames.map((color)=>{
      const selectClass = this.colors[color] ? 'active': '';
      return (
        <div onClick={()=>{
          this.colors[color] = ! this.colors[color];
          this.updateColors();
        }} className={`AddPlayer-color-item ${selectClass}`}>
          <img
            className='AddPlayer-background-image'
            title={colorDescription[color]}
            alt={color}
            src={colorImage[color]}
          />
        </div>
      );
    });
  }

  selectedColors(){
    return colorNames.filter((color) => {
      return this.colors[color];
    });
  }

  render() {
    return (
      <div className={`AddPlayer`} style={{background: colorBackground(this.selectedColors())}}>
        <div className='AddPlayer-header'>
          <strong>P{this.props.index}</strong>
          <input
            value={this.state.name}
            placeholder={'Name of the player'}
            onInput={(e)=>{
              this.updateName(e.target.value);
            }}
          />
        </div>

        <div className='AddPlayer-color'>
          {this.renderImages()}
        </div>
      </div>
    );
  }
}
