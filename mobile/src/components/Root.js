import React from 'react'
import { TabNavigator } from 'react-navigation'

import Home from './screens/Home'
import Discover from './screens/Discover'
import Social from './screens/Social'
import Camera from './screens/Camera'
import Profile from './screens/Profile'

const styles = {
  tabsContainer: {
    height: 70,
    paddingLeft: 15,
    paddingRight: 15,

    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',

    backgroundColor: '#fcfdfe'
  },
}

const Root = TabNavigator({
  Home: {
    screen: Home,
  },
  Discover: {
    screen: Discover,
  },
  Camera: {
    screen: Camera,
  },
  Social: {
    screen: Social,
  },
  Profile: {
    screen: Profile,
  },
}, {
  headerMode: 'none',
  tabBarOptions: {
    showLabel: false,
    style: styles.tabsContainer,
  }
})

export default Root
