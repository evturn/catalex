import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './components/App';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

import LaneStore from './stores/LaneStore';

persist(alt, storage, 'app');

const initialState = {
  lane: {
    lanes: LaneStore.getState().lanes || []
  }
};
console.log(initialState);

const store = configureStore(initialState);


render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);