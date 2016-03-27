export default function note(state={}, action) {
  switch (action.type) {
    case 'CREATE_NOTE':
    case 'UPDATE_NOTE':
    case 'DELETE_NOTE':
    default:
      return state;
  }
}