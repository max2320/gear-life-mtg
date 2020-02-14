import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MatchRoundWinner from './MatchRoundWinner';

import { actions } from '../../ducks/scoreBoard';

const { registryRoundWinners } = actions;

const mapStateToProps = ({ team }) => (team);
const mapDispatchToProps = { registryRoundWinners };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MatchRoundWinner));
