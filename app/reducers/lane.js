export default function lane(state={
  lanes: []
}, action) {
  switch (action.type) {
    case 'CREATE_LANE':
      return Object.assign({}, state, {
        lanes: state.lanes.concat(action.payload)
      });
    case 'UPDATE_LANE': {
      const lanes = state.lanes.map(lane => {
        if (lane.id === action.payload.id) {
          lane.editing = false;
          lane.name = action.payload.name
        }
        return lane;
      });
      return Object.assign({}, state, {
        lanes
      });
    }
    case 'DELETE_LANE':
      return Object.assign({}, state, {
        lanes: state.lanes.filter(lane => lane.id !== action.id)
      });
    case 'EDIT_LANE': {
      const lanes = state.lanes.map(lane => {
        lane.editing = lane.id === action.id ? true : false;

        return lane;
      });
      return Object.assign({}, state, {
        lanes
      });
    }
    case 'CREATE_NOTE': {
      const { lane, note } = action.payload;

      const currentLane = state.lanes.filter(laneItem => laneItem.id === lane.id);
      currentLane.notes.concat(note.id);
    }
    case 'ATTACH_TO_LANE':
    case 'DETACH_FROM_LANE':
    case 'MOVE':
    default:
      return state;
  }
}