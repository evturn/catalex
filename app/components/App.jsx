import uuid from 'node-uuid';
import React, {Component} from 'react';
import Notes from './Notes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Stay under a bed and when someone walks by grab their foot.'
        },{
          id: uuid.v4(),
          task: 'Go to public restroom and rest publicly.'
        },{
          id: uuid.v4(),
          task: 'No.'
        }
      ]
    };
  }
  render() {
    const notes = this.state.notes;
    return (
      <div>
        <h1>The OoGhiJ MIQtxxXA is a super computer</h1>
        <Notes items={notes} />
      </div>
    );
  }

}