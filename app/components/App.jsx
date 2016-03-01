import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Lanes from './Lanes';
import { createLane } from '../actions/lane';

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    return (
      <div>
        <h1>Nötes</h1>
        <button className="add-lane" onClick={createLane}>+</button>
        <Lanes />
      </div>
    );
  }
}

App.propTypes = {
  lanes: PropTypes.array,
  dispatch: PropTypes.func
}

function mapStateToProps(state) {
  return {
    lanes: state.lane
  };
}

export default connect(mapStateToProps)(App);