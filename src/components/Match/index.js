import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Match from './Match';
import './style.css';
import { actions } from '../../ducks/scoreBoard';


const { resetMatch } = actions;
const mapStateToProps = ({ team: { teams }, scoreBoard: { teams: order }, match: { matchConfig } }) => ({
  teams,
  matchConfig,
  order: Object.keys(order)
});
const mapDispatchToProps = { resetMatch };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Match));
