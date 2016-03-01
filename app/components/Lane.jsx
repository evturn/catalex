import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import Notes from './Notes.jsx';
import Editable from './Editable';
import { createNote, updateNote, deleteNote } from '../actions/note';
import {
  detachFromLane, updateLane,
  deleteLane, attachToLane } from '../actions/lane';

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if (!targetProps.lane.notes.length) {
      attachToLane({
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
  constructor(props) {
    super(props);
  }
  render() {
    const { connectDropTarget, lane, ...props } = this.props;

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
            onValueClick={this.activateLaneEdit}
          />

          <div className="lane-delete">
            <button onClick={this.deleteLane}>X</button>
          </div>
        </div>

        <Notes
          onValueClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
      </div>
    );
  }

  addNote = (e) => {
    e.stopPropagation();
    const { dispatch, lane } = this.props;

    const note = dispatch(createNote());
    console.log(note);
    dispatch(attachToLane(lane))
  };

  editNote(id, task) {
    NoteActions.update({id, task, editing: false});
  }

  deleteNote = (noteId, e) => {
    e.stopPropagation();
    detachFromLane({
      laneId: this.props.lane.id,
      noteId
    });
    NoteActions.delete(noteId);
  };

  editName = name => {
    const lane = {
      id: this.props.lane.id,
      editing: false,
      name
    };

    updateLane(lane);
  };

  deleteLane = () => {
    deleteLane(this.props.lane);
  };

  activateLaneEdit = () => {
    const lane = {
      id: this.props.lane.id,
      editing: true
    };

    updateLane(lane);
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
  lane: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return {
    lane: state.lane.lane
  };
}

export default connect(mapStateToProps)(Lane);