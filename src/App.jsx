import './App.scss';
import React, { useState, useEffect } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// components
import Timer from './Timer.jsx';
import Buttons from './Buttons.jsx';

const App = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState('stop');

  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (status === 'run') {
          setTime((val) => val + 1);
        }
      });
    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [status]);

  return (
    <div className="app">
      <header></header>
      <main>
        <section>
          <div className="stopwatch">
            <Timer time={time} />
            <Buttons actions={{ setStatus, setTime }} />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
