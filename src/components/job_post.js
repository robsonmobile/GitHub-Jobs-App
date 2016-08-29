import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import {styles} from './job_post_styles'

export default class JobPost extends Component {
  render() {
    const {
      jobTitle,
      companyName,
      location,
      id
    } = this.props

    return (
      <TouchableWithoutFeedback onPress={this._handlePress.bind(this)}>
        <View style={styles.container}>
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>{jobTitle}</Text>
            <Text style={styles.subTitle}>{companyName} - {location}</Text>
          </View>
          <View style={styles.arrowContainer}>
            <Icon name="chevron-small-right" size={24} color="#bdc3c7"/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _handlePress() {
    this.props.onPressJobPost(this.props.detail)
  }
}
