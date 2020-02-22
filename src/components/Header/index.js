import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = ({ scoreBoard:{ currentMatch } }) => ({
  matchStarted: currentMatch !== null
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
