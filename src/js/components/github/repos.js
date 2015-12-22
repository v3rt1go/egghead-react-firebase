'use strict';
import React from 'react';

class ReposComponent extends React.Component {
  render() {
    return (
      <div className="column">
        <h3 className="ui header">Repositories</h3>
        REPOS: {this.props.repos}
      </div>
    );
  }
}

export default ReposComponent;
