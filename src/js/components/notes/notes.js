'use strict';
import React from 'react';
import NotesList from './notes-list';
import AddNote from './add-note';

class NotesComponent extends React.Component {
  render() {
    return (
      <div className="column">
        <h3 className="ui header">Notes</h3>
        <AddNote addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
}

NotesComponent.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default NotesComponent;
