import { combineReducers } from 'redux';
import lane from './lane';
import note from './note';

const reducer = combineReducers({ lane, note });

export default reducer;