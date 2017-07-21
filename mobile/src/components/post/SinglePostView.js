import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Icon from '../shared/Icon'
import SinglePostComment from './SinglePostComment'
import { getTimeAgo } from '../../utils'

const SinglePostView = ({
  owner,
  photoUrl,
  isLiked,
  likesNumber,
  onTapLike,
  description,
  location,
  comments,
  commentsNumber,
  showComments,
  showLikes,
  date,
}) => {
  return (
    <View>
      {/* Top bar */}
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image
            source={{ uri: owner.thumbUrl }}
            style={styles.topThumbnail}
          />
          <Text style={styles.id}>
            {owner.id}
            {location &&
              <Text style={styles.location}>{`\n${location}`}</Text>
            }
          </Text>
        </View>
        {/* <Text style={styles.ellipsis}>...</Text> */}
      </View>
      {/* Main content */}
      <Image source={{ uri: photoUrl }} style={styles.content} />
      {/* Footer */}
      <View style={styles.footer}>
        {/* Like & Comment buttons */}
        <View style={styles.buttons}>
          <View style={styles.likes}>
            <TouchableWithoutFeedback onPress={onTapLike}>
              <Icon name='heart' outline={!isLiked} style={styles.buttonIcon} />
            </TouchableWithoutFeedback>
            {(likesNumber > 0) &&
              <TouchableWithoutFeedback onPress={showLikes}>
                <View>
                  <Text style={styles.likesNumber}>{likesNumber}</Text>
                </View>
              </TouchableWithoutFeedback>
            }
          </View>
          <TouchableWithoutFeedback onPress={showComments}>
            <Icon style={styles.buttonIcon} name='text' outline />
          </TouchableWithoutFeedback>
        </View>
        {/* Description */}
        <SinglePostComment author={owner.id} text={description} />
        {/* Comments */}
        {comments.map((comment, i) => (
          <SinglePostComment author={comment.owner} text={comment.text} key={i} />
        ))}

        {(commentsNumber > 2) &&
          <TouchableWithoutFeedback onPress={showComments}>
            <View>
              <Text style={styles.commentsLink}>View all {commentsNumber} comments</Text>
            </View>
          </TouchableWithoutFeedback>
        }

        <View style={styles.time}>
          <Icon style={styles.timeIcon} name='time' outline />
          <Text style={styles.timeText}>{getTimeAgo(date).toUpperCase()}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: { // TOP BAR
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 10,
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  topThumbnail: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  id: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 10,
  },
  location: {
    fontWeight: 'normal',
    color: '#999',
  },
  ellipsis: {
    fontSize: 28,
    color: '#000',
    paddingLeft: 6,
    position: 'relative',
    top: -8
  }, // MAIN CONTENT
  content: {
    width: '100%',
    height: 300
  }, // FOOTER
  footer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  buttons: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonIcon: {
    fontSize: 35,
    color: '#000',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesNumber: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    fontSize: 18,
    fontWeight: '100',
  },
  commentsLink: {
    fontSize: 14,
    color: '#888',
    paddingTop: 7,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
  },
  timeIcon: {
    fontSize: 12,
  },
  timeText: {
    fontSize: 11,
    color: '#888',
    paddingLeft: 4,
  },
})

SinglePostView.propTypes = {
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
  }).isRequired,
  photoUrl: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likesNumber: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string,
  comments: PropTypes.array.isRequired,
  commentsNumber: PropTypes.number.isRequired,
  showComments: PropTypes.func.isRequired,
  showLikes: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
}

export default SinglePostView
