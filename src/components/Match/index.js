import { connect } from 'react-redux';

import Match from './Match';
import './style.css';

const mapStateToProps = ({ team }) => ({ ...team });
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Match);
