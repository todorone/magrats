import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Button from '../shared/Button'

import Thumbnail from '../shared/Thumbnail'

const SingleLike = ({ owner, goToProfile, switchFollow }) => {
  return (
    <TouchableWithoutFeedback onPress={goToProfile}>
      <View style={styles.container}>
        <Thumbnail src={owner.thumbUrl} />
        <View style={styles.infoContainer}>
          <Text style={styles.id}>{owner.id}</Text>
          <Text style={styles.name}>{owner.name}</Text>
        </View>
        <Button onPress={switchFollow}>
          <Text style={styles.buttonText}>Follow</Text>
        </Button>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  id: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    color: '#999',
  },
  buttonText: {
    color: '#fff',
  }
})

SingleLike.propTypes = {
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
  }).isRequired,
  goToProfile: PropTypes.func.isRequired,
  switchFollow: PropTypes.func.isRequired,
}

export default SingleLike
