'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'react-router';

class SearchGithub extends React.Component {
  constructor() {
    super();
    this.submit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    if (e) e.preventDefault();

    const username = ReactDOM.findDOMNode(this.refs.username).value; 
    ReactDOM.findDOMNode(this.refs.username).value = '';
    // After embedding the history object in our component's context - see below -
    // we can pushState (navigate with browser history support) to the profile component
    // with the given username
    this.context.history.pushState(null, '/profile/' + username);
  }

  render() {
    return (
      <div className="ui menu fixed">
        <div className="ui container" style={{padding: 10}}>
          <form className="ui form fluid" style={{width: '80%', margin: '0 auto'}}>
            <div className="ui transparent action input">
              <input type="text" placeholder="Search..." ref="username" />
              <button className="ui icon button" onClick={this.submit}>
                <i className="search icon"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// Normally, history usage with react-router is used as a mixin. Since we're using ES6
// classes we don't have mixins, so we have to inject the history obj in our component's
// context. There are other options - including creating a higher order component - TODO -
// more info: https://github.com/rackt/react-router/blob/latest/docs/API.md#history-mixin
SearchGithub.contextTypes = {
  history: PropTypes.history
};

export default SearchGithub;
