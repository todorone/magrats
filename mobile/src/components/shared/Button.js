import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { Button as NBButton } from 'native-base'

const Button = ({ children, onPress }) => {
  return (
    <View>
      <NBButton rounded primary small onPress={onPress}>
        {children}
      </NBButton>
    </View>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType(PropTypes.string, PropTypes.element),
  onPress: PropTypes.func.isRequired,
}

export default Button
