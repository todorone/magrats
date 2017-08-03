import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StatusBar, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import Icon from '../shared/Icon'
import { ALMOST_WHITE, LIGHTEST_GRAY } from '../styles'

const Header = ({ title, left = '', goBack }) => {
  return (
    <View>
      <StatusBar />

      <View style={styles.container}>
        <View>
          {(left === 'back') &&
            <TouchableWithoutFeedback onPress={goBack}>
              <Icon style={styles.buttonIcon} name='arrow-back' />
            </TouchableWithoutFeedback>
          }
        </View>

        <View>
          <Text>{title}</Text>
        </View>

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
    borderBottomWidth: 1,
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
  goBack: PropTypes.func,
}

export default Header
