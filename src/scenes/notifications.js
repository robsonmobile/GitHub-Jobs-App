/**
 * this is the notifications tab
 */

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

class Notifications extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Text>Notifications Area</Text>
    )
  }
}

function mapStateToProps(state) {
  return {
    appState: state.appState
  }
}

export default connect(mapStateToProps)(Notifications)
