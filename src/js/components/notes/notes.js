'use strict';
import React from 'react';

class NotesComponent extends React.Component {
  render() {
    return (
      <div className="column">
        <h3 className="ui header">Notes</h3>
        NOTES: {this.props.notes}
      </div>
    );
  }
}

export default NotesComponent;
