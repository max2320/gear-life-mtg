import { connect } from 'react-redux';

import MatchType from './MatchType';

import { actions } from '../../ducks/match';

const { setType } = actions;
const mapStateToProps = ({ match }) => ({ ...match });
const mapDispatchToProps = { setType };

export default connect(mapStateToProps, mapDispatchToProps)(MatchType);
