import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import AltContainer from 'alt-container';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    return (
      <div>
        <h1>Nötes</h1>
        <button className="add-lane" onClick={this.addLane}>+</button>
        <Lanes lanes={this.props.lanes} />
      </div>
    );
  }
  addLane() {
    LaneActions.create({ name: 'New lane' });
  }
}

export default connect(
  state => ({
    lanes: state.lane.lanes
  })
)(App);