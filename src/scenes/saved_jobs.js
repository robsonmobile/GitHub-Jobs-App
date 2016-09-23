/**
 * this is the saved jobs tab
 */

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

class SavedJobs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Text>Saved Jobs Area</Text>
    )
  }
}

function mapStateToProps(state) {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps)(SavedJobs)
