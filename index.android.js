import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// import the app storage which will run the app
import AppStorage from './src/appStorage'

class GitHubJobs extends Component {
  render() {
    return (
      <AppStorage/>
    )
  }
}

AppRegistry.registerComponent('GitHubJobs', () => GitHubJobs);
