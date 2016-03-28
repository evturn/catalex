import uuid from 'node-uuid';

const actions = {
  create:         payload => ({ type: 'CREATE_LANE', payload }),
  update:         ()      => { type: 'UPDATE_LANE' },
  deleteLane:     id      => ({ type: 'DELETE_LANE', id }),
  attachToLane:   ()      => { type: 'ATTACH_TO_LANE' },
  detachFromLane: ()      => { type: 'DETACH_FROM_LANE' },
  move:           ()      => { type: 'MOVE' }
};


export const create = () => dispatch => {
  dispatch(actions.create({
    id: uuid.v4(),
    notes: [],
    editing: false,
    name: 'Brand Nubian Lane'
  }));
};

export const deleteLane = id => dispatch => {
  dispatch(actions.deleteLane(id));
};