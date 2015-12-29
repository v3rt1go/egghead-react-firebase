'use strict';
import React from 'react';

const NotesListItem = (props) => {
  return (
    <div className="item">
      <div className="right floated content">
      <div className="ui icon circular negative mini button">
          <i className="minus icon"></i>
        </div>
      </div>
      <i className="large comments middle aligned icon"></i>
      <div className="content">
        {props.value}
      </div>
    </div> 
  );
};

export default NotesListItem;
