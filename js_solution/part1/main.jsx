import React from 'react';
import ReactDOM from 'react-dom';
import RandomWidget from './randomwidget.jsx';

ReactDOM.render(
  <RandomWidget url="/api/v1/random/" />,
  document.getElementById('randomWidgetEntry'),
);
