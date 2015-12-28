'use strict';
import React from 'react';
import SearchGithub from './../components/search-github';

class DefaultTemplate extends React.Component {
  render() {
    return (
      <div>
        <SearchGithub />
        <div className="ui main container" style={{marginTop: '7em'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DefaultTemplate;
