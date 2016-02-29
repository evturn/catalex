export const createLane() => {
  return {
    type: 'CREATE_LANE'
  };
};

export const updateLane() => {
  return {
    type: 'UPDATE_LANE'
  };
};

export const deleteLane() => {
  return {
    type: 'DELETE_LANE'
  };
};

export const attachToLane() => {
  return {
    type: 'ATTACH_TO_LANE'
  };
};

export const detachFromLane({ laneId, noteId }) => {
  return {
    type: 'DETACH_FROM_LANE',
    laneId,
    noteId
  };
};

export const move() => {
  return {
    type: 'MOVE'
  };
};