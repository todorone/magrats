import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet } from 'react-native'

const DiscoverGrid = ({ feed }) => {
  // console.error(feed[0])
  return (
    <View style={styles.container}>
      <Image style={styles.featured} source={{ uri: feed[0].url }} />
      {feed.map(post => (
        <Image style={styles.image} source={{ uri: post.url }} key={post.id} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featured: {
    width: '100%',
    height: 200,
    marginBottom: 1,
  },
  image: {
    width: '33%',
    height: 100,
    marginBottom: 1,
  },
})

DiscoverGrid.propTypes = {
  // feed: PropTypes.arrayOf({
  //   owner: PropTypes.string.isRequired,
  //   url: PropTypes.string.isRequired,
  //   likes: PropTypes.array.isRequired,
  //   comments: PropTypes.array.isRequired,
  //   published: PropTypes.number.isRequired,
  // }).isRequired,
}

export default DiscoverGrid
