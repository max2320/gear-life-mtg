import React from 'react';
import LongPressable from 'react-longpressable';

class Button extends LongPressable {
  render() {
    const { children, className } = this.props;

    return (
      <button
        className={className}
        onPointerUp={this.onPointerUp}
        onPointerDown={this.onPointerDown}
        onPointerMove={this.onPointerMove}
        onPointerLeave={this.onPointerLeave}
      >
        {children}
      </button>
    )
  }
}

export default Button;
