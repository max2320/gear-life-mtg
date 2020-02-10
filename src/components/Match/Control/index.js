import { connect } from 'react-redux';

import Control from './Control';

import { actions } from '../../../ducks/scoreBoard';

const { registryAction } = actions;
const mapStateToProps = ({ scoreBoard: { currentMatch }, match: { matchConfig }}) => ({ currentMatch, matchConfig });
const mapDispatchToProps = { registryAction };

export default connect(mapStateToProps, mapDispatchToProps)(Control);
