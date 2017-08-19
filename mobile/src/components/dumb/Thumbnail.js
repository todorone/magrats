import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet } from 'react-native'

const Thumbnail = ({ src, big = false }) => {
  return (
    <Image
      source={{ uri: src }}
      style={big ? styles.imageBig : styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imageBig: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
})

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  big: PropTypes.bool,
}

export default Thumbnail
