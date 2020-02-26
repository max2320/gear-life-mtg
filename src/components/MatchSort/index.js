import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MatchSort from './MatchSort';

const mapStateToProps = ({ team }) => (team);
const mapDispatchToProps = {  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MatchSort));
