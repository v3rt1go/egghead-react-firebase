'use strict';
import React from 'react';

class ReposComponent extends React.Component {
  render() {
    const repos = this.props.repos.map((repo, index) => {
      return (
        <div className="item" key={index}>
          <div className="content">
            {repo.html_url && <div className="header"><a href={repo.html_url} target="_blank">{repo.name}</a></div>}
            {repo.description}
          </div>
        </div>
      );
    });
    return (
      <div className="column">
        <h3 className="ui header">Repositories</h3>
        <div className="ui inverted segment">
          <div className="ui inverted relaxed divided list">
            {repos}
          </div>
        </div>
      </div>
    );
  }
}

ReposComponent.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

export default ReposComponent;
