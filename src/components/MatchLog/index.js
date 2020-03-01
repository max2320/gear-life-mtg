import { connect } from 'react-redux';

import MatchLog from './MatchLog';

const mapStateToProps = ({ scoreBoard, team: { teams: teamList } }) => ({...scoreBoard, teamList});
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(MatchLog);
