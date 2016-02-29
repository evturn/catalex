import { createStore } from 'redux';
import { reducer } from '../reducers';

const storage = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch(err) {
      return null;
    }
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }
};

const getInitialState = (storeName) => {
  let data;

  try {
    data = storage.get(storeName);
  } catch(err) {
    console.error('Failed to bootstrap data. I am also sleeping with your wife.', err);
  }

  return data;
};

const initialState = getInitialState('app');
const store = createStore(reducer, initialState);

export default store;