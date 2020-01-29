import React, { PureComponent } from 'react';

import './style.css';
import {colorBackground, colorDescription, colorImage} from '../../lib/color';

const colorNames = ['white','blue','black','red','green','colorless'];

class Player extends PureComponent {
  id = this.props.id;

  handleRemove = () => {
    if(window.confirm("Are you sure?")){
      this.props.removePlayer(this.id)
    }
  }

  handleNameUpdate = ({ target: { value: name } }) => {
    this.props.setPlayerName(this.id, name);
  }

  handleTeamUpdate = ({ target: { value: teamId } }) => {
    this.props.setPlayerTeam(this.id, teamId)
  }

  handleColorToggle = (color) => {
    this.props.setPlayerColors(this.id, color)
  }

  renderTeamSelection() {
    return (
      <select
        defaultValue={this.props.teamId}
        onChange={this.handleTeamUpdate}
        className='PlayerHeader__team'
      >
        {this.props.teamsOptions.map(({key, label}) => {
          return (
            <option
              key={key}
              value={key}
            >
              {label}
            </option>
          );
        })}
      </select>
    );
  }

  renderColors(){
    return colorNames.map((color)=>{
      const selectClass = this.props.colors.includes(color) ? 'active': '';
      return (
        <div
          className={`PlayerColors__item ${selectClass}`}
          onClick={this.handleColorToggle.bind(this, color)}
        >
          <img
            className='PlayerColors__item-image'
            title={colorDescription[color]}
            alt={color}
            src={colorImage[color]}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="Player"  style={{background : colorBackground(this.props.colors)}}>
        <div className='PlayerHeader'>
          <input
            className='PlayerHeader__name'
            defaultValue={this.props.name}
            onInput={this.handleNameUpdate}
          />
          {this.renderTeamSelection()}
          <i
            className="material-icons PlayerHeader__remove"
            onClick={this.handleRemove}
          >close</i>
        </div>

        <div className='PlayerColors'>
          {this.renderColors()}
        </div>
      </div>
    );
  }
}

export default Player;
