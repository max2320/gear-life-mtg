import React, { PureComponent } from 'react';

import './style.css';
import {colors, order} from '../../configs/consts/colors';
import { colorBackground } from '../../lib/color';


import { ReactComponent as GeneralSvg } from '../../assets/general.svg';
import { ReactComponent as EmperorSvg } from '../../assets/formats/emperor.svg';



class Player extends PureComponent {
  id = this.props.id;

  get teamName() {
    return this.props.teamsOptions.find(({ key }) => this.props.teamId === key);
  }

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
    return order.map((colorName) => {
      const { description, Symbol } = colors[colorName];
      const isSelected = this.props.colors.includes(colorName);
      const selectClass = isSelected ? 'active': '';

      return (
        <div
          className={`PlayerColors__item ${selectClass}`}
          onClick={this.handleColorToggle.bind(this, colorName)}
          aria-label={description}
          data-balloon-pos="down"
        >
          <Symbol
            className='PlayerColors__item-image'
          />
        </div>
      );
    });
  }

  renderActions(){
    if(!this.props.allowCustom) {
      return (
        <div className='PlayerHeader__team'>
          {this.teamName['label']}
          {this.props.showIcons && this.renderIcons()}
        </div>
      )
    }

    return [
      this.renderTeamSelection(),
      (
        <i
          className="material-icons PlayerHeader__remove"
          onClick={this.handleRemove}
        >close</i>
      )
    ]
  }

  renderIcons() {
    if(this.props.leader) {
      return (
        <EmperorSvg className='Match-TeamHeader__leader' />
      );
    } else {
      return (
        <GeneralSvg className='Match-TeamHeader__leader' />
      );
    }
  }

  render() {
    return (
      <div className="Player" style={{background : colorBackground(this.props.colors)}}>
        <div className='PlayerHeader'>
          <input
            className='PlayerHeader__name'
            defaultValue={this.props.name}
            onInput={this.handleNameUpdate}
          />
          {this.renderActions()}
        </div>

        <div className='PlayerColors'>
          {this.renderColors()}
        </div>
      </div>
    );
  }
}

export default Player;
