import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App';
import TabComponent from './tabpage.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
