import React, {Component} from 'react';
import Note from './Note';

export default ({notes, onEdit, onDelete}) => {
  return (
    <ul className="notes">{notes.map((note) => {
      return (
        <li className="note" key={note.id}>
          <Note task={note.task} />
        </li>
      );
    })}
    </ul>
  );
}