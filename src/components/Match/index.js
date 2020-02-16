import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Match from './Match';
import './style.css';

const mapStateToProps = ({ team: { teams }, scoreBoard: { teams: order } }) => ({
  teams,
  order: Object.keys(order)
});
const mapDispatchToProps = { };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Match));
