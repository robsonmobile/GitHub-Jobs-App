/**
 * this is the main application component
 * this renders the swipe tab
 * also handle back button for Android
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  BackAndroid
} from 'react-native'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)

    this._handleHardwareBackButton = this._handleHardwareBackButton.bind(this)
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleHardwareBackButton)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleHardwareBackButton)
  }

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

  _handleHardwareBackButton() {
    const { navigator } = this.props
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop()
        return true
    }
  }
}

function mapStateToProps(state) {
  return {
    appState: state.appState,
    jobFeed: state.jobFeed
  }
}

export default connect(mapStateToProps)(App)
