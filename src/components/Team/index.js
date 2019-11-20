import { connect } from 'react-redux';

import Team from './Team';

import { actions } from '../../ducks/team';

const {removeTeam, setTeamName} = actions;

const mapStateToProps = () => ({});
const mapDispatchToProps = { removeTeam, setTeamName };

export default connect(mapStateToProps, mapDispatchToProps)(Team);
