/**
 * this is the main application component
 * this renders the swipe tab
 * also handle back button for Android
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  BackAndroid,
  Platform
} from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'

// import tab scenes
import JobFeed from './scenes/job_feed'
import SavedJobs from './scenes/saved_jobs'
import Notifications from './scenes/notifications'

// import the tabbar to use as custom tab bar
import TabBar from './components/tab_bar'


class App extends Component {
  constructor(props) {
    super(props)

    this._handleHardwareBackButton = this._handleHardwareBackButton.bind(this)
  }

  componentWillMount() {
    if(Platform.OS !== 'ios') {
      BackAndroid.addEventListener('hardwareBackPress', this._handleHardwareBackButton)
    }
  }

  componentWillUnmount() {
    if(Platform.OS !== 'ios') {
      BackAndroid.removeEventListener('hardwareBackPress', this._handleHardwareBackButton)
    }
  }

  render() {
    platformSpecificStyle = (Platform.OS === 'ios') ? { paddingTop: 15 } : { paddingTop: 0 }
    return (
      <ScrollableTabView
      renderTabBar={() => <TabBar />}
      style={platformSpecificStyle}>
        <JobFeed tabLabel="Job Feed" />
        <SavedJobs tabLabel="Saved Jobs" />
        <Notifications tabLabel="Notifications" />
      </ScrollableTabView>
    )
  }

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
