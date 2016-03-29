import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import AltContainer from 'alt-container';
import Lanes from './Lanes';
import { create } from '../actions/lane';

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <h1>Ñötéš</h1>
        <button className="add-lane" onClick={() => dispatch(create())}>+</button>
        <Lanes lanes={this.props.lanes} />
      </div>
    );
  }
}

export default connect(
  state => ({
    lanes: state.lane.lanes
  })
)(App);
