import { createStore, applyMiddleware, compose } from 'redux';
import { thunkmasterFlex as thunk } from '../actions/api';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const middleware = compose(
  applyMiddleware(thunk, logger()),
  window.devToolsExtension()
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, middleware);
}