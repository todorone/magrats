import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Icon from '../shared/Icon'

import Thumbnail from '../shared/Thumbnail'

const SingleComment = ({ owner, text }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.topContainer}>
        <Thumbnail src={owner.thumbUrl} />
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={styles.id}>{owner.id} </Text> {text}
            </Text>

            <View style={styles.info}>
              <Text style={styles.time}>15h</Text>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles.reply}>Reply</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <Icon name='heart' outline style={styles.buttonIcon} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 65,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textContainer: {
    flex: 1,
  },
  id: {
    fontWeight: 'bold',
    color: '#000',
  },
  text: {
    fontSize: 14,
    color: '#111',
  },
  buttonIcon: {
    paddingTop: 10,
    paddingHorizontal: 18,
    fontSize: 15,
    color: '#666',
  },
  info: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  time: {
    fontSize: 13,
    color: '#999',
  },
  reply: {
    paddingHorizontal: 20,
    fontSize: 13,
    color: '#999',
  },
})

SingleComment.propTypes = {
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
}

export default SingleComment
