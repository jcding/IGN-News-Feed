import React from 'react';
import ReactDOM from 'react-dom';
import RandomPannel from './randompannel.jsx';

ReactDOM.render(
  <RandomPannel url="/api/v1/message/" />,
  document.getElementById('randomWidgetEntry'),
);
