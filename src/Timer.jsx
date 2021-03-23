import React from 'react';

// clock

const Timer = ({ time }) => {
  const date = new Date(0);
  date.setSeconds(time);

  return (
    <div className="stopwatch__display">{date.toISOString().substr(11, 8)}</div>
  );
};

export default Timer;
