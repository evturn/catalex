const actions = {
  create:         () => { type: 'CREATE_LANE' },
  update:         () => { type: 'UPDATE_LANE' },
  delete:         () => { type: 'DELETE_LANE' },
  attachToLane:   () => { type: 'ATTACH_TO_LANE' },
  detachFromLane: () => { type: 'DETACH_FROM_LANE' },
  move:           () => { type: 'MOVE' }
};