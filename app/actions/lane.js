import uuid from 'node-uuid';

const actions = {
  create:         payload => ({ type: 'CREATE_LANE', payload }),
  updateLane:     payload => ({ type: 'UPDATE_LANE', payload }),
  deleteLane:     id      => ({ type: 'DELETE_LANE', id }),
  editLane:       id      => ({ type: 'EDIT_LANE', id }),
  attachToLane:   ()      => ({ type: 'ATTACH_TO_LANE' }),
  detachFromLane: ()      => ({ type: 'DETACH_FROM_LANE' }),
  move:           ()      => ({ type: 'MOVE' }),
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

export const editLane = id => dispatch => {
  dispatch(actions.editLane(id));
};

export const updateLane = payload => dispatch => {
  const { e, id } = payload;
  const name = e.target.value.trim();

  if (name !== '') {
    dispatch(actions.updateLane({ id, name }));
  }
}