import { connect } from 'react-redux';

import TeamList from './TeamList';
import './style.css';

import { actions } from '../../ducks/team';

const { createTeam } = actions;

const mapStateToProps = ({
  team,
  match: { allowCustom },
  control: { teamSetup }
}) => ({ ...team, allowCustom, teamSetup });
const mapDispatchToProps = { createTeam };

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
