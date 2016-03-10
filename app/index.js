import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './stores';
import storage from './libs/storage';

const APP_STORAGE = 'dollarz';
const store = configureStore(storage.get(APP_STORAGE) || {});

store.subscribe(() => {
  if(!storage.get('debug')) {
    storage.set(APP_STORAGE, store.getState());
  }
});

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
