import React, { useState } from 'react';

const Buttons = ({ actions: { setStatus, setTime } }) => {
  const [clickTime, setClickTime] = useState(new Date().getTime());

  const onStartHandler = () => {
    setStatus('run');
  };

  const onStopHandler = () => {
    setStatus('stop');
    setTime(0);
  };

  const onResetHandler = () => {
    setTime(0);
    setStatus('run');
  };

  const onWaitHandler = (e) => {
    const currTime = new Date().getTime();
    if (currTime - clickTime < 299 && e.detail >= 2) {
      setStatus('wait');
    }
    setClickTime(currTime);
  };

  return (
    <div className="stopwatch__buttons">
      <div>
        <div className="stopwatch__btn" onClick={() => onStopHandler()}>
          Stop
        </div>
        <div className="stopwatch__btn" onClick={() => onResetHandler()}>
          Reset
        </div>
      </div>
      <div>
        <div className="stopwatch__btn" onClick={() => onStartHandler()}>
          Start
        </div>
        <div className="stopwatch__btn" onClick={(e) => onWaitHandler(e)}>
          Wait
        </div>
      </div>
    </div>
  );
};

export default Buttons;
