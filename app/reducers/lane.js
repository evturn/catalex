export default function lane(state={
  lanes: []
}, action) {
  switch (action.type) {
    case 'CREATE_LANE':
      return Object.assign({}, state, {
        lanes: state.lanes.concat(action.payload)
      });
    case 'UPDATE_LANE':
    case 'DELETE_LANE':
      return Object.assign({}, state, {
        lanes: state.lanes.filter(lane => lane.id !== action.id)
      });
    case 'ATTACH_TO_LANE':
    case 'DETACH_FROM_LANE':
    case 'MOVE':
    default:
      return state;
  }
}