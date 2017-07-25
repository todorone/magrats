import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'

import Thumbnail from '../shared/Thumbnail'
import { BLACK, GRAY, LIGHTEST_GRAY } from '../styles'

const ProfileInfo = ({ user }) => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.thumbnailContainer}>
          <Thumbnail big src={user.thumbUrl} />
        </View>
        <View style={styles.topRightContainer}>
          <View style={styles.metricsContainer}>
            <View style={styles.metricContainer}>
              <Text style={styles.bold}>1</Text>
              <Text style={styles.metric}>posts</Text>
            </View>
            <View style={styles.metricContainer}>
              <Text style={styles.bold}>6</Text>
              <Text style={styles.metric}>followers</Text>
            </View>
            <View style={styles.metricContainer}>
              <Text style={styles.bold}>12</Text>
              <Text style={styles.metric}>following</Text>
            </View>
          </View>
          <View style={styles.editButton}>
          </View>
        </View>
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
    // backgroundColor: 'lightblue',
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
    height: 35,
    backgroundColor: LIGHTEST_GRAY,
  }
})

ProfileInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
  })
}

export default ProfileInfo
