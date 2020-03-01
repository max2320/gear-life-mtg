import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import './style.css';

import {ReactComponent as PoisonSVG} from '../../assets/infect.svg';
import {ReactComponent as LifeSVG} from '../../assets/heart.svg';

class MatchLogItem extends PureComponent {
  actionIcons = {
    life: (<LifeSVG className=''/>),
    poison: (<PoisonSVG className=''/>)
  }

  get signalClass() {
    const { action,  value } = this.props;

    if(action === 'poison'){
      if(value > 0) {
        return 'red';
      } else {
        return 'green';
      }
    }else{
      if(value < 0) {
        return 'red';
      } else {
        return 'green';
      }
    }
  }

  renderActionSymbol() {
    const { action, value } = this.props;
    return this.actionIcons[action];
  }

  renderContent(){
    const { description, action } = this.props;
    if(action === 'roundWinners'){
      return `Winner(s): ${description}`
    }

    return description;
  }

  render() {
    const { match, value } = this.props;

    return (
      <div className="MatchLogItem">
        <div className="MatchLogItem__match">
          {(match + 1)}
        </div>

        <div className={`MatchLogItem__action ${this.signalClass}`}>
          <div className="value">{value}</div>

          {this.renderActionSymbol()}
        </div>

        <div className="MatchLogItem__content">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

class MatchLog extends PureComponent {
  renderList() {
    const { teamList, history} = this.props;

    return history.map((item)=>{
      let description = '';
      if(item.teamIds) {
        description = item.teamIds.map((id)=>(teamList[id].name)).join(', ');
      }else{
        description = teamList[item.teamId]['name']
      }

      return (<MatchLogItem {...item} description={description} />);
    });
  }

  render() {
    return (
      <div className='MatchLog'>
        <h1>Match Log</h1>

        <div className='MatchLog__container'>
          {this.renderList()}
        </div>

        <Link className='Button Button--green' to='/'>
          Back to match
        </Link>
      </div>
    );
  }
}

export default MatchLog;
