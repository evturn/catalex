function lane(state=[], action) {
  switch (action.type) {
    case 'CREATE_LANE':
    case 'UPDATE_LANE':
    case 'DELETE_LANE':
    case 'ATTACH_TO_LANE':
    case 'DETACH_FROM_LANE':
      return state.map(lane => {
        if(lane.id === action.laneId) {
          return Object.assign({}, lane, {
            notes: lane.notes.filter(id => id !== action.noteId)
          });
        }

        return lane;
      });
    case 'MOVE':
    default
      return state;
  }
}