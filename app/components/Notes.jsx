import React from 'react';
import Note from './Note';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';

export default props => {
  const {
    notes, onValueClick, onEdit, onDelete } = props;

  return (
    <ul className="notes">{notes.map(note =>
      <Note
        className="note"
        key={note.id}
        id={note.id}
        editing={note.editing}
        onMove={LaneActions.move}>
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