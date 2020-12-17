import React, { Component } from 'react';

class SquareClass extends Component {
  render() {
    const { value, onClick } = this.props;
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }
}

export default SquareClass;