'use strict';
import React from 'react';
import NotesList from './notes-list';
import AddNote from './add-note';

const NotesComponent = (props) => {
  return (
    <div className="column">
      <h3 className="ui header">Notes</h3>
      <AddNote addNote={props.addNote} />
      <NotesList notes={props.notes} />
    </div>
  );
};

NotesComponent.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default NotesComponent;
