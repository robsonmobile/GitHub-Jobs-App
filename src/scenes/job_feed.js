/**
 * this is the job feed tab
 */

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { styles } from './job_feed_styles'
import JobPost from '../components/job_post'

class JobFeed extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.waitMsg}>
          Please wait... Fetching the job feed.
        </Text> */}

        <View style={{flex: 1}}>
          <JobPost
          jobTitle="FizzBuzz Computer Analyst"
          companyName="SomeCompany Inc."
          location="Earth"
          id="someId"
          onPressJobPost={this._handleJobPress.bind(this)}
          />
          <JobPost
          jobTitle="FizzBuzz Computer Analyst"
          companyName="SomeCompany Inc."
          location="Earth"
          id="awesomeJob"
          onPressJobPost={this._handleJobPress.bind(this)}
          />
        </View>
      </View>
    )
  }

  _handleJobPress(id) {
    console.log(id)
  }
}

function mapStateToProps(state) {
  return {
    appState: state.appState,
    jobFeed: state.jobFeed
  }
}

export default connect(mapStateToProps)(JobFeed)
