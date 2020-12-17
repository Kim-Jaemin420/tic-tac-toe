import React, { Component } from 'react';
import SquareClass from './SquareClass';

class BoardClass extends Component {
  // 여기서 버튼만 따로 분리
  // renderSquare = i => {
  //   return (<button className="square" onClick={() => this.props.onClick(i)}>{i}</button>)
  // };

  renderSquare = i => {
    const { squares, onClick } = this.props;
    return (
      <SquareClass
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default BoardClass;