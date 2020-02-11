import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as Config } from '../../assets/config.svg';
import { ReactComponent as Dice } from '../../assets/dice.svg';
import { ReactComponent as Github } from '../../assets/github.svg';

import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link className='Header-icon' to="/match/selection">
          <Config />
        </Link>

        <Link className='Header-icon' to="/match/sort">
          <Dice />
        </Link>

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
