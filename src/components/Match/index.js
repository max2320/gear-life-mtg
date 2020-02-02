import { connect } from 'react-redux';

import Match from './Match';
import './style.css';

const mapStateToProps = ({ team, scoreBoard: { history } }) => ({ ...team, history });
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Match);
