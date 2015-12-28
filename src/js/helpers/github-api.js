'use strict';
import axios from 'axios';

/**
 * Returns a promis for a list of user's repos from github based on the 
 * username as a parameter
 */
function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

/** 
 * Returns a Promis of a user's personal info from the github api based on 
 * the username parameter
 */
function getUserProfile(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}


const gitHubApi = {
  /**
   * Using axios.all executes all guthub functions from above in parallel and
   * returns when both promises have fulfilled. This way we know that we'll have
   * all the data from one call to this helper method
   */
  getUserData(username) {
    return axios.all([getRepos(username), getUserProfile(username)])
      .then((dataArray) => ({repos: dataArray[0].data, bio: dataArray[1].data}));
  }
};

export default gitHubApi;
