import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

import GridItem from './GridItem'

const Grid = ({ posts, onItemClick }) => {
  return ((posts.length > 0) &&
    <View style={styles.topContainer}>
      {posts.map(post =>
        <GridItem id={post.id} url={post.url} onItemClick={onItemClick} key={post.id} />
      )}
      {/* Used for correct grid alignment on last row */}
      {(Number.isInteger((posts.length - 2) / 3)) && <GridItem fake />}
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})

Grid.propTypes = {
  posts: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default Grid
