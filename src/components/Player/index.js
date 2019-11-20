import { connect } from 'react-redux';

import Player from './Player';

import { actions } from '../../ducks/player';

const {removePlayer, setPlayerName, setPlayerColors} = actions;

const mapStateToProps = () => ({});
const mapDispatchToProps = { removePlayer, setPlayerName, setPlayerColors };

export default connect(mapStateToProps, mapDispatchToProps)(Player);
