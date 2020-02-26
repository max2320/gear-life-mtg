import { connect } from 'react-redux';

import Player from './Player';

import { actions } from '../../ducks/player';

const {removePlayer, setPlayerName, setPlayerColors, setPlayerTeam} = actions;

const mapStateToProps = ({ team, match: { allowCustom }, }) => {
  const teamsOptions = team.order.map((teamId)=>({
    key: teamId,
    label: team.teams[teamId].name
  }));

  return { teamsOptions, allowCustom };
};
const mapDispatchToProps = { removePlayer, setPlayerName, setPlayerColors, setPlayerTeam };

export default connect(mapStateToProps, mapDispatchToProps)(Player);
