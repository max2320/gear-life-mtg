import { connect } from 'react-redux';

import Match from './Match';
import './style.css';

import { actions } from '../../ducks/scoreBoard';

const { resetMatch } = actions;

const mapStateToProps = ({ team: { teams }, scoreBoard: { teams: order } }) => ({
  teams,
  order: Object.keys(order)
});
const mapDispatchToProps = { resetMatch };

export default connect(mapStateToProps, mapDispatchToProps)(Match);
