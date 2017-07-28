import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StatusBar, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Left, Right, Body } from 'native-base'

import Icon from '../shared/Icon'
import { ALMOST_WHITE, LIGHTEST_GRAY } from '../styles'

const Header = ({ title, left = '', goBack }) => {
  return (
    <View>
      <StatusBar />

      <View style={styles.container}>
        <Left>
          {(left === 'back') &&
            <TouchableWithoutFeedback onPress={goBack}>
              <Icon style={styles.buttonIcon} name='arrow-back' />
            </TouchableWithoutFeedback>
          }
        </Left>

        <Body>
          <Text>{title}</Text>
        </Body>

        <Right />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'center',
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
