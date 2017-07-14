import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

const SinglePostComment = ({ author, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

SinglePostComment.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 0,
    paddingRight: 5,
  },
  text: {
    fontSize: 14,
  }
})

export default SinglePostComment
