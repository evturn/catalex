import AltContainer from 'alt-container';
import React, {Component} from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>The OoGhiJ MIQtxxXA is a super computer</h1>
        <button className="add-note" onClick={this.addNote}>+</button>
        <AltContainer
          stores={NoteStore}
          inject={{
            notes: () => NoteStore.getState().notes
          }}
        >
        <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
        </AltContainer>
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