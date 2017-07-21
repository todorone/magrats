import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Header, Left, Right, Body } from 'native-base'

import Icon from '../shared/Icon'

const SimpleHeader = ({ title, left = '', goBack }) => {
  return (
    <Header>
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
    </Header>
  )
}

const styles = StyleSheet.create({
  buttonIcon: {
    padding: 5,
    fontSize: 28,
  }
})

SimpleHeader.propTypes = {
  left: PropTypes.string,
  title: PropTypes.string,
  goBack: PropTypes.func,
}

export default SimpleHeader
