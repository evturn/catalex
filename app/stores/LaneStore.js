import uuid from 'node-uuid';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';
import update from 'react-addons-update';

class LaneStore {
  constructor() {
    this.bindActions(LaneActions);
    this.lanes = [];
  }
  create(lane) {
    lane.id = uuid.v4();
    lane.notes = lane.notes || [];

    this.setState({
      lanes: this.lanes.concat(lane)
    });
  }
  update(updatedLane) {
    const lanes = this.lanes.map(lane => {
      if (lane.id === updatedLane.id) {
        lane = Object.assign({}, lane, updatedLane);
      }

      return lane;
      });

      this.setState({ lanes });
    }
  delete(id) {
    this.setState({
      lanes: this.lanes.filter(lane => lane.id !== id)
    });
  }
  attachToLane({laneId, noteId}) {
    const lanes = this.lanes.map(lane => {
      if (lane.notes.includes(noteId)) {
        lane.notes = lanes.notes.filter(note => note != noteId);
      }

      if (lane.id === laneId) {
        if (lane.notes.includes(noteId)) {
          console.warn('Dude, chill, we have that already.', lanes);
        } else {
          lane.notes.push(noteId);
        }
      }

      return lane;
    });

    this.setState({ lanes });
  }
  detachFromLane({laneId, noteId}) {
    const lanes = this.lanes.map(lane => {
      if (lane.id === laneId) {
        lane.notes = lane.notes.filter(note => note !== noteId);
      }

      return lane;
    });

    this.setState({ lanes });
  }
}

export default alt.createStore(LaneStore, 'LaneStore');