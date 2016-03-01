export const createLane = () => {
  return {
    type: 'CREATE_LANE'
  };
};

export const updateLane = lane => {
  return {
    type: 'UPDATE_LANE',
    lane
  };
};

export const deleteLane = lane => {
  return {
    type: 'DELETE_LANE',
    lane
  };
};

export const detachFromLane = ({ laneId, noteId }) => {
  return {
    type: 'DETACH_FROM_LANE',
    laneId,
    noteId
  };
};

export const attachToLane = ({ laneId, noteId }) => {
  return {
    type: 'ATTACH_TO_LANE',
    laneId,
    noteId
  };
};


export const move = ({sourceId, targetId}) => {
  return {
    type: 'MOVE',
    sourceId,
    targetId
  };
};