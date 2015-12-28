'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class AddNote extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      error: false
    };

    this.submit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // TODO: Enable client side form validations
    //$('.validated').form({
      //on: 'blur',
      //fields: {
        //note: 'empty'
      //} 
    //});
  }

  handleSubmit(e) {
    if (e) e.preventDefault();

    const newNote = ReactDOM.findDOMNode(this.refs.note);
    console.log("new note is", newNote.value);
    this.props.addNote(newNote.value);
    newNote.value = '';
  }

  render() {
    return (
      <form className="ui form validated" ref="addNoteForm">
        <div className="ui fluid action input field">
          <input name="note" type="text" placeholder="Add new note" ref="note" />
          <button className="ui icon positive button" onClick={this.submit} ref="addNoteButton" >
            <i className="plus icon"></i>
          </button>
        </div>
      </form>
    );
  }
}

AddNote.propTypes = {
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;
