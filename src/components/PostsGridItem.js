import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import FadeInImage from './FadeInImage'

export default class PostsGridItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    url: PropTypes.string,
    featured: PropTypes.bool,
    fake: PropTypes.bool,
    onItemClick: PropTypes.func,
  }

  onItemClick = () => this.props.onItemClick(this.props.id)

  render() {
    const { url, featured, fake } = this.props

    return fake ? (
      <View style={styles.image} /> // Used for correct grid alignment on last row
    ) : (
      <TouchableWithoutFeedback onPress={this.onItemClick}>
        <FadeInImage
          containerStyle={featured ? styles.featured : styles.image}
          source={{ uri: url }}
        />
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '33%',
    height: 100,
    marginBottom: 1,
  },
  featured: {
    width: '100%',
    height: 200,
    marginBottom: 1,
  },
})
