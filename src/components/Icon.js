import React from 'react'
import PropTypes from 'prop-types'
import IonIcon from '@expo/vector-icons/Ionicons'

const Icon = ({ name, ios = true, outline, ...props }) => {
  return (
    <IonIcon name={`${ios ? 'ios-' : ''}${name}${outline ? '-outline' : ''}`} {...props} />
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  ios: PropTypes.bool,
  outline: PropTypes.bool,
  style: PropTypes.any,
}

export default Icon
