/**
 * this is the job feed tab
 */

import React, { Component } from 'react'
import {
  Text,
  View,
  ListView,
  TouchableWithoutFeedback
} from 'react-native'
import _ from 'lodash'
import { connect } from 'react-redux'
import { styles } from './job_feed_styles'
import JobPost from '../components/job_post'
import { setJobFeed, setMoreJobFeed } from '../actions'

class JobFeed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feedPage: 1,
      loadMoreJobMessage: 'Please wait. Loading more jobs...'
    }
  }

  componentDidMount() {
    this._getJobs()
  }

  render() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.jobFeed)

    return (
      <View style={styles.container}>
        {(this.props.jobFeed.length > 0) ?
          <View style={{flex: 1}}>
            <ListView
            dataSource={dataSource}
            enableEmptySections={true}
            renderFooter={this._listFooter.bind(this)}
            onEndReached={_.debounce(this._getMoreJobs.bind(this), 3000)}
            renderRow={(data) =>
              <JobPost
              jobTitle={data.title}
              companyName={data.company}
              location={data.location}
              id={data.id}
              onPressJobPost={this._handleJobPress.bind(this)}
              />
            }
            />
          </View>
        :
          <Text style={styles.waitMsg}>
            Please wait... Fetching the job feed.
          </Text>
        }
      </View>
    )
  }

  _listFooter() {
    return (
      <View style={styles.endOfTheList}>
        <Text style={styles.endOfTheListText}>{this.state.loadMoreJobMessage}</Text>
      </View>
    )
  }

  _handleJobPress(id) {
    console.log(id)
  }

  // initially fetch the job posts
  _getJobs() {
    fetch('https://jobs.github.com/positions.json')
    .then((response) => response.json())
    .then((responseJson) => { this.props.setJobFeed(responseJson) })
    .catch((error) => {console.log(error)})
  }

  // fetch next job posts if reached the end
  _getMoreJobs() {
    this.setState({ loadMoreJobMessage: 'Please wait. Loading more jobs...' })
    console.log('getMoreJobsCalled!')

    fetch(`https://jobs.github.com/positions.json?page=${this.state.feedPage}`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      if (responseJson.length != 0) {
        const nextPage = this.state.feedPage + 1
        this.setState({
          feedPage: nextPage
        })
        this.props.setMoreJobFeed(responseJson)
      } else {
        this.setState({
          loadMoreJobMessage: 'You have reached at the end of the list.'
        })
      }
    })
    .catch((error) => {console.log(error)})
  }
}

function mapStateToProps(state) {
  return {
    appState: state.appState,
    jobFeed: state.jobFeed
  }
}

export default connect(mapStateToProps, {setJobFeed, setMoreJobFeed})(JobFeed)
