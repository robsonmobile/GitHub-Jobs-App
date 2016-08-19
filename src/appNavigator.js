/**
 * this is the application Navigator component
 * it is used to configure the navigator
 */

import React, { Component } from 'react'
import { Navigator } from 'react-native'

import App from './app'

export default class AppNavigator extends Component {
  constructor(props) {
    super(props)

    this.routes = [
      { view: App },
    ]
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={this.routes[0]}
        initialRouteStack={this.routes}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    )
  }

  renderScene(route, navigator) {
    return <route.view navigator={navigator} {...route}/>
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromRight
  }
}
