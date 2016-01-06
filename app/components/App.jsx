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
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes notes={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
  }
  deleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id)
    });
  }
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }
  editNote = (id, task) => {
    const notes = this.state.notes.map((note) => {
      if(note.id === id && task) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  }
}