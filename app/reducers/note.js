export default function note(state={}, action) {
  switch (action.type) {
    case 'CREATE':
    case 'UPDATE':
    case 'DELETE':
    default:
      return state;
  }
}