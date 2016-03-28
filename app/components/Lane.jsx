import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import AltContainer from 'alt-container';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import LaneActions from '../actions/LaneActions';
import { deleteLane, editLane } from '../actions/lane';
import Editable from './Editable';

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if (!targetProps.lane.notes.length) {
      LaneActions.attachToLane({
        laneId: targetProps.lane.id,
        noteId: sourceId
      });
    }
  }
};

@DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
class Lane extends Component {
  render() {
    const { dispatch, lane, notes, connectDropTarget, ...props } = this.props;
    const [laneNotes] = lane.notes.map(id => notes.filter(note => id === note.id));

    return connectDropTarget(
      <div {...props}>
        <div className="lane-border" />
        <div className="lane-header" onClick={this.activateLaneEdit}>
          <div className="lane-add-note">
            <button onClick={this.addNote}>+</button>
          </div>

          <Editable
            className="lane-name"
            editing={lane.editing}
            value={lane.name}
            onEdit={this.editName}
            onValueClick={() => dispatch(editLane(lane.id))}
          />

          <div className="lane-delete">
            <button onClick={() => dispatch(deleteLane(lane.id))}>X</button>
          </div>
        </div>

          <Notes
            notes={laneNotes || []}
            onValueClick={this.activateNoteEdit}
            onEdit={this.editNote}
            onDelete={this.deleteNote}
          />

      </div>
    );
  }
  addNote = (e) => {
    e.stopPropagation();
    const note = NoteActions.create({task: 'New task'});

    LaneActions.attachToLane({
      noteId: note.id,
      laneId: this.props.lane.id
    });
  };
  editNote(id, task) {
    NoteActions.update({id, task, editing: false});
  }
  deleteNote = (noteId, e) => {
    e.stopPropagation();
    LaneActions.detachFromLane({
      laneId: this.props.lane.id,
      noteId
    });
    NoteActions.delete(noteId);
  };
  editName = (name) => {
    console.log('EDIT_LANE_NAME');

    LaneActions.update({
      id: this.props.lane.id,
      editing: false,
      name
    });
  };
  // Ported to Redux
  deleteLane = () => {
    LaneActions.delete(this.props.lane.id);
  };
  activateLaneEdit = () => {
    console.log('EDIT_LANE');
    LaneActions.update({
      id: this.props.lane.id,
      editing: true
    });
  };
  activateNoteEdit = (id) => {
    console.log('EDIT_NOTE');
    NoteActions.update({
      editing: true,
      id
    });
  };
}

export default connect(
  state => ({
    notes: state.note.notes
  })
)(Lane);