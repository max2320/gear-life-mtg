import React, { PureComponent, Component } from 'react';
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

    if(action === 'poison') {
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

  renderContent() {
    const { description, action } = this.props;
    if(action === 'roundWinners') {
      return `Winner(s): ${description}`
    }

    return description;
  }

  renderSymbol() {
    const { value, action } = this.props;
    if(action === 'roundWinners') { return; }
    return(
      <div className={`MatchLogItem__action ${this.signalClass}`}>
        <div className="value">{value}</div>

        {this.renderActionSymbol()}
      </div>
    );
  }

  render() {
    const { match } = this.props;

    return (
      <div className="MatchLogItem">
        <div className="MatchLogItem__match">
          {(match + 1)}
        </div>

        {this.renderSymbol()}

        <div className="MatchLogItem__content">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

class MatchLog extends Component {
  state = {
    currentMatch: this.props.currentMatch
  }

  handleSelection = (currentMatch) => this.setState({ currentMatch })

  get log() {
    const { history } = this.props;
    return history.filter(({ match }) => (match === this.state.currentMatch));
  }

  get tabs() {
    return new Array(this.props.currentMatch + 1).fill();
  }

  renderList() {
    const { teamList} = this.props;

    return this.log.map((item) => {
      let description = '';

      if(item.teamIds) {
        description = item.teamIds.map((id)=>(teamList[id].name)).join(', ');
      }else{
        description = teamList[item.teamId]['name']
      }

      return (<MatchLogItem {...item} description={description} />);
    });
  }

  renderTabs() {
    return this.tabs.map((c, index)=>{
      return (
        <div
          className={`Button Button--${this.state.currentMatch === index ? 'darkblue' : 'blue' }`}
          onClick={this.handleSelection.bind(this, index)}
        >
          Match {index + 1}
        </div>
      );
    })
  }

  render() {
    return (
      <div className='MatchLog'>
        <h1>Match Log</h1>

        <Link className='Button Button--green' to='/'>
          Back to match
        </Link>

        <div className='MatchLog__container'>
          <div className='MatchLog__container'>
            {this.renderTabs()}
          </div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default MatchLog;
