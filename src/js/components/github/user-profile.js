'use strict';
import React from 'react';

class UserProfileComponent extends React.Component {
  render() {
    return (
      <div className="colum">
        <h3 className="ui header">
          User profile
        </h3>
        <ui className="ui relaxed divided list">
          <div className="item">
            <div className="content">
              <div className="header">{this.props.username}'s Profile</div>
              <div className="description"></div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              {this.props.bio.avatar_url && <img src={this.props.bio.avatar_url} className="ui medium rounded image"/>}
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header">
                Additional info
              </div>
              <div className="description">
                <div className="ui list">
                  {this.props.bio.name && <div className="item"><strong>Name:</strong> {this.props.bio.name}</div>}
                  {this.props.bio.login && <div className="item"><strong>Login:</strong> {this.props.bio.login}</div>}
                  {this.props.bio.email && <div className="item"><strong>email:</strong> {this.props.bio.email}</div>}
                  {this.props.bio.location && <div className="item"><strong>location:</strong> {this.props.bio.location}</div>}
                  {this.props.bio.company && <div className="item"><strong>company:</strong> {this.props.bio.company}</div>}
                  {this.props.bio.followers && <div className="item"><strong>followers:</strong> {this.props.bio.followers}</div>}
                  {this.props.bio.following && <div className="item"><strong>following:</strong> {this.props.bio.following}</div>}
                </div>
              </div>
            </div>
          </div>
        </ui>
      </div>            
    );
  }
}

UserProfileComponent.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfileComponent;
