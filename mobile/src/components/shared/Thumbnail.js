import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

const Thumbnail = ({ src }) => {
  return (
    <Image
      source={{ uri: src }}
      style={{ width: 50, height: 50, borderRadius: 25 }}
    />
  )
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Thumbnail
