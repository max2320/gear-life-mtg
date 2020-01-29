import React, { PureComponent } from 'react';

import './style.css';

class Team extends PureComponent {
  id = this.props.id;

  handleRemove = () => {
    this.props.removeTeam(this.id)
  }

  handleNameUpdate = ({ target: { value: name }}) => {
    this.props.setTeamName(this.id, name)
  }

  handleSetName = () =>{
  }

  render() {
    return (
      <div className='Team'>
        <div className='TeamHeader'>
          <input
            className='TeamHeader__name'
            defaultValue={this.props.name}
            onInput={this.handleNameUpdate}
          />

          <i
            className="material-icons TeamHeader__remove"
            onClick={this.handleRemove}
          >close</i>
        </div>
      </div>
    );
  }
}

export default Team;
