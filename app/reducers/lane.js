import uuid from 'node-uuid';
import update from 'react-addons-update';

export default function lane(state=[], action) {
  switch (action.type) {
    case 'CREATE_LANE':
      return state.concat({
        id: uuid.v4(),
        name: '',
        notes: []
      });
    case 'UPDATE_LANE':
      return state.map(lane => {
        if (lane.id === action.lane.id) {
          lane = Object.assign({}, lane, action.lane);
        }

        return lane;
      });
    case 'DELETE_LANE':
      return state.filter(lane => lane.id !== action.lane.id);
    case 'DETACH_FROM_LANE':
      return state.map(lane => {
        if(lane.id === action.laneId) {
          return Object.assign({}, lane, {
            notes: lane.notes.filter(id => id !== action.noteId)
          });
        }

        return lane;
      });
    case 'ATTACH_TO_LANE':
      return state.map(lane => {
        if (lane.notes.includes(action.noteId)) {
          lane.notes = lane.notes.filter(note => note != action.noteId);
        }

        if (lane.id === action.laneId) {
          if (lane.notes.includes(action.noteId)) {
            console.warn('Dude, chill, we have that already.');
          } else {
            lane.notes.push(action.noteId);
          }
        }

        return lane;
      });
    case 'MOVE': {
      const sourceLane = state.filter(lane => lane.notes.includes(action.sourceId))[0];
      const targetLane = state.filter(lane => lane.notes.includes(action.targetId))[0];
      const sourceNoteIndex = sourceLane.notes.indexOf(action.sourceId);
      const targetNoteIndex = targetLane.notes.indexOf(action.targetId);

      if (sourceLane === targetLane) {
        sourceLane.notes = update(sourceLane.notes, {
          $splice: [
            [sourceNoteIndex, 1],
            [targetNoteIndex, 0, action.sourceId]
          ]
        });
      } else {
        sourceLane.notes.splice(sourceNoteIndex, 1);
        targetLane.notes.splice(targetNoteIndex, 0, action.sourceId);
      }

      return state;
    }
    default:
      return state;
  }
}
