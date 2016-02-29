import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores';
import App from './components/App';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

persist(alt, storage, 'app');

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));