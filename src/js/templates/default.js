'use strict';
import React from 'react';

class DefaultTemplate extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui two item top menu">
          <div className="item">
            <p>GitHub Notes</p>
          </div>
          <div className="item">
            <div className="ui large icon input">
              <input type="text" placeholder="GitHub username" />
              <i className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="ui container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DefaultTemplate;
