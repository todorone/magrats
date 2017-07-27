import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

import Thumbnail from '../shared/Thumbnail'
import Button from '../shared/Button'
import { BLACK, BLUE, DARKEST_GRAY, GRAY } from '../styles'

const ProfileInfo = ({ user, editProfile }) => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.thumbnailContainer}>
          <Thumbnail big src={user.thumbUrl} />
        </View>
        <View style={styles.topRightContainer}>
          <View style={styles.metricsContainer}>
            <View style={styles.metricContainer}>
              <Text style={styles.bold}>{user.posts.length}</Text>
              <Text style={styles.metric}>posts</Text>
            </View>
            <View style={styles.metricContainer}>
              <Text style={styles.bold}>{user.followers.length}</Text>
              <Text style={styles.metric}>followers</Text>
            </View>
            <View style={styles.metricContainer}>
              <Text style={styles.bold}>{user.following.length}</Text>
              <Text style={styles.metric}>following</Text>
            </View>
          </View>
          <View style={styles.editButton}>
            <Button onPress={editProfile}>Edit Profile</Button>
          </View>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.id}>@{user.id}</Text>
        <Text style={styles.description}>{user.description}</Text>
        <Text style={styles.homePage}>{user.homePage.replace(/^https?:\/\//, '')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
  },
  thumbnailContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  topRightContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  metricsContainer: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  metricContainer: {
    flex: 1,
  },
  bold: {
    position: 'relative',
    top: 3,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: BLACK,
  },
  metric: {
    paddingBottom: 6,
    textAlign: 'center',
    color: GRAY,
  },
  editButton: {
    flex: 1,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 15,
  },
  id: {
    paddingBottom: 2,
    fontWeight: 'bold',
  },
  description: {
    paddingBottom: 2,
    color: DARKEST_GRAY,
  },
  homePage: {
    paddingBottom: 2,
    color: BLUE,
  },
})

ProfileInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    homePage: PropTypes.string.isRequired,
    following: PropTypes.array.isRequired,
    followers: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
  }),
  editProfile: PropTypes.func.isRequired,
}

export default ProfileInfo
