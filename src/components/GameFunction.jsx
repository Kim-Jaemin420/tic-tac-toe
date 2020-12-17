import React, { useState } from 'react';
import BoardFunction from './BoardFunction';

const GameFunction = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = i => {
    const log = history.slice(0, stepNumber + 1);

    const current = log[log.length - 1];
    const squares = current.squares.slice();

    // 승자가 있거나 누른 버튼이라면 리턴
    if (calculateWinner(squares) || squares[i]) return;

    // xIsNext가 true이면 x, false이면 O
    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(prevState => [...prevState, { squares }]);
    setStepNumber(log.length);
    setXisNext(prevState => !prevState);

  };

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  }


  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>
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
        <BoardFunction squares={current.squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

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

export default GameFunction;