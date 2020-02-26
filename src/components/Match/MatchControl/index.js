import { connect } from 'react-redux';

import MatchControl from './MatchControl';

import { actions } from '../../../ducks/scoreBoard';

const { registryAction } = actions;
const mapStateToProps = ({ scoreBoard: { currentMatch }, match: { matchConfig }}) => ({ currentMatch, matchConfig });
const mapDispatchToProps = { registryAction };

export default connect(mapStateToProps, mapDispatchToProps)(MatchControl);
