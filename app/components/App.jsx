import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Lanes from './Lanes';
import { createLane } from '../actions/lane';

@DragDropContext(HTML5Backend)
export default class App extends Component {
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