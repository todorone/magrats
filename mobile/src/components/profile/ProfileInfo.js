import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

import Thumbnail from '../shared/Thumbnail'

const ProfileInfo = ({ user }) => {
  return (
    <View>
      <Thumbnail big src='https://0.s3.envato.com/files/97977535/128/10_resize.png' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})

ProfileInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  })
}

export default ProfileInfo
