import React, { Component } from 'react';
import Counter from  '../counter/Counter';

export default class Poison extends Component {
  state = {
    counter: 0
  }

  constructor(props){
    super(props);
    this.state.counter = props.counter;
  }

  onAdd(){
    if(this.state.counter < 10){
      this.setState({
        counter: this.state.counter + 1
      });

      this.props.onChange(1);
    }
  }

  onSub(){
    this.setState({
      counter: this.state.counter - 1
    });

    this.props.onChange(-1);
  }

  render() {
    return (
      <Counter
        counter={this.state.counter}
        onAdd={()=>{
          this.onAdd()
        }}
        onSub={()=>{
          this.onSub()

        }}
      />
    );
  }
}
