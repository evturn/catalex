import uuid from 'node-uuid';
import React, {Component} from 'react';
import Note from './Note.jsx';

const notes = [
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
];

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>{notes.map(this.renderNote)}</ul>
      </div>
    );
  }
  renderNote(note) {
    return(
      <li key={note.id}>
        <Note task={note.task} />
      </li>
    );
  }
}