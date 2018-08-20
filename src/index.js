import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DesignSystem from './DesignSystem';
import registerServiceWorker from './registerServiceWorker';

// Would use a router to render the design system or something
if (true) {
  ReactDOM.render(<DesignSystem />, document.getElementById('root'));
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}
registerServiceWorker();
