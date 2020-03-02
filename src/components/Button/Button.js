import React, { PureComponent } from 'react';

class Button extends PureComponent{
  timer = null;
  longPress = false;

  handleEventStart = () => {
    const timeout  = this.props.timeout || 500;
    this.longPress = false;

    this.timer = window.setTimeout(() => {
      this.longPress = true;
      this.propagateEvent();
    }, timeout);

    // console.log('clked', this.timer)
  }

  handleEventEnd = () => {
    if(this.longPress) { return; }
    this.propagateEvent();
  }

  propagateEvent(){
    window.clearTimeout(this.timer);

    if(this.longPress) {
      this.props.onClickAndHold();
    }else{
      this.props.onClick();
    }
  }

  allowTouch() {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  }


  render(){
    const { children, className } = this.props;

    return (
      <button
        className={className}
        onTouchStart={this.allowTouch() ? this.handleEventStart : ()=>{}}
        onTouchEnd={this.allowTouch() ? this.handleEventEnd : ()=>{}}
        onMouseDown={!this.allowTouch() ? this.handleEventStart : ()=>{}}
        onMouseUp={!this.allowTouch() ? this.handleEventEnd : ()=>{}}
      >
        {children}
      </button>
    );
  }
}

export default Button;
