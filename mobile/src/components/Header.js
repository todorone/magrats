import React from 'react'
import { View, Text, StatusBar, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

import Icon from './Icon'
import { ALMOST_WHITE, LIGHTEST_GRAY } from '../styles'

const Header = ({ title, left }) => {
  return (
    <View>
      <StatusBar />

      <View style={styles.container}>
        <View>
          {(left === 'back') &&
            <TouchableWithoutFeedback onPress={Actions.pop}>
              <Icon style={styles.buttonIcon} name='arrow-back' />
            </TouchableWithoutFeedback>
          }
        </View>

        {title &&
          <View>
            <Text>{title}</Text>
          </View>
        }

        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LIGHTEST_GRAY,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: ALMOST_WHITE,
  },
  buttonIcon: {
    padding: 5,
    fontSize: 28,
  }
})

Header.propTypes = {
  left: PropTypes.string,
  title: PropTypes.string,
}

export default Header
