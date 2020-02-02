import { connect } from 'react-redux';

import Control from './Control';

import { actions } from '../../../ducks/scoreBoard';

const { registryAction } = actions;
const mapStateToProps = ({ scoreBoard: { currentMatch }}) => ({ currentMatch });
const mapDispatchToProps = { registryAction };

export default connect(mapStateToProps, mapDispatchToProps)(Control);
