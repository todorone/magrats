import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet } from 'react-native'

const Thumbnail = ({ src }) => (
  <Image source={{ uri: src }} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
})

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Thumbnail
