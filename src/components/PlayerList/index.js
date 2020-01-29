import { connect } from 'react-redux';

import PlayerList from './PlayerList';
import './style.css';

import { actions } from '../../ducks/player';

const { createPlayer } = actions;

const mapStateToProps = ({ player, match: {allowCustom} }) => ({ ...player, allowCustom });
const mapDispatchToProps = { createPlayer };

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
