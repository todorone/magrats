import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { BLACK, BLUE, WHITE, LIGHTEST_GRAY } from '../styles'

export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['primary', 'light']),
  }

  static defaultProps = {
    theme: 'light',
  }

  render() {
    const { theme } = this.props
    const containerStyle = [
      styles.container,
      theme === 'primary' && styles.primary,
      theme === 'light' && styles.light,
    ]
    const textStyle = [styles.text, theme === 'light' && styles.lightText]

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={containerStyle}>
          <Text style={textStyle}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  text: {
    color: WHITE,
    textAlign: 'center',
  },
  primary: {
    borderColor: BLUE,
    backgroundColor: BLUE,
  },
  light: {
    borderColor: LIGHTEST_GRAY,
    backgroundColor: WHITE,
  },
  lightText: {
    color: BLACK,
  },
})
