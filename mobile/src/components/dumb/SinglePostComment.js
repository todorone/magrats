import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { GRAY } from '../styles'

export default class SinglePostComment extends React.Component {
  static propTypes = {
    author: PropTypes.string,
    text: PropTypes.string,
  }

  state = { isFull: false }

  showAll = () => this.setState({ isFull: true })

  renderText (text) {
    return ((text.length < 75) || this.state.isFull)
      ? text
      : (
        <Text>
          {text.substr(0, 70)}
          <Text onPress={this.showAll} style={styles.more}> more</Text>
        </Text>
      )
  }

  render () {
    const { author, text } = this.props
    return (
      <View style={styles.topContainer}>
        <Text style={styles.text}>
          <Text style={styles.author}>{author} </Text>
          {this.renderText(text)}
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
  },
  more: {
    color: GRAY,
  },
})
