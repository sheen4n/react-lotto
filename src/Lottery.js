import React, { useState } from 'react';
import Ball from './Ball';
import './Lottery.css';

const Lottery = ({ title, numBall, maxNum }) => {
  const [nums, setNums] = useState(Array.from({ length: numBall }));

  const handleClick = () => {
    setNums(nums.map(num => Math.ceil(Math.random() * maxNum)));
  };

  return (
    <div className='Lottery'>
      <h1>{title}</h1>
      <div className=''>
        {nums.map(num => (
          <Ball num={num} />
        ))}
      </div>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
};

export default Lottery;
