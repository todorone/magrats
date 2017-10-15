import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import Icon from './Icon'
import Thumbnail from './Thumbnail'
import { BLACK, DARK_GRAY, DARKEST_GRAY, GRAY, LIGHTEST_GRAY, WHITE } from '../styles'
import { getTimeAgo } from '../utils'

const SingleComment = ({ owner, text, date }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Thumbnail src={owner.thumbUrl} />
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              <Text style={styles.id}>{owner.id} </Text> {text}
            </Text>

            <View style={styles.info}>
              <Text style={styles.time}>{getTimeAgo(date)}</Text>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles.reply}>Reply</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <Icon name="heart" outline style={styles.buttonIcon} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: 'row',
    paddingLeft: 10,
    backgroundColor: WHITE,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 65,
    marginLeft: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: LIGHTEST_GRAY,
  },
  textContainer: {
    flex: 1,
  },
  id: {
    fontWeight: 'bold',
    color: BLACK,
  },
  text: {
    fontSize: 14,
    color: DARKEST_GRAY,
  },
  buttonIcon: {
    paddingTop: 10,
    paddingHorizontal: 18,
    fontSize: 15,
    color: DARK_GRAY,
  },
  info: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  time: {
    fontSize: 13,
    color: GRAY,
  },
  reply: {
    paddingHorizontal: 20,
    fontSize: 13,
    color: GRAY,
  },
})

SingleComment.propTypes = {
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
}

export default SingleComment
