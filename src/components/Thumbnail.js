import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet } from 'react-native'

export default class Thumbnail extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    big: PropTypes.bool,
  }

  render() {
    return (
      <Image
        source={{ uri: this.props.src }}
        style={this.props.big ? styles.imageBig : styles.image}
      />
    )
  }
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
