import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Header from './Header';

import { actions } from '../../ducks/scoreBoard';

const { resetMatch } = actions;

const mapStateToProps = ({ scoreBoard: { currentMatch } }) => ({
  matchStarted: currentMatch !== null
});

const mapDispatchToProps = { resetMatch };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
