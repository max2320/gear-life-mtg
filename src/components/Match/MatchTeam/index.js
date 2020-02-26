import { connect } from 'react-redux';

import MatchTeam from './MatchTeam';

const mapStateToProps = ({ player: { players }, scoreBoard: { teams } }) => ({ players, teams });
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(MatchTeam);
