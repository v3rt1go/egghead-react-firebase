'use strict';
import React from 'react';
import NotesListItem from './notes-list-item';

class NotesList extends React.Component {
  render() {
    const notes = this.props.notes.map((note, index) => {
      return <NotesListItem key={index} value={note} />;
    });

    return (
      <div className="ui relaxed divided list">
        {notes}
      </div>
    );
  }
}

export default NotesList;
