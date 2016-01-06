import uuid from 'node-uuid';
import React, {Component} from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = NoteStore.getState();
  }
  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }
  componentWillUnMount() {
    NoteStore.unlisten(this.storeChanged);
  }
  storeChanged = (state) => {
    this.setState(state)
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
  addNote() {
    NoteActions.create({ task: 'Me am a new task.' });
  }
  editNote(id, task) {
    NoteActions.update({ id, task });
  }
  deleteNote(id) {
    NoteActions.delete(id);
  }
}