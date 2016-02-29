import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import Editable from './Editable';
import { move } from '../actions/lane';

class Notes extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const {
      notes, onValueClick,
      onEdit, onDelete } = this.props;

    return (
      <ul className="notes">{notes.map(note =>
        <Note
          className="note"
          key={note.id}
          id={note.id}
          editing={note.editing}
          onMove={move}>
          <Editable
            editing={note.editing}
            value={note.task}
            onValueClick={onValueClick.bind(null, note.id)}
            onEdit={onEdit.bind(null, note.id)}
            onDelete={onDelete.bind(null, note.id)}
          />
        </Note>
      )}</ul>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.array
};

function mapStateToProps(state) {
  return {
    notes: state.note.notes
  };
}

export default connect(mapStateToProps)(Notes);