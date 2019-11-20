import { connect } from 'react-redux';

import TeamList from './TeamList';
import './style.css';

import { actions } from '../../ducks/team';

const { createTeam } = actions;

const mapStateToProps = ({ team }) => (team);
const mapDispatchToProps = { createTeam };

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
