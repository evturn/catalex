import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import AltContainer from 'alt-container';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import LaneActions from '../actions/LaneActions';
import { deleteLane, editLane, updateLane, createNote } from '../actions/lane';

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
    const { dispatch, id, notes, name, editing, allNotes, connectDropTarget, ...props } = this.props;
    const [laneNotes] = notes.map(id => allNotes.filter(note => id === note.id));

    return connectDropTarget(
      <div {...props}>
        <div className="lane-border" />
        <div className="lane-header">
          <div className="lane-add-note">
            <button onClick={() => dispatch(createNote(id).bind(this))}>+</button>
          </div>

          {editing ? (
            <input
              className="lane-name"
              type="text"
              autoFocus={true}
              placeholder={name}
              onBlur={e => dispatch(updateLane({e, id}).bind(this))}
              onClick={() => dispatch(editLane(id).bind(this))}
            />
          ) : (
            <div onClick={() => dispatch(editLane(id))}>
              <span className="value">{name}</span>
            </div>
          )}

          <div className="lane-delete">
            <button onClick={() => dispatch(deleteLane(id))}>X</button>
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
      laneId: this.props.id
    });
  };
  editNote(id, task) {
    NoteActions.update({id, task, editing: false});
  }
  deleteNote = (noteId, e) => {
    e.stopPropagation();
    LaneActions.detachFromLane({
      laneId: this.props.id,
      noteId
    });
    NoteActions.delete(noteId);
  };
  editName = (name) => {
    console.log('EDIT_LANE_NAME');

    LaneActions.update({
      id: this.props.id,
      editing: false,
      name
    });
  };
  // Ported to Redux
  deleteLane = () => {
    LaneActions.delete(this.props.id);
  };
  // Ported to Redux
  activateLaneEdit = () => {
    console.log('EDIT_LANE');
    LaneActions.update({
      id: this.props.id,
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

Lane.propTypes = {
  id: PropTypes.string,
  notes: PropTypes.array,
  editing: PropTypes.bool,
  name: PropTypes.string,
  dispatch: PropTypes.func
};

export default connect(
  state => ({
    allNotes: state.note.notes
  })
)(Lane);
