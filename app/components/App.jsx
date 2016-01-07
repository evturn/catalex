import AltContainer from 'alt-container';
import React, {Component} from 'react';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>The OoGhiJ MIQtxxXA is a super computer</h1>
        <button className="add-lane" onClick={this.addLane}>+</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes || []
          }}
        >
        <Lanes />
        </AltContainer>
      </div>
    );
  }
  addLane() {
    LaneActions.create({ name: 'Big Tünechi' });
  }
}