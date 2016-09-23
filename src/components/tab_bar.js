import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native'

import {styles} from './tab_bar_styles'

export default class TabBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>GitHub Jobs</Text>
        </View>
        <View style={styles.tabBarContainer}>
          {this.props.tabs.map((tab, i) => {
            return (
              <TouchableWithoutFeedback  key={tab} onPress={() => this.props.goToPage(i)}>
                <View style={styles.eachTabContainer}>

                  {this.props.activeTab === i ?
                    <Text style={[styles.tabTitle, styles.titleActive]}>{tab}</Text>
                  : <Text style={[styles.tabTitle]}>{tab}</Text> }

                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </View>
      </View>
    )
  }
}
