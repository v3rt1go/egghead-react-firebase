'use strict';
import React from 'react';

class UserProfileComponent extends React.Component {
  render() {
    return (
      <div className="colum">
        <h3 className="ui header">
          User profile
        </h3>
        <ui className="ui list">
          <div className="item">
            <div className="content">
              <div className="header">USERNAME</div>
              <div className="description">{this.props.username}</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header">BIO</div>
              <div className="description">{this.props.bio.name}</div>
            </div>
          </div>
        </ui>
      </div>            
    );
  }
}

export default UserProfileComponent;
