import React, { Component } from 'react';

class ToggleEdit extends Component {
  render() {
    if(this.props.editMode){
      return (<button onCick={this.props.disableEdit}>finish</button>)
    } else {
      return (<button onCick={this.props.enableEdit}>Edit</button>)
    }
  }
}

export default ToggleEdit;
