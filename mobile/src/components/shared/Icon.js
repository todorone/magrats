import React from 'react'
import PropTypes from 'prop-types'
import IonIcon from '@expo/vector-icons/Ionicons'

const Icon = ({ name, outline, ...props }) => {
  return (
    <IonIcon name={`ios-${name}${outline ? '-outline' : ''}`} {...props} />
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  outline: PropTypes.bool,
  style: PropTypes.any,
}

export default Icon
