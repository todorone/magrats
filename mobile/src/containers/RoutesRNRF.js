import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

import HomeScreen from '../screens/HomeScreen'
import DiscoverScreen from '../screens/DiscoverScreen'
import SocialScreen from '../screens/SocialScreen'
import CameraScreen from '../screens/CameraScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CommentsScreen from '../screens/CommentsScreen'
import PostScreen from '../screens/PostScreen'
import LikesScreen from '../screens/LikesScreen'

export default class RootNew extends Component {
  render () {
    return (
      <Router>
        <Scene overlay hideNavBar>
          <Scene key='StackScreens' hideNavBar>
            <Scene key='Comments' component={CommentsScreen} />
            <Scene key='Likes' component={LikesScreen} />
            <Scene key='Profile' component={ProfileScreen} />
            <Scene key='Post' component={PostScreen} />

            <Scene key='MainScreen' hideNavBar tabs showLabel={false} tabBarStyle={tabsContainerStyles} initial>
              <Scene key='Home' component={HomeScreen} initial />
              <Scene key='Discover' component={DiscoverScreen} />
              <Scene key='Camera' component={CameraScreen} />
              <Scene key='Social' component={SocialScreen} />
              <Scene key='MyProfile' component={ProfileScreen} />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const tabsContainerStyles = {
  height: 65,
  paddingLeft: 15,
  paddingRight: 15,

  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'row',

  backgroundColor: '#fcfdfe',
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightgrey',
//   }
// })
