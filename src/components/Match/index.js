import { connect } from 'react-redux';

import Match from './Match';
import './style.css';

const mapStateToProps = ({ team: { teams }, scoreBoard: { teams: order } }) => ({
  teams,
  order: Object.keys(order)
});
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Match);
