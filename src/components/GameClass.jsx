import React, { PureComponent } from 'react';
import BoardClass from './BoardClass';

class GameClass extends PureComponent {
  state = {
    history: [
      { squares: Array(9).fill(null) },
    ],
    stepNumber: 0,
    xIsNext: true,
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);

    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // 승자가 있거나 누른 버튼이라면 리턴
    if (calculateWinner(squares) || squares[i]) return;

    // xIsNext가 true이면 x, false이면 O
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState(prevState => {
      return {
        history: [...prevState.history, { squares: squares }],
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      };
    })
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    })
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => (
      <li key={move}>
        <button onClick={() => this.jumpTo(move)}>
          {move ? `Go to move #` + move : 'Go to game start'}
        </button>
      </li>
    ))

    const status = winner
      ? `Winner  ${winner}`
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <div className="game">
        <div className="game-board">
          <BoardClass squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  console.log(squares);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // console.log(squares[b]);
    // console.log(squares[c]);

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log(squares[a]);

      return squares[a];
      // O, X중 먼저 한 줄 완성한 것 리턴
    }
  }
  return null;
}


export default GameClass;