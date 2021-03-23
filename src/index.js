import './index.scss';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// generator function runtime - e.g. async / await enabler
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// components
import App from './App.jsx';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
