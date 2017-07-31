import React from 'react'
import { View, StyleSheet } from 'react-native'

import Home from '../home/Home'
import Discover from '../discover/Discover'
import Social from '../social/Social'
import Camera from '../camera/Camera'
import Profile from '../profile/Profile'
import Comments from '../comments/Comments'
import Post from '../post/Post'
import Likes from '../likes/Likes'

export default class RootNew extends React.Component {
  render () {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'lightgrey',
  }
})
