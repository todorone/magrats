import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Root from './src/components/Root'

export default class rnproto extends Component {
  render () {
    return (
      <Root />
    )
  }
}

AppRegistry.registerComponent('rnproto', () => rnproto)
