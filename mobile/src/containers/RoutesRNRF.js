import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'

import HomeScreen from '../screens/HomeScreen'
import DiscoverScreen from '../screens/DiscoverScreen'
import SocialScreen from '../screens/SocialScreen'
import CameraScreen from '../screens/CameraScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CommentsScreen from '../screens/CommentsScreen'
import PostScreen from '../screens/PostScreen'
import LikesScreen from '../screens/LikesScreen'
import { setProfileScreenToMyself } from '../actions/screens'

const NavBar = () => <View /> // TODO: Remove hack and hide navbar in correct way

class RoutesRNRF extends Component {
  goToMyProfile = () => this.props.dispatch(setProfileScreenToMyself())

  render () {
    return (
      <Router>
        <Scene key='StackScreens' hideNavBar>
          <Scene key='Comments' component={CommentsScreen} />
          <Scene key='Likes' component={LikesScreen} />
          <Scene key='Profile' component={ProfileScreen} />
          <Scene key='Post' component={PostScreen} />

          <Scene key='MainScreen' tabs showLabel={false} tabBarStyle={tabsContainerStyles} initial navBar={NavBar}>
            <Scene key='Home' component={HomeScreen} initial />
            <Scene key='Discover' component={DiscoverScreen} />
            <Scene key='Camera' component={CameraScreen} />
            <Scene key='Social' component={SocialScreen} />
            <Scene key='MyProfile' component={ProfileScreen} on={this.goToMyProfile} />
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

export default connect()(RoutesRNRF)
