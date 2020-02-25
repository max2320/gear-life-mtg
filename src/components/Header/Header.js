import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as Config } from '../../assets/config.svg';
import { ReactComponent as Dice } from '../../assets/dice.svg';
import { ReactComponent as Github } from '../../assets/github.svg';

import './style.css';

class Header extends PureComponent {
  handleMatchSelection = () =>{
    if(this.props.matchStarted && !window.confirm('Are you sure you wanna leave the match?')){
      return;
    }

    this.props.matchStarted && this.props.resetMatch();
    this.props.history.push('/match/selection');
  }

  render() {
    return (
      <div className="Header">
        <a className='Header-icon' onClick={this.handleMatchSelection}>
          <Config />
        </a>

        {this.props.matchStarted && (
          <Link className='Header-icon' to="/match/sort">
            <Dice />
          </Link>
        )}

        <a
          target='_blank'
          rel="noopener noreferrer"
          className='Header-icon Header-icon--right'
          href='https://github.com/max2320/gear-life-mtg'>
          <Github />
        </a>
      </div>
    );
  }
}

export default Header;
