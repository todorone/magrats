import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

class SinglePostComment extends React.Component {
  static propTypes = {
    author: PropTypes.string,
    text: PropTypes.string,
  }

  state = {
    isExpanded: false,
  }

  render () {
    const { author, text } = this.props
    return (
      <View style={styles.topContainer}>
        <Text style={styles.text}>
          <Text style={styles.author}>{author} </Text>
          {text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginTop: 5,
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
