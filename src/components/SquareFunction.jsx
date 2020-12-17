import React from 'react';

const SquareFunction = (props) => {
  const { value, onClick } = props;
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default SquareFunction;