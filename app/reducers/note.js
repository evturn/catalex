export default function note(state={}, action) {
  switch (action.type) {
    case 'UPDATE_NOTE':
    case 'DELETE_NOTE':
    default:
      return state;
  }
}