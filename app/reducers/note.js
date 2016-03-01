import uuid from 'node-uuid';
import update from 'react-addons-update';

export default function note(state=[], action) {
  switch (action.type) {
    case 'CREATE_NOTE':
      return state.concat(action.note);
    case 'UPDATE_NOTE':
    case 'DELETE_NOTE':
    default:
      return state;
  }
}