import uuid from 'node-uuid';

const actions = {
  create: function(payload) {
    return {
      type: 'CREATE_LANE',
      payload
    };
  },
  update:         ()      => { type: 'UPDATE_LANE' },
  delete:         ()      => { type: 'DELETE_LANE' },
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