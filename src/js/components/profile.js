'use strict';
import React from 'react';
import ReposComponent from './github/repos';
import UserProfileComponent from './github/user-profile';
import NotesComponent from './notes/notes';
import Rebase from 're-base';

const firebase = Rebase.createClass('https://popping-torch-6916.firebaseio.com');

class ProfileComponent extends React.Component {
  constructor() {
    super();  
    this.state = {
      bio: {
        name: 'Alex Griciuc'
      },
      repos: ['a', 'b', 'c'],
      notes: [1, 2, 3]
    };
  }

  /**
   * We are creating a class method init that will handle creating the reference
   * to the firebase db and fetching initial data
   * TODO: Create a higher order component as a mixin to watch and update firebase
   * and components that need state from firebase
   */
  init() {
    // syncState creates a two way databinding between our component and the firebase
    // endpoint. When any of them updates, it lets the other one know of the changes.
    // The first argument passed to syncState is the RELATIVE path where the data is
    // stored in firebase for this component's context (ie: firebaseurl/:username)
    // The second argument is an options object as follows:
    // This basically acts like registering a listener to the dispatcher in case we
    // are working with flux
    this.ref = firebase.syncState(this.props.params.username, {
      // The context OBJECT of our component (ie: this)
      context: this,
      // If true returns data from the firebase endpoint as an array instead of an
      // object
      asArray: true,
      // The state property we want to sync with firebase - it expects to be from
      // this.state - it takes the property name as string (ie. this.state.notes)
      state: 'notes'
    });
  }

  componentDidMount() {
    this.init(); 
  }

  componentWillUnmount() {
    // When unmounting the component we have to unregister - remove the binding of
    // the listener to the firebase endpoint
    firebase.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="ui stackable grid">
        <div className="three column row">
          <UserProfileComponent username={this.props.params.username} bio={this.state.bio}/>
          {/* We need to pass username to our other components, event though we don't display
            it in the UI - it's needed to sync state with firebase */}
          <ReposComponent username={this.props.params.username} repos={this.state.repos}/>
          <NotesComponent username={this.props.params.username} notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}

export default ProfileComponent;
