import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback, StyleSheet } from 'react-native'
import FadeInImage from '../shared/FadeInImage'

export default class DiscoverGridItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    onItemClick: PropTypes.func.isRequired,
  }

  onItemClick = () => this.props.onItemClick(this.props.id)

  render () {
    const { url, featured } = this.props
    return (
      <TouchableWithoutFeedback onPress={this.onItemClick}>
        <FadeInImage containerStyle={featured ? styles.featured : styles.image} source={{ uri: url }} />
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
