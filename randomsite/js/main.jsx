import React from 'react';
import ReactDOM from 'react-dom';
import RandomWidget from './randomwidget.jsx';

ReactDOM.render(
  <RandomWidget url="/content/" />,
  document.getElementById('randomWidgetEntry'),
);
