import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store'
//pages
import './index.css';
import App from './App';
import WebSiteStyle from './style/webSiteStyle';

ReactDOM.render(
  <React.StrictMode>
    <WebSiteStyle />
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

