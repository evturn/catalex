export default function lane(state={}, action) {
  switch (action.type) {
    case 'CREATE_LANE':
    case 'UPDATE_LANE':
    case 'DELETE_LANE':
    case 'ATTACH_TO_LANE':
    case 'DETACH_FROM_LANE':
    case 'MOVE':
    default:
      return state;
  }

}