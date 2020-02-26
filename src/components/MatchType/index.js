import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MatchType from './MatchType';

import { actions } from '../../ducks/match';

const { setType } = actions;
const mapStateToProps = ({ match }) => ({ ...match });
const mapDispatchToProps = { setType };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MatchType));
