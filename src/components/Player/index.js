import { connect } from 'react-redux';

import Player from './Player';

import { actions } from '../../ducks/player';

const {removePlayer, setPlayerName, setPlayerColors, setPlayerTeam} = actions;

const mapStateToProps = ({ team }) => {
  const teamsOptions = team.order.map((teamId)=>({
    key: teamId,
    label: team.teams[teamId].name
  }));

  return { teamsOptions };
};
const mapDispatchToProps = { removePlayer, setPlayerName, setPlayerColors, setPlayerTeam };

export default connect(mapStateToProps, mapDispatchToProps)(Player);
