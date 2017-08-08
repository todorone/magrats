import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { BLACK, BLUE, WHITE, LIGHTEST_GRAY, composeStyles } from '../styles'

export default class Button extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['primary', 'light'])
  }

  static defaultProps = {
    theme: 'light',
  }

  render () {
    const { theme } = this.props
    const containerStyle = composeStyles(
      styles.container,
      {
        [styles.primary]: (theme === 'primary'),
        [styles.light]: (theme === 'light'),
      }
    )
    const textStyle = composeStyles(
      styles.text,
      {
        [styles.lightText]: (theme === 'light'),
      }
    )

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
  }
})
