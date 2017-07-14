import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Container, Header, Title, Content, Button, Left, Right, Item, } from 'native-base'

import Icon from '../shared/Icon'
import SinglePostComment from './SinglePostComment'

const SinglePostView = ({
  name,
  photoUrl,
  thumbnailUrl,
  isLiked,
  likesNumber,
  onTapLike,
  comments,
  showComments,
  date,
}) => {
  return (
    <View>
      {/*Top bar*/}
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <Image
            source={{ uri: thumbnailUrl }}
            style={styles.topThumbnail}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.ellipsis}>...</Text>
      </View>
      {/*Main content*/}
      <Image source={{ uri: photoUrl }} style={styles.content} />
      {/*Footer*/}
      <View style={styles.footer}>
        {/*Like & Comment buttons*/}
        <View style={styles.buttons}>
          <View style={styles.likes}>
            <TouchableWithoutFeedback onPress={onTapLike}>
              <Icon name='heart' outline={!isLiked} style={styles.buttonIcon} />
            </TouchableWithoutFeedback>
            {(likesNumber > 0) &&
              <Text style={styles.likesNumber}>{likesNumber}</Text>
            }
          </View>
          <TouchableWithoutFeedback>
            <Icon style={styles.buttonIcon} name='text' outline />
          </TouchableWithoutFeedback>
        </View>
        {/*Comments*/}
        {comments.map((text, i) => (
          <SinglePostComment author='Andrew R.' text={text} key={i} />
        ))}

        <TouchableWithoutFeedback onPress={showComments}>
          <View>
            <Text style={styles.commentsLink}>View all {comments.length} comments</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.time}>
          <Icon style={styles.timeIcon} name='time' outline />
          <Text style={styles.timeText}>56 MINUTES AGO</Text>
        </View>
      </View>
    </View>
  )
}

SinglePostView.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  isLiked: PropTypes.bool,
  likesNumber: PropTypes.number,
  onLike: PropTypes.func,
  comments: PropTypes.array,
  showComments: PropTypes.func,
  date: PropTypes.number,
}

export default SinglePostView

const styles = StyleSheet.create({
  topBar: { // TOP BAR
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 10,
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  topThumbnail: {
    width: 26,
    height: 26,
    borderRadius:13
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 6
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
    paddingLeft: 8,
    fontSize: 16,
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
