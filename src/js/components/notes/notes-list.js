'use strict';
import React from 'react';
import NotesListItem from './notes-list-item';

const NotesList = (props) => {
  const notes = props.notes.map((note, index) => {
    return <NotesListItem key={index} value={note} />;
  });

  return (
    <div className="ui relaxed divided list">
      {notes}
    </div>
  );
};

export default NotesList;
