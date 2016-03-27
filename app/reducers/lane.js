export default function lane(state={}, action) {
  switch (action.type) {
    case 'CREATE':
    case 'UPDATE':
    case 'DELETE':
    case 'ATTACH_TO_LANE':
    case 'DETACH_FROM_LANE':
    case 'MOVE':
    default:
      return state;
  }

}