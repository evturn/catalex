function(state=[], action) {
  switch (action.type) {
    case 'CREATE_LANE':
    case 'UPDATE_LANE':
    case 'DELETE_LANE':
    case 'ATTACH_NOTE':
    case 'DETACH_NOTE':
    default
      return state;
  }
}