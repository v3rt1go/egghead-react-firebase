'use strict';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import DefaultTemplate from './../templates/default';
import HomeComponent from './../components/home';
import ProfileComponent from './../components/profile';

const routes = (
  <Route path="/" component={DefaultTemplate}>
    <IndexRoute component={HomeComponent} />
    <Route path="profile/:username" component={ProfileComponent} />
  </Route>
);

export default routes;
