/**
 * this is the main application component
 */

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Text>Hello World</Text>
    )
  }

  // _getJobs() {
  //   fetch('https://jobs.github.com/positions.json')
  //   .then((response) => response.json())
  //   .then((responseJson) => { console.log('helloo'); this.props.getJob(responseJson) })
  //   .catch((error) => {console.log(error)})
  // }
}

function mapStateToProps(state) {
  return {
    appState: state.appState,
    jobFeed: state.jobFeed
  }
}

export default connect(mapStateToProps, { getJob })(App)
