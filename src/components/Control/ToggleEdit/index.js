import { connect } from 'react-redux';

import ToggleEdit from './ToggleEdit';

import { actions } from '../../../ducks/control';

const { enableEdit, disableEdit } = actions;

const mapStateToProps = ({ control }) => (control);
const mapDispatchToProps = { enableEdit, disableEdit };

export default connect(mapStateToProps, mapDispatchToProps)(ToggleEdit);
