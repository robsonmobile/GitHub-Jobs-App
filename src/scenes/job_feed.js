/**
 * this is the job feed tab
 */

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

class JobFeed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Text>Job Feed Area</Text>
    )
  }
}

function mapStateToProps(state) {
  return {
    appState: state.appState,
    jobFeed: state.jobFeed
  }
}

export default connect(mapStateToProps)(JobFeed)
