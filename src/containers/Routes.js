import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scene, Router } from 'react-native-router-flux'
import { TabBarBottom } from 'react-navigation'
import PropTypes from 'prop-types'

import HomeScreen from '../screens/HomeScreen'
import DiscoverScreen from '../screens/DiscoverScreen'
import SocialScreen from '../screens/SocialScreen'
import CameraScreen from '../screens/CameraScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CommentsScreen from '../screens/CommentsScreen'
import PostScreen from '../screens/PostScreen'
import LikesScreen from '../screens/LikesScreen'
import { getMyUserId } from '../selectors/selectors'

const NavBar = () => null // TODO: Remove hack and hide navbar in correct way

class Routes extends Component {
  static propTypes = {
    myUserId: PropTypes.string.isRequired,
  }

  render () {
    return (
      <Router>
        <Scene key='StackScreens' hideNavBar>
          <Scene key='Comments' component={CommentsScreen} />
          <Scene key='Likes' component={LikesScreen} />
          <Scene key='Profile' component={ProfileScreen} />
          <Scene key='Post' component={PostScreen} />

          <Scene
            key='MainScreen'
            initial
            tabs
            swipeEnabled
            showLabel={false}
            tabBarStyle={tabsContainerStyles}
            tabBarComponent={TabBarBottom}
            tabBarPosition='bottom'
            navBar={NavBar}
          >
            <Scene key='Home' component={HomeScreen} initial />
            <Scene key='Discover' component={DiscoverScreen} />
            <Scene key='Camera' component={CameraScreen} />
            <Scene key='Social' component={SocialScreen} />
            <Scene key='MyProfile' component={ProfileScreen} userId={this.props.myUserId} />
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

const mapStateToProps = state => ({
  myUserId: getMyUserId(state),
})

export default connect(mapStateToProps)(Routes)
