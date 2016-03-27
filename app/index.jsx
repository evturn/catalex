import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import { storage } from './actions/api';

const db = storage.get('app');
const parsed = JSON.parse(db)

const initialState = {
  lane: parsed.LaneStore,
  note: parsed.NoteStore
};

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);