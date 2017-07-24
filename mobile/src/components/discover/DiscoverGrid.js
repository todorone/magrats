import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import DiscoverGridItem from './DiscoverGridItem'

const DiscoverGrid = ({ feed, onItemClick }) => {
  return ((feed.length > 0) &&
    <View style={styles.container}>
      <DiscoverGridItem featured id={feed[0].id} url={feed[0].url} onItemClick={onItemClick} />

      {feed.map((post, index) => ((index > 1) &&
        <DiscoverGridItem id={post.id} url={post.url} onItemClick={onItemClick} key={post.id} />
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
})

DiscoverGrid.propTypes = {
  feed: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default DiscoverGrid
