import { combineReducers } from 'redux';
import lane from './lane';
import note from './note';

const rootReducer = combineReducers({
  lane,
  note
});

export default rootReducer;