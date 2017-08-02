import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

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
      <Router>
        <Scene overlay hideNavBar>
          <Scene key='StackScreens' hideNavBar>
            <Scene key='Comments' component={Comments} />
            <Scene key='Likes' component={Likes} />
            <Scene key='Profile' component={Profile} />
            <Scene key='Post' component={Post} />

            <Scene key='MainScreen' hideNavBar tabs showLabel={false} tabBarStyle={tabsContainerStyles} initial>
              <Scene key='Home' component={Home} initial />
              <Scene key='Discover' component={Discover} />
              <Scene key='Camera' component={Camera} />
              <Scene key='Social' component={Social} />
              <Scene key='MyProfile' component={Profile} />
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
//     width: '100%',
//     flex: 1,
//     backgroundColor: 'lightgrey',
//   }
// })
